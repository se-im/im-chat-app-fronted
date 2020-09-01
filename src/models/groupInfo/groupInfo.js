import groupInfoService from './service';

const groupInfo = {
    namespace: 'groupInfo',

    state: {
        cur_groupInfo: {},
        haveGroupChosen: false,
    },

    reducers: {
        setGroupInfo(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.cur_groupInfo = payload;
            newState.haveGroupChosen = true;
            // console.log(newState.cur_groupInfo);
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
