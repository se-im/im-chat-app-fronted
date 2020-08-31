import request from '../../../util/request';
import api from '../../../util/api';

const fetchGroupList = async token => {
    return request
        .get(api.user_api.groupJoined)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
const createGroup = async userIdList => {
    return request
        .post_json(api.user_api.createGroup, userIdList)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { fetchGroupList, createGroup };
