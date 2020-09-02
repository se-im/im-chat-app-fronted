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

const register = async value => {
    return request
        .post(api.user_api.register, {
            VCodeId: value.VCodeId,
            VCodeInput: value.VCodeInput,
            email: value.email,
            password: value.password,
            phone: value.phone,
            username: value.username,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

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

export default { getVcode, register, getToken };
