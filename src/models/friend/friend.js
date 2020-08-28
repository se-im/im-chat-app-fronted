import friendService from './service';

const FriendsModel = {
    namespace: 'friend',

    state: {
        friendList: [],
        haveFetched: false,
    },

    reducers: {
        setFriends(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.friendList = payload;
            newState.haveFetched = true;
            return newState;
        },
    },

    effects: {
        *getFriends(action, { put, call, select }) {
            const haveFetched = yield select(state => state.friend.haveFetched);
            // console.log(haveFetched);
            // if (haveFetched) {
            //     return;
            // }
            const token = yield select(state => state.global.token);
            // console.log(token);
            const data = yield call(friendService.fetchFriendList, token);
            yield put({
                type: 'setFriends',
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
