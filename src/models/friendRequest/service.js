import request from '../../../util/request';
import api from '../../../util/api';

const fetchNewFriendList = async token => {
    return await request
        .post(api.user_api.newFriend, token)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { fetchNewFriendList };
