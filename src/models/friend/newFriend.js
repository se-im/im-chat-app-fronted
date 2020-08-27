import friendService from './service';

const newFriend = {
    namespace: 'newFriend',
    state: {
        newFriendList: [],
        haveFetched: false,
    },
    reducer: {
        setNewFriendList(state, action) {
            const newState = JSON.parse(JSON.stringify(state));
            newState.newFriendList = action.payload;
            newState.haveFetched = true;
            return newState;
        },
    },
    effects: {
        *getNewFriends(action, effects) {
            const haveFetched = effects.select(state.newFriend.haveFetched);
            if (haveFetched) return;
            const token = yield effects.select(state => state.global.token);
            const newFriendList = yield effects.call(
                friendService.getNewFriendList,
                token,
            );
            yield effects.put({
                type: 'setNewFriendList',
                payload: newFriendList,
            });
        },
    },
    subscription: {
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
