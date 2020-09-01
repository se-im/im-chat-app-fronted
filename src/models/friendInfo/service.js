import request from '../../../util/request';
import api from '../../../util/api';

const fetchFriendInfo = async friendId => {
    return request
        .get(api.user_api.getUserById, { id: friendId })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export default { fetchFriendInfo };
