import axios from 'axios';
import api from './api';
import { message } from 'antd';
import global from '../src/models/global';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    401: '用户没有登录',
};

// 全局默认配置
axios.defaults.timeout = 10000;

// 请求body拦截器
axios.interceptors.request.use(config => {
    let newConfig = config;
    newConfig = {
        ...config,
        headers: {
            post: {
                token: global.state.token,
            },
            get: {
                token: global.state.token,
            },
            put: {
                token: global.state.token,
            },
            delete: {
                token: global.state.token,
            },
        },
    };
    return newConfig;
});

// 返回拦截器
axios.interceptors.response.use(
    config => {
        console.log(config);
        let response = config.data;
        if (response.status === codeMessage['200']) {
            return config.data;
        } else if (response.status === codeMessage['401']) {
            message.error(response.msg);
            // history.push("/login/index")
        }
    },
    error => {
        if (JSON.stringify(error).indexOf('timeout') !== -1) {
            message.error('连接超时,请刷新试试');
        } else {
            message.error(error.response);
        }
    },
);

const get = (url, parmas) => {
    console.log(url);
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: parmas,
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(res => {
                if (res) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default { get, post };
