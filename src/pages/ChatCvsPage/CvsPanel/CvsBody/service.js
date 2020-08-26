import { request } from 'umi';

export const getRemoteList = async () => {
    return request('/api/conversations', {
        method: 'get',
    })
        .then(function(response) {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        });
};
