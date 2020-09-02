import { Link } from 'umi';
import service from './service';
const RegisterModel = {
    namespace: 'RegisterModel',
    state: {
        cas: {
            anwser: 'C6H4ClN3S',
            cas: '',
            id: 923,
        },
    },
    reducers: {
        //action->{type, payload}
        setCas(state, action) {
            state.cas = action.payload;
        },
    },
    effects: {
        *getVcodeImage(action, effects) {
            const data = yield effects.call(service.getVcode);
            console.log(data);
            yield effects.put({
                type: 'setCas',
                payload: data,
            });
        },

        *register({ payload }, effects) {
            console.log(payload);
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                if (location.pathname === '/register/index') {
                    dispatch({
                        type: 'getVcodeImage',
                    });
                }
            });
        },
    },
};

export default RegisterModel;
