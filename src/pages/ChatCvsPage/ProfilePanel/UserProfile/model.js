import service from '../../../../models/global/service';
import { message } from 'antd';
import { routerRedux } from 'dva';

export default {
    namespace: 'userProfileModel',
    state: {
        cur_user: {
            id: 8,
            username: 'tom',
            description: '',
            email: '',
            phone: '',
            birthday: 1598043966000,
            avatarUrl: '',
            createTime: 1597331350000,
            shown: true,
            gender: null,
        },
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            return state;
        },

        setUser(state, action) {
            state.cur_user = action.payload;
        },

        setCurrentPanel(state, action) {
            state.current_panel = action.payload;
            return state;
        },
    },
    effects: {
        *login({ payload }, { call, put }) {
            const token = yield call(service.getToken, payload);
            console.log(token);
            yield put({
                type: 'setToken',
                payload: token,
            });
            message.success('登录成功，正在跳转');
            yield put(routerRedux.push('/'));
        },

        *updateUserInfo({ payload }, { call, put }) {
            yield call(service.fetchUpdateUserInfoRemote, payload);
            yield put({
                type: 'setUser',
                payload: payload,
            });
        },
    },
};
