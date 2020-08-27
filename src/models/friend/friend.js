import friendService from './service';

const FriendsModel = {
    namespace: 'friend',

    state: {
        friendList: [],
        haveFetched: false,
    },

    reducers: {
        setFriendList(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.friendList = payload;
            newState.haveFetched = true;
            return newState;
        },
    },
    effects: {
        *getFriends(action, { put, call, select }) {
            const haveFetched = yield select(state => state.friend.haveFetched);
            console.log(haveFetched);
            if (haveFetched) {
                return;
            }
            const token = yield select(state => state.global.token);
            const data = yield call(friendService.getFriendList, token);
            console.log(data);
            yield put({
                type: 'setFriendList',
                payload: data,
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/friend') {
                    dispatch({
                        type: 'getFriends',
                    });
                }
            });
        },
    },
};

export default FriendsModel;
