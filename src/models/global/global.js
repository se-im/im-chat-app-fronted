import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';
import request from '../../../util/request';

export default {
    namespace: 'global',
    state: {
        token:
            'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2MzAzOTAyOTIsImlhdCI6MTU5ODg1NDI5Mn0.ImPWN3MSrkhGDzAdIntKljV7UQ7_FJBO1InpB1cO5HU',
        cur_user: {
            id: 19,
            username: 'yxz',
            description: 'ddd',
            email: '',
            phone: '',
            birthday: 1598043966000,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
            createTime: 1597331350000,
            shown: true,
            gender: 'mail',
        },
        current_panel: 1,
    },
    reducers: {
        setToken(state, action) {
            console.log(action.payload);
            state.token = action.payload;
            request.refreshAxiosConfig(action.payload);
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
