import { getUserByToken } from './service';
import { Link } from 'umi';

const ChatModel = {
    namespace: 'chatPanel',
    state: {},
    reducers: {
        //action->{type, payload}
        setUserR(state, action) {
            return action.payLoad;
        },
    },
    effects: {
        //effects -> {put, call}
        *getUser(action, effects) {
            const token1 = yield effects.select(state => state.global.token);
            const data = yield effects.call(getUserByToken, token1);
            yield effects.put({
                type: 'global/setUser',
                payload: data,
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'getUser',
                    });
                }
            });
        },
    },
};

export default ChatModel;
