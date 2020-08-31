import request from '../../../util/request';
import api from '../../../util/api';

const fetchGroupList = async token => {
    return request
        .post(api.user_api.groupJoined, token)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { fetchGroupList };
