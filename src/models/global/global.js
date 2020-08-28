import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';

let token =
    'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2MzAxMzI1MjksImlhdCI6MTU5ODU5NjUyOX0.idXHGPcESWinDaLXE1HMCpgbH07vSUs5KZDSQgSFYdY';
export default {
    namespace: 'global',
    state: {
        token: token,
        cur_user: {
            id: 12,
            username: 'Jim',
            description: '',
            email: '',
            phone: '',
            birthday: 1598645123000,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200121080107498725.png',
            createTime: 1598044634000,
            shown: true,
            gender: null,
        },
        current_panel: 1,
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
