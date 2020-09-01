import { fetchCvsList } from './service';
import util from '../../../util/util';

export default {
    namespace: 'cvs',
    state: {
        data: [],
        cur_cvs: {
            id: 17,
            cvsName: 'a3tom的群聊',
            cvsType: 'G',
            relationEntityId: 7,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200321080339502649.png',
            lastMessage: '啊啊啊',
            senderName: '小明',
            unreadMessageNum: 1,
            lastMessageTime: 1598580054000,
            lastMessageTimeFormated: '02:00',
            notDisturb: false,
            stick: false,
            ext: '',
            online: false,
        },
        cur_cvs_index: -1,
        haveCvsChosen: false,
    },
    reducers: {
        setCvsList(state, action) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.data = util.sortCvs(action.payload.data);
            return newState;
        },

        setCurCvs(state, action) {
            state.cur_cvs = action.payload;
            state.haveCvsChosen = true;
        },
    },
    effects: {
        *getCvslist(action, { put, call, select }) {
            const data = yield call(fetchCvsList);
            yield put({
                type: 'setCvsList',
                payload: { data },
            });
        },
    },

    subscriptions: {},
};
