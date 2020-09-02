import { Link } from 'umi';
import service from './service';
import { routerRedux } from 'dva';
import { message } from 'antd';
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
            const vcodeid = yield effects.select(
                state => state.RegisterModel.cas.id,
            );
            console.log(vcodeid);
            const value = {
                VCodeId: vcodeid,
                VCodeInput: payload.vcode,
                email: payload.email,
                password: payload.password,
                phone: payload.tel,
                username: payload.username,
            };
            const res = yield effects.call(service.register, value);
            console.log(res);
            if (res === null) {
                const token = yield effects.call(service.getToken, {
                    username: value.username,
                    password: value.password,
                });
                window.localStorage.setItem('token', token);
                yield effects.put(routerRedux.push('/'));
            }
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
