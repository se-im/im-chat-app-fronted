import { getMessagePanelInfoList } from './service';
import { getRemoteList } from '../CvsPanel/CvsBody/service';

const MsgModel = {
    namespace: 'Message',
    state: {
        receiver: {
            userPhoto: '',
            userName: '',
            userState: '',
            receiveMsg: '',
            sendMsg: '',
        },
        sender: {
            avatarUrl:
                'https://avatars1.githubusercontent.com/u/30034514?s=400&u=28654b80d6514965737b6a88c2b1857c130060e0&v=4',
            cvsName: 'Jim Green',
            lastMessage: '',
            lastMessageTime: '',
            unreadMessageNum: '',
        },
    },
    reducers: {
        setMessagePanelInfo(state, payload) {
            let new_state = JSON.parse(JSON.stringify(state));
            new_state.receiver = payload.payload.data1;
            // new_state.sender = payload.payload.data2;
            return new_state;
        },
    },
    effects: {
        *getMessagePanelInfo({ payload }, { put, call }) {
            const data1 = yield call(getMessagePanelInfoList);
            const data2 = yield call(getRemoteList);
            yield put({
                type: 'setMessagePanelInfo',
                payload: { data1, data2 },
            });
        },
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     history.listen(({ pathname }) => {
        //         if (pathname === '/') {
        //             dispatch({
        //                 type: 'getMessagePanelInfo',
        //             });
        //         }
        //     });
        // },
    },
};

export default MsgModel;
