import { routerRedux } from 'dva';
import produce from 'immer';
import service from './service';
import { message } from 'antd';

let token =
    'eyJ0eXBlIjoiSldUIiwiYWxn' +
    'IjoiSFMyNTYifQ.eyJleHAiOjE2Mjk5NDcxMzQsImlhdCI6MTU5ODQxMTEzNH0.1KD0qOmY6BESz-gD1GD7jOyWXnXR1twPT3WBijRMA78';
export default {
    namespace: 'global',
    state: {
        token: token,
        cur_user: {
            id: 8,
            username: 'tom',
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
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
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
        *throwError() {
            throw new Error('hi error');
        },
    },
};
