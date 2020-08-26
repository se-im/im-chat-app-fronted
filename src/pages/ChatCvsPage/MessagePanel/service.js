import { request } from '../../../.umi/plugin-request/request';

export const getMessagePanelInfoList = () => {
    return request('/api/message', {
        method: 'get',
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};
