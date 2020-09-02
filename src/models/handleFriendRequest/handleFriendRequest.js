import friendService from './service';
import { message } from 'antd';
import { routerRedux } from 'dva';

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
            message.success(result);
            yield effects.put(routerRedux.push('/friend'));
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
