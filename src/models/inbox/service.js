import request from '../../../util/request';
import api from '../../../util/api';

const fetchInbox = async cvsId => {
    return request.post(api.chat_api.getAllInbox, { cvsId: cvsId });
};

export default { fetchInbox };
