import friendService from './service';
import { message } from 'antd';

const addFriend = {
    namespace: 'addFriend',

    state: {
        visible: false,
        id: '',
        note: '',
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
            return newState;
        },
        handleCancel(state, action) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.visible = false;
            return newState;
        },
        handleIdChange(state, { payload }) {
            const data = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.id = data.id;
            return newState;
        },
        handleNoteChange(state, { payload }) {
            const data = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.note = data.note;
            return newState;
        },
    },

    effects: {
        *addNewFriend(action, { put, call, select }) {
            const id = yield select(state => state.addFriend.id);
            const note = yield select(state => state.addFriend.note);
            const token = yield select(state => state.global.token);
            const responseMsg = yield call(
                friendService.addNewFriend,
                token,
                id,
                note,
            );
            yield put({
                type: 'handleOK',
            });
            message.success(responseMsg);
        },
    },
};

export default addFriend;
