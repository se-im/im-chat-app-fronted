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
export const createCvs = async (entityId, cvsType) => {
    return request
        .post(api.chat_api.createCvs, { cvsType: cvsType, entityId: entityId })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
