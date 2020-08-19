import { routerRedux } from 'dva/router';

export default {
    namespace: 'global',
    state: {
        token: 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2MjkzMzUwMDAsImlhdCI6MTU5Nzc5OTAwMH0.wMsLXVQANPknS9lXKwAJC818-LbAorON9MsUBsVA0k0',
        user: {},
    },
    reducers: {
        setText(state) {
            return {
                ...state,
                text: 'setted dva',
            };
        },
        signin(state) {
            return {
                ...state,
                login: true,
            };
        },
    },
    effects: {
        *login(action, { call, put }) {
            yield put({
                type: 'signin',
            });
            yield put(routerRedux.push('/admin'));
        },
        *throwError() {
            throw new Error('hi error');
        },
    },
};
