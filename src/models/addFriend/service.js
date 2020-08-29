import request from '../../../util/request';
import api from '../../../util/api';

//添加好友
const addNewFriend = async (token, id, note) => {
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
export default { addNewFriend };
