import request from '../../../util/request';
import api from '../../../util/api';

const getVcode = async token => {
    return request
        .get(api.user_api.getVcode)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export default { getVcode };
