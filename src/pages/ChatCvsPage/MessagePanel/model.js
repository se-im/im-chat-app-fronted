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

        *addNewInbox({ payload }, effect) {
            let newInbox = payload;
            let old_inbox = yield effect.select(state => state.inbox.cur_inbox);
            let cur_inbox = JSON.parse(JSON.stringify(old_inbox));

            cur_inbox.push(newInbox);

            yield effect.put({
                type: 'inbox/setCvsInbox',
                payload: cur_inbox,
            });
        },
    },
};

export default MsgModel;
