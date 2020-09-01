import { getMessagePanelInfoList } from './service';
import service from './service';
import { message } from 'antd';

const MsgModel = {
    namespace: 'Message',
    state: {},
    reducers: {},
    effects: {
        *sendMessageToRemote({ payload }, { put, call, select }) {
            let msg = payload;
            const cur_cvs = yield select(state => state.cvs.cur_cvs);
            yield call(service.sendMessageRemote, cur_cvs.id, payload);
            message.success('消息发送成功');
        },
    },
};

export default MsgModel;
