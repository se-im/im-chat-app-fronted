import { request } from 'umi';

export const getFriendsList = async () => {
    return request('/api/friends', {
        method: 'get',
    })
        .then(function(response) {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        });
};
