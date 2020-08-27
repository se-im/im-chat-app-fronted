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
        getNewFriendList(state, { payload }) {
            return payload;
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
        *getNewFriends(action, effects) {
            const token = yield effects.select(state => state.global.token);
            const newFriendList = yield effects.call(
                friendService.getNewFriendList,
                token,
            );
            // yield effects.put({
            //     type: 'getNewFriendList',
            //     payload: { newFriendList },
            // });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/friend') {
                    dispatch({
                        type: 'getFriends',
                    });
                    dispatch({
                        type: 'getNewFriends',
                    });
                }
            });
        },
    },
};

export default FriendsModel;
