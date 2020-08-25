import { getUserByToken } from './service';
import { Link } from 'umi';

const LoginModel = {
    namespace: 'login',
    state: {
        username: '',
        password: '',
    },
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
                history.push('/login');
            }
            yield effects.put({
                type: 'global/setUser',
                payload: data,
            });
        },
    },

};

export default ChatModel;
