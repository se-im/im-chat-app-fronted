import axios from 'axios';
import { server, apiPortMap } from './api';
import { message } from 'antd';
import global from '../src/models/global/global';
import querystring from 'querystring';
const response_status = {
    success: 200,
    unlogin: 401,
};

axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8;Accept-Language:zh-CN,zh;q=0.8';

// 请求body拦截器
// axios.interceptors.request.use(config => {
//     let newConfig = config;
//     newConfig = {
//         ...config,
//         headers: {
//             post: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 token: global.state.token,
//             },
//             get: {
//                 token: global.state.token,
//             },
//             put: {
//                 token: global.state.token,
//             },
//             delete: {
//                 token: global.state.token,
//             },
//         },
//     };
//     return newConfig;
// });

// 返回拦截器
axios.interceptors.response.use(
    config => {
        try {
            let response = config.data;
            if (response !== undefined) {
                if (response.status === response_status.success) {
                    return response.data;
                } else {
                    message.error(response.msg);
                    console.log(response);
                    if (response.status === response_status.unlogin) {
                        history.push('/login/index');
                    }
                }
                return Promise.reject(response.msg);
            }
        } catch (err) {
            return Promise.reject(err.message);
        }
    },
    error => {
        message.error(error.message);
        return Promise.reject(error);
    },
);

function genDomain(url) {
    return server + ':' + apiPortMap.get(url + '');
}

let token = global.state.token;

const refreshAxiosConfig = token1 => {
    token = token1;
};

const get = (url, parmas) => {
    let domain = genDomain(url);
    url = domain + url;
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: parmas,
                headers: { token: token },
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                // throw err;
                // reject(err);
            });
    });
};
const post = (url, params) => {
    let domain = genDomain(url);
    url = domain + url;
    return new Promise((resolve, reject) => {
        axios
            .post(url, querystring.stringify(params), {
                headers: { token: token },
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                throw err;
                // reject(err);
            });
    });
};

export default { get, post, refreshAxiosConfig };
