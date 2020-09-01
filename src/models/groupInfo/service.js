import request from '../../../util/request';
import api from '../../../util/api';

const fetchGroupInfo = async groupId => {
    return request
        .post(api.user_api.getGroupInfo, { groupId: groupId })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export default { fetchGroupInfo };
