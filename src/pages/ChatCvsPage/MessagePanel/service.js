import request from '../../../../util/request';
import api from '../../../../util/api';

const getMessagePanelInfoList = () => {
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

const sendMessageRemote = (cvsId, msg) => {
    request
        .post(api.chat_api.sendMessage, {
            cvsId: cvsId,
            msg: msg,
            msgType: 'text',
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export default { sendMessageRemote };
