import request from '../../../util/request';
import api from '../../../util/api';

//添加好友
const addNewFriend = async (id, note) => {
    return request
        .post(api.user_api.addNewFriend, {
            friendUserIdTobeAdded: id,
            note: note,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

const fetchNewFriendInfo = async inputMsg => {
    return request
        .post(api.user_api.getUserByIdOrName, { query: inputMsg })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { addNewFriend, fetchNewFriendInfo };
