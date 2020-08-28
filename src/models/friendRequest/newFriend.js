import friendService from './service';

const NewFriend = {
    namespace: 'newFriend',

    state: {
        newFriendList: [],
        haveFetched: false,
        newFriendListLength: 0,
    },

    reducers: {
        setNewFriends(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.newFriendList = payload;
            newState.newFriendListLength = payload.length;
            newState.haveFetched = true;
            return newState;
        },
    },

    effects: {
        *getNewFriends(action, { put, call, select }) {
            const haveFetched = yield select(
                state => state.newFriend.haveFetched,
            );
            // console.log(haveFetched);
            // if (haveFetched) {
            //     return;
            // }
            const token = yield select(state => state.global.token);
            const newFriendList = yield call(
                friendService.fetchNewFriendList,
                token,
            );
            // console.log(newFriendList)
            yield put({
                type: 'setNewFriends',
                payload: newFriendList,
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/friend') {
                    dispatch({
                        type: 'getNewFriends',
                    });
                }
            });
        },
    },
};

export default NewFriend;
