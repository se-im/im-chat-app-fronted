import request from '../../../util/request';
import api from '../../../util/api';

const getToken = async param => {
    return request
        .post(api.user_api.login, param)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export default { getToken };
