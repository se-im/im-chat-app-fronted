import request from '../../../util/request';
import api from '../../../util/api';

export const fetchCvsList = async () => {
    return request
        .get(api.chat_api.getCvsList)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
