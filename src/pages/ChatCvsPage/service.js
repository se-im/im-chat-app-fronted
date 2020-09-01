import axios from 'axios';
import { message } from 'antd';
import api from '../../../util/api';
import request from '../../../util/request';

const getUserByToken = async token => {
    return request
        .get(api.user_api.getUserByToken, { token: token })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const getFriendInfoById = async id => {
    return request
        .post(api.user_api.getFriendInfoById, { friendId: id })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const updateFriendNote = async (id, note) => {
    return request
        .post(api.user_api.updateFriendNote, { friendId: id, note: note })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const getGroupInfoById = async id => {
    return request
        .post(api.user_api.getGroupInfo, { groupId: id })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const updateGroupInfoById = async (id, avatar, name, desc) => {
    return request
        .post(api.user_api.updateGroupInfo, {
            id: id,
            avatarUrl: avatar,
            name: name,
            description: desc,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const getGroupMembersByGroupId = async id => {
    return request
        .post(api.user_api.getAllGroupMembers, { groupId: id })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const exitGroupByGroupId = async id => {
    return request
        .post(api.user_api.exitGroupById, { groupId: id })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const addGroupMembers = async (id, userID) => {
    return request
        .post_json(api.user_api.addGroupMembersByUserId, [userID], {
            groupId: id,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export {
    getUserByToken,
    getFriendInfoById,
    updateFriendNote,
    getGroupInfoById,
    updateGroupInfoById,
    getGroupMembersByGroupId,
    exitGroupByGroupId,
    addGroupMembers,
};
export default { getUserByToken };
