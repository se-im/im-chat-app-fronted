import friendService from './service';

const FriendsModel = {
    namespace: 'friend',

    state: {},

    reducers: {
        getList(state, { payload }) {
            return payload;
        },
        getNewFriendList(state, { payload }) {
            return payload;
        },
    },
    effects: {
        *getFriends(action, { put, call, select }) {
            const token = yield select(state => state.global.token);
            const data = yield call(friendService.getFriendList, token);
            yield put({
                type: 'getList',
                payload: { data },
            });
        },
        *getNewFriends(action, effects) {
            const token = yield effects.select(state => state.global.token);
            const newFriendList = yield effects.call(
                friendService.getNewFriendList,
                token,
            );
            yield effects.put({
                type: 'getNewFriendList',
                payload: { newFriendList },
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/FriendPage') {
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
