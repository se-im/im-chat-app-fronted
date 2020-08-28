const servers = {
    local: 'http://localhost',
    aliyun1: 'http://zmz121.cn',
    aliyun2: 'http://1.zmz121.cn',
    local1: 'http://192.168.2.206',
    cui: 'http://172.29.12.13',
};

// let server = servers.aliyun2;
let server = servers.cui;

const user_api = {
    getUserByToken: '/user/detail/token',
    login: '/user/login',
    friend: '/user/friend/queryFriend',
    newFriend: '/user/friend/queryFriendRequestReceived',
    updateUserInfo: '/user/update',
};

const chat_api = {
    getCvsList: '/chat/cvs/list',
};

const file_api = {};

const user_apis = {
    port: '8001',
    api: user_api,
};

const chat_apis = {
    port: '8002',
    api: chat_api,
};

const file_apis = {
    port: '8010',
    api: file_api,
};

let apiPortMap = new Map();
for (let url in user_apis.api) {
    apiPortMap.set(user_apis.api[url], user_apis.port);
}

for (let url in chat_apis.api) {
    apiPortMap.set(chat_apis.api[url], chat_apis.port);
}

for (let url in file_apis.api) {
    apiPortMap.set(file_apis.api[url], file_apis.port);
}

export { user_api, chat_api, file_api, apiPortMap, server };

export default { user_api, chat_api, file_api, apiPortMap, server };
