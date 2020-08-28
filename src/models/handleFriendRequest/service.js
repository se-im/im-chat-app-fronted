import request from '../../../util/request';
import api from '../../../util/api';

//处理好友请求
const handleNewFriendRequest = async (requestId, status) => {
    return request
        .post(api.user_api.processFriendRequest, requestId, status)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { handleNewFriendRequest };
