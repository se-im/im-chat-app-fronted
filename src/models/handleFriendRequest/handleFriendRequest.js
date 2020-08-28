import friendService from './service';

const handleFriendRequest = {
    namespace: 'handleFriendRequest',

    state: {
        haveAdded: false,
    },

    reducers: {
        setFriendRequest(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            if (payload.equals('同意好友请求！')) {
                newState.haveAdded = true;
            }
            return newState;
        },
    },

    effects: {
        *handleFriendRequest(action, effects) {
            console.log(1);
            const data = action.payload;
            const requestId = data.requestId;
            const status = data.status;
            const result = yield effects.call(
                friendService.handleNewFriendRequest,
                requestId,
                status,
            );
            // console.log(result);
            yield effects.put({
                type: 'setFriendRequest',
                payload: result,
            });
        },
    },
};

export default handleFriendRequest;
