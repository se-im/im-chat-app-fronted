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

export { getUserByToken, getFriendInfoById, updateFriendNote };
export default { getUserByToken };
