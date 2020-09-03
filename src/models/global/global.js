import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';
import request from '../../../util/request';

export default {
    namespace: 'global',
    state: {
        token:
            'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2MzA2Mjg1OTksIml' +
            'hdCI6MTU5OTA5MjU5OX0.sJROXZPpVCBi84w96-jbPrMCVU66ZeRP09A-lahVFSI',
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
        tokenSeted: false,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            state.tokenSeted = true;
            request.refreshAxiosConfig(action.payload);
            return state;
        },

        setUser(state, action) {
            state.cur_user = action.payload;
        },
        setTokenSeted(state, action) {
            state.tokenSeted = !state.tokenSeted;
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
            yield put({
                type: 'setTokenSeted',
            });
            message.success('登录成功，正在跳转');
            window.localStorage.setItem('token', token);
            yield put(routerRedux.push('/'));
        },

        *updateUserInfo({ payload }, { call, put }) {
            yield call(service.fetchUpdateUserInfoRemote, payload);
            yield put({
                type: 'setUser',
                payload: payload,
            });
            message.success('用户修改成功');
        },
        *updateUserPassword({ payload }, effects) {
            yield effects.call(service.fetchUpdateUserPasswordRemote, payload);
            message.success('密码修改成功');
            yield effects.put(routerRedux.push('/login/index'));
        },
    },
};
