import { fetchCvsList, createCvs, clearUnReaded } from './service';
import util from '../../../util/util';
import { routerRedux } from 'dva';

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

        setCurCvsUnReadMsgNum(state, { payload }) {
            const cvsId = payload;
            let newState = JSON.parse(JSON.stringify(state));

            let data = newState.data;
            for (let i of data) {
                if (cvsId === i.id) {
                    i.unreadMessageNum = 0;
                }
            }
            return newState;
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
        *proposeCvs({ payload }, { call, put }) {
            const entityId = payload.entityId;
            const cvsType = payload.cvsType;
            const newCvsId = yield call(createCvs, entityId, cvsType);
            const newCvsList = yield call(fetchCvsList);
            let current_cvs = {};
            for (let i = 0; i < newCvsList.length; i++) {
                if (newCvsId === newCvsList[i].id) {
                    current_cvs = newCvsList[i];
                }
            }
            yield put({
                type: 'setCurCvs',
                payload: current_cvs,
            });
            yield put({
                type: 'setCvsList',
                payload: { data: newCvsList },
            });
            yield put(routerRedux.push('/'));
        },
        *setUnReadMsgNum({ payload }, { call, put }) {
            const res = yield call(clearUnReaded, payload.id);

            yield put({
                type: 'setCurCvsUnReadMsgNum',
                payload: payload.id,
            });
        },
        *routerToCvs({ payload }, { call, put }) {
            const entityId = payload.entityId;
            const cvsList = yield call(fetchCvsList);
            let current_cvs = {};
            for (let i = 0; i < cvsList.length; i++) {
                if (entityId === cvsList[i].relationEntityId) {
                    current_cvs = cvsList[i];
                }
            }
            yield put({
                type: 'setCurCvs',
                payload: current_cvs,
            });
            yield put(routerRedux.push('/'));
        },
    },

    subscriptions: {},
};
