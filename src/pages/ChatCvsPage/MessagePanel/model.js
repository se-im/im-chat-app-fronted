import { getMessagePanelInfoList } from './service';
import service from './service';
import { message } from 'antd';

const MsgModel = {
    namespace: 'Message',
    state: {
        showspin: false,
    },
    reducers: {
        changeSpin(state, { payload }) {
            if (state.showspin) {
                state.showspin = false;
            } else {
                state.showspin = true;
            }
        },
    },
    effects: {
        *sendMessageToRemote({ payload }, { put, call, select }) {
            let msg = payload;
            const cur_cvs = yield select(state => state.cvs.cur_cvs);
            yield call(service.sendMessageRemote, cur_cvs.id, payload);
            message.success('消息发送成功');
        },

        *getNewInbox({ payload }, { put, call, select }) {
            console.log(payload);
            const data = yield call(service.getNewInbox, payload);
            if (data !== null) {
                yield put({
                    type: 'addNewInbox',
                    payload: data,
                });
            }
        },

        *addNewInbox({ payload }, effect) {
            let newInbox = payload;
            let old_inbox = yield effect.select(state => state.inbox.cur_inbox);
            let cur_inbox = JSON.parse(JSON.stringify(old_inbox));
            for (var i in newInbox) {
                cur_inbox.unshift(newInbox[i]);
            }
            yield effect.put({
                type: 'inbox/setCvsInbox',
                payload: cur_inbox,
            });
            yield effect.put({
                type: 'changeSpin',
            });
        },
    },
};

export default MsgModel;
