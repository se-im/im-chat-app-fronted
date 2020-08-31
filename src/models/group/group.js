import groupService from './service';

const GroupsModel = {
    namespace: 'group',

    state: {
        groupList: [],
        haveFetched: false,
    },

    reducers: {
        setGroups(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.groupList = payload;
            newState.haveFetched = true;
            return newState;
        },
    },

    effects: {
        *getGroups(action, { put, call, select }) {
            const haveFetched = yield select(state => state.friend.haveFetched);
            const token = yield select(state => state.global.token);
            const data = yield call(groupService.fetchGroupList, token);
            console.log(data);
            yield put({
                type: 'setGroups',
                payload: data,
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/group') {
                    dispatch({
                        type: 'getGroups',
                    });
                }
            });
        },
    },
};

export default GroupsModel;
