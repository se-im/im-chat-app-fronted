import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';
import request from '../../../util/request';

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
    effects: {
        *hanleNewMessage(action, effect) {},

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
                                    type: 'hanleNewMessage',
                                    payload: msg.content,
                                });
                        }
                        console.log(msg);
                        //dispatch({ type, payload: data })
                    });
                }
            });
        },
    },
};
