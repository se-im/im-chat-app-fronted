const servers = {
    local: 'http://localhost',
    aliyun1: 'http://zmz121.cn',
    aliyun2: 'http://1.zmz121.cn',
    zmz: 'http://192.168.2.206',
    cui: 'http://172.29.12.13',
};

// let server = servers.aliyun2;
// let server = servers.cui;
let server = servers.zmz;

const user_api = {
    getUserByToken: '/user/detail/token',
    getUserById: '/user/detail/id/',
    login: '/user/login',
    friend: '/user/friend/queryFriend',
    newFriend: '/user/friend/queryFriendRequestReceived',
    processFriendRequest: '/user/friend/processFriendRequest',
    addNewFriend: '/user/friend/add_friend',
    updateUserInfo: '/user/update',
    updateUserPassword: '/user/reset_password',
    getFriendInfoById: '/user/friend/queryFriendDetail',
    updateFriendNote: '/user/friend/updateFriendNote',

    getGroupInfo: '/user/group/queryGroupInfo',
    updateGroupInfo: '/user/group/updateGroupInfo',
    getAllGroupMembers: '/user/group/selectGroupUser',
    exitGroupById: '/user/group/withdrawFromGroup',
    addGroupMembersByUserId: '/user/group/addGroupUser',
    groupJoined: '/user/group/joined',
    createGroup: '/user/group/create',
};

const chat_api = {
    getCvsList: '/chat/cvs/list',
    getAllInbox: '/chat/inbox/query/all',
    sendMessage: '/chat/message/send',
    createCvs: '/chat/cvs/create',
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
