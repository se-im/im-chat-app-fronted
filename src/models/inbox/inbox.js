import service from './service';

const InboxModel = {
    namespace: 'inbox',

    state: {
        cvsInboxMap: new Map(),
        cur_inbox: [
            {
                createTime: 1598873766000,
                cvsId: 37,
                id: 51,
                messageId: 22,
                msg: 'sfsfs',
                readed: false,
                selfSend: true,
                senderAvatarUrl:
                    'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
                senderId: 8,
                senderName: 'tom',
                syncId: 1,
            },
        ],
    },

    reducers: {
        setCvsInbox(state, { payload }) {
            // state.cvsInboxMap
            state.cur_inbox = payload;
        },
    },

    effects: {
        *getInboxList({ payload }, { call, put }) {
            const cvsId = payload.id;
            let inboxList = yield call(service.fetchInbox, cvsId);
            yield put({
                type: 'setCvsInbox',
                payload: inboxList,
            });
        },
    },

    subscriptions: {},
};

export default InboxModel;
