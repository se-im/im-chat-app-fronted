import friendInfoService from './service';

const friendInfo = {
    namespace: 'friendInfo',

    state: {
        cur_friendInfo: [
            {
                id: 13,
                username: 'hao',
                description: '',
                email: '',
                phone: '',
                birthday: 1597998000,
                avatarUrl:
                    'http://1.zmz121.cn:8010/res/file/pic/17201800000320200121080107498725.png',
                createTime: 1598044863000,
                shown: true,
                gender: 'male',
            },
        ],
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
