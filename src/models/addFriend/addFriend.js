import friendService from './service';
import { message } from 'antd';

const addFriend = {
    namespace: 'addFriend',

    state: {
        visible: false,
        inputMsg: '',
        id: '',
        note: '',
        friendInfo: [],
    },

    reducers: {
        showModal(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.visible = true;
            return newState;
        },
        handleOK(state, action) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.visible = false;
            newState.inputMsg = '';
            newState.note = '';
            newState.friendInfo = [];
            return newState;
        },
        handleCancel(state, action) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.visible = false;
            newState.inputMsg = '';
            newState.note = '';
            newState.friendInfo = [];
            return newState;
        },
        handleInputMsgChange(state, { payload }) {
            const data = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.inputMsg = data.inputMsg;
            return newState;
        },
        handleNoteChange(state, { payload }) {
            const data = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.note = data.note;
            return newState;
        },
        setFriendInfo(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.friendInfo = payload;
            return newState;
        },
        setNewFriendId(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.id = payload.data[0]['id'];
            return newState;
        },
    },

    effects: {
        *addNewFriend(action, { put, call, select }) {
            const id = yield select(state => state.addFriend.id);
            const note = yield select(state => state.addFriend.note);
            const responseMsg = yield call(
                friendService.addNewFriend,
                id,
                note,
            );
            yield put({
                type: 'handleOK',
            });
            message.success(responseMsg);
        },
        *getUserByIdOrName(action, { put, call, select }) {
            const inputMsg = yield select(state => state.addFriend.inputMsg);
            console.log(inputMsg);
            const res = yield call(friendService.fetchNewFriendInfo, inputMsg);
            if (res.length !== 0) {
                yield put({
                    type: 'setFriendInfo',
                    payload: res,
                });
                yield put({
                    type: 'setNewFriendId',
                    payload: { data: res },
                });
            } else {
                message.success('未查询到该用户');
            }
        },
    },
};

export default addFriend;
