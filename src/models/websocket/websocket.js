import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';
import request from '../../../util/request';
import util from '../../../util/util';

import WebSocketManager from './WebSocketManager';

export default {
    namespace: 'websocket',
    state: {
        ws_start: false,
    },
    reducers: {
        setss(state, { payload }) {
            console.log(payload);
        },
    },

    /*
    createTime: 1598969110029
    cvsId: 70
    messageId: 122
    msg: "ADASD"
    msgContentType: "text"
    selfSend: false
    senderAvatarUrl: "http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png"
    senderId: 19
    senderName: "yxz"
    syncId: 34
     */
    effects: {
        *handleNewMessage({ payload }, effect) {
            console.log('处理更新会话试图');
            let newInbox = payload;
            let cvsList = yield effect.select(state => state.cvs.data);
            let cur_cvs = effect.select(state => state.cvs.cur_cvs);
            let newCvsList = JSON.parse(JSON.stringify(cvsList));
            //TODO 会话识图本地不存在
            let finded = false;
            for (let i = 0; i < newCvsList.length; i++) {
                if (newInbox.cvsId === newCvsList[i].id) {
                    if (cur_cvs.id !== newInbox.cvsId) {
                        newCvsList[i].unreadMessageNum =
                            newCvsList[i].unreadMessageNum + 1;
                    }
                    newCvsList[i].lastMessageTime = newInbox.createTime;
                    newCvsList[i].lastMessage = newInbox.msg;
                    newCvsList[
                        i
                    ].lastMessageTimeFormated = util.formatDateOfHourAndMinute(
                        newInbox.createTime,
                    );
                    newCvsList[i].senderName = newInbox.senderName;
                    finded = true;
                    break;
                }
            }

            //会话试图本地不存在，添加
            if (!finded) {
                yield effect.put({
                    type: 'cvs/getCvslist',
                });
            } else {
                yield effect.put({
                    type: 'cvs/setCvsList',
                    payload: { data: newCvsList },
                });
            }
        },

        *handleNewMessageOfInbox({ payload }, effect) {
            let newInbox = payload;
            let old_inbox = yield effect.select(state => state.inbox.cur_inbox);
            let cur_inbox = JSON.parse(JSON.stringify(old_inbox));
            let cur_cvs = yield effect.select(state => state.cvs.cur_cvs);
            if (cur_cvs === undefined || cur_cvs === null) {
                return;
            }
            if (cur_cvs.id === newInbox.cvsId) {
                cur_inbox.push(newInbox);
            }
            yield effect.put({
                type: 'inbox/setCvsInbox',
                payload: cur_inbox,
            });
        },

        *setWebsocketToken(action, effects) {
            const token = yield effects.select(state => state.global.token);
            yield WebSocketManager.setToken(token);
        },

        *startWebSocket(action, effects) {
            const token = yield effects.select(state => state.global.token);
            yield WebSocketManager.start(token, effects.put);
        },

        *stopWebSocket(action, effects) {
            yield WebSocketManager.stop();
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                setTimeout(() => {}, 1000);
                if (location.pathname === '/') {
                    WebSocketManager.setDispatch(msg => {
                        switch (msg.packetType) {
                            case 1:
                                dispatch({
                                    type: 'handleNewMessage',
                                    payload: msg.content,
                                });

                                dispatch({
                                    type: 'handleNewMessageOfInbox',
                                    payload: msg.content,
                                });
                        }
                        //dispatch({ type, payload: data })
                    });
                }
            });
        },
    },
};
