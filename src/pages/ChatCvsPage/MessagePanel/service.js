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

const getNewInbox = async value => {
    return request
        .post(api.chat_api.getSyncIdInbox, {
            cvsId: value.cvsId,
            syncId: value.syncId,
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

const sendMessageRemote = (cvsId, msg, msgType = 'text') => {
    request
        .post(api.chat_api.sendMessage, {
            cvsId: cvsId,
            msg: msg,
            msgType: msgType,
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export default { sendMessageRemote, getNewInbox };
