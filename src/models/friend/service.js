import request from '../../../util/request';
import api from '../../../util/api';

const getFriendList = async token => {
    return request
        .post(api.user_api.friend, token)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const getNewFriendList = async token => {
    return request
        .post(api.user_api.newFriend, token)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { getFriendList, getNewFriendList };
