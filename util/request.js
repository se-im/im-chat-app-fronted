import axios from 'axios'

const servers = {
    local: 'http://localhost:8080',
    aliyun1:'http://zmz121.cn:8080',
    aliyun2:'http://1.zmz121.cn:8080',
}

let server = servers.local;


axios.defaults.baseURL = server;
