import { routerRedux } from 'dva';
import produce from 'immer';

export default {
    namespace: 'cvs',
    state: {},
    reducers: {
        setUser(state, action) {
            console.log(action.payload);
            return produce(state, draft => {
                draft.user = action.payload;
            });
        },
        setText(state, action) {
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
