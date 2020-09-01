import groupInfoService from './service';

const groupInfo = {
    namespace: 'groupInfo',

    state: {
        cur_groupInfo: [
            {
                id: 30,
                name: '47tom的群聊',
                avatarUrl:
                    'http://1.zmz121.cn:8010/res/file/pic/17201800000320200321080339502649.png',
                memberNum: 5,
                createUserId: 8,
                description: '',
                createTime: 1598920229000,
            },
        ],
        haveGroupChosen: false,
    },

    reducers: {
        setGroupInfo(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.cur_groupInfo = payload;
            newState.haveGroupChosen = true;
            return newState;
        },
    },
    effects: {
        *getGroupInfo({ payload }, { call, put }) {
            const info = yield call(groupInfoService.fetchGroupInfo, payload);
            yield put({
                type: 'setGroupInfo',
                payload: info,
            });
        },
    },
    subscriptions: {},
};
export default groupInfo;
