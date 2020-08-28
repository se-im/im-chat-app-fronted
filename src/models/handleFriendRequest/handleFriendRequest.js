import friendService from './service';
import { message } from 'antd';

const handleFriendRequest = {
    namespace: 'handleFriendRequest',

    state: {
        responseMsg: '',
    },

    reducers: {
        setFriendRequest(state, { payload }) {
            console.log(payload);
            let newState = JSON.parse(JSON.stringify(state));
            newState.responseMsg = payload;
            return newState;
        },
    },

    effects: {
        *agreeFriendRequest(action, effects) {
            const data = action.payload;
            const requestId = data.requestId;
            const status = data.status;
            const result = yield effects.call(
                friendService.handleNewFriendRequest,
                requestId,
                status,
            );
            yield effects.put({
                type: 'setFriendRequest',
                payload: result,
            });
            message.success(111);
        },
        *refuseFriendRequest(action, effects) {
            const data = action.payload;
            const requestId = data.requestId;
            const status = data.status;
            const result = yield effects.call(
                friendService.handleNewFriendRequest,
                requestId,
                status,
            );
            yield effects.put({
                type: 'setFriendRequest',
                payload: result,
            });
        },
    },
};

export default handleFriendRequest;
