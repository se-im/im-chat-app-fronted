import friendInfoService from './service';

const friendInfo = {
    namespace: 'friendInfo',
    state: {
        cur_friendInfo: {},
    },

    reducers: {
        setFriendInfo(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.cur_friendInfo = payload;
            return newState;
        },
    },
    effects: {
        *getFriendInfo({ payload }, { call, put }) {
            const info = yield call(friendInfoService.fetchFriendInfo, payload);
            yield put({
                type: 'setFriendInfo',
                payload: info,
            });
        },
    },
    subscriptions: {},
};
export default friendInfo;
