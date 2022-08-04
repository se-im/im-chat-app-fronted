const servers = {
    local: 'http://localhost',
    tencentCloud: 'http://zmz121.cn',
    zmz: 'http://192.168.2.206',
    cui: 'http://172.29.12.13',
};

// let server = servers.aliyun2;
let server = servers.local;
let fileServer = servers.tencentCloud;
// let server = servers.zmz;

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
    getUserByIdOrName: '/user/friend/detail/id_or_username',
    register: '/user/register',
    getGroupInfo: '/user/group/queryGroupInfo',
    updateGroupInfo: '/user/group/updateGroupInfo',
    getAllGroupMembers: '/user/group/selectGroupUser',
    exitGroupById: '/user/group/withdrawFromGroup',
    addGroupMembersByUserId: '/user/group/addGroupUser',
    groupJoined: '/user/group/joined',
    createGroup: '/user/group/create',
    getVcode: '/user/vcode/get',
};

const chat_api = {
    getCvsList: '/chat/cvs/list',
    getAllInbox: '/chat/inbox/query/all',
    sendMessage: '/chat/message/send',
    createCvs: '/chat/cvs/create',
    clearUnReaded: '/chat/cvs/clearUnReaded',
    getLastInbox: '/chat/inbox/query/syncid/lastten',
    getSyncIdInbox: '/chat/inbox/query/syncid',
};

const file_api = {
    uploadHeadPic: '/file/upload/headpic',
};

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

export { user_api, chat_api, file_api, apiPortMap, server, fileServer };

export default { user_api, chat_api, file_api, apiPortMap, server, fileServer };
