import request from '../../../util/request';
import api from '../../../util/api';

//好友请求
const handleNewFriendRequest = async (requestId, status) => {
    return request
        .post(api.user_api.processFriendRequest, {
            requestId: requestId,
            status: status,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { handleNewFriendRequest };
