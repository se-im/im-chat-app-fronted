import friendService from './service';

const newFriend = {
    namespace: 'newFriend',
    state: {
        newFriendList: [],
        haveFetched: false,
    },
    reducers: {
        setNewFriends(state, action) {
            const newState = JSON.parse(JSON.stringify(state));
            newState.newFriendList = action.payload;
            newState.haveFetched = true;
            return newState;
        },
    },
    effects: {
        *getNewFriends(action, effects) {
            const haveFetched = effects.select(
                state => state.newFriend.haveFetched,
            );
            // console.log(haveFetched);
            if (haveFetched) {
                return;
            }
            const token = yield effects.select(state => state.global.token);
            const newFriendList = yield effects.call(
                friendService.fetchNewFriendList,
                token,
            );
            console.log(newFriendList);
            yield effects.put({
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
export default newFriend;
