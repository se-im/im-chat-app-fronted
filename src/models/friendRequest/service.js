import request from '../../../util/request';
import api from '../../../util/api';

//拉取好友请求列表
const fetchNewFriendList = async token => {
    return request
        .post(api.user_api.newFriend, token)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export default { fetchNewFriendList };
