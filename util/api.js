import axios from 'axios';

const servers = {
    local: 'http://localhost:8001',
    aliyun1: 'http://zmz121.cn:8080',
    aliyun2: 'http://1.zmz121.cn:8080',
    local1: 'http://192.168.2.206',
};

let server = servers.local;

axios.defaults.baseURL = server;

const api = {
    getUserByToken: '/user/detail/token',
};

export default api;
