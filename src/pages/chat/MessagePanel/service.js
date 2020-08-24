import { request } from '../../../.umi/plugin-request/request';

const getMessagePanelInfoList = () => {
    return request('/api/message', {
        method: 'get',
    })
        .then(res => {
            // console.log('getMessageInfo------');
            // console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export default getMessagePanelInfoList;
