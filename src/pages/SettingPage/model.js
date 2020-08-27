import { getUserByToken } from './service';
import { Link } from 'umi';

const ChatModel = {
    namespace: 'setting',
    state: {},
    reducers: {
        //action->{type, payload}
        setUserR(state, action) {
            return action.payLoad;
        },
    },
    effects: {
        //effects -> {put, call}
        *setUser(action, effects) {
            const token = yield effects.select(state => state.global.token);
            const data = yield effects.call(getUserByToken, token);

            if (data === undefined) {
            }
            yield effects.put({
                type: 'global/setUser',
                payload: data,
            });
        },
    },
    /*    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'setUser',
                    });
                }
            });
        },
    },*/
};

export default ChatModel;
