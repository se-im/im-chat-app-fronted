import getMessagePanelInfoList from './service';

const MsgModel = {
    namespace: 'Message',
    state: {
        userPhoto: '',
        userName: '',
        userState: '',
        receiveMsg: '',
        sendMsg: '',
    },
    reducers: {
        setMessagePanelInfo(state, payload) {
            let new_state = JSON.parse(JSON.stringify(state));
            new_state = payload.payload.data;
            return new_state;
        },
    },
    effects: {
        *getMessagePanelInfo({ payload }, { put, call }) {
            const data = yield call(getMessagePanelInfoList);
            yield put({
                type: 'setMessagePanelInfo',
                payload: { data },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'getMessagePanelInfo',
                    });
                }
            });
        },
    },
};

export default MsgModel;
