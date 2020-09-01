import friendService from './service';

const FriendsModel = {
    namespace: 'friend',

    state: {
        friendList: [],
        haveFetched: false,

        cur_friend: {
            friendId: -1,
            note: '',
            avatarUrl: '',
        },

        haveNewFriendChosen: true,
    },

    reducers: {
        setFriends(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.friendList = payload;
            newState.haveFetched = true;
            return newState;
        },
        setCurFriend(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.cur_friend = payload;
            return newState;
        },
    },

    effects: {
        *getFriends(action, { put, call, select }) {
            const haveFetched = yield select(state => state.friend.haveFetched);
            const token = yield select(state => state.global.token);
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
