import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';

let token =
    'eyJ0eXBlIjoiSldUIiwiYW' +
    'xnIjoiSFMyNTYifQ.eyJleHAiOjE2MzAwNjkzMzgsImlhdCI6MTU5ODUzMzMzOH0.xhaSotlTN0MJgZK19FyC_HM7kgDEZNRPcrluurCI5xw';
export default {
    namespace: 'global',
    state: {
        token: token,
        cur_user: {
            id: 8,
            username: 'name',
            description: '',
            email: '',
            phone: '',
            birthday: 1598043966000,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
            createTime: 1597331350000,
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
