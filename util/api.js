const servers = {
    local: 'http://localhost',
    aliyun1: 'http://zmz121.cn',
    aliyun2: 'http://1.zmz121.cn',
    local1: 'http://192.168.2.206',
};

let server = servers.aliyun2;

const user_api = {
    port: '8001',
    api: {
        getUserByToken: '/user/detail/token',
    },
};

export default { user_api, server };
