import groupService from './service';
import { message } from 'antd';
import friendService from '../friend/service';

const GroupsModel = {
    namespace: 'group',

    state: {
        visible: false,
        groupList: [],
        userIdList: [], //用于创建群聊的用户id
        friendList: [],
    },

    reducers: {
        showModal(state, { payload }) {
            const friendList = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.visible = true;
            newState.friendList = [];
            for (const i of friendList) {
                newState.friendList.push(i.note);
            }
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
        setGroups(state, { payload }) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.groupList = payload;
            return newState;
        },
        setUserIdList(state, { payload }) {
            const data = payload;
            let newState = JSON.parse(JSON.stringify(state));
            newState.userIdList = data.ids;
            return newState;
        },
    },

    effects: {
        *getGroups(action, { put, call, select }) {
            const data = yield call(groupService.fetchGroupList);
            yield put({
                type: 'setGroups',
                payload: data,
            });
        },
        *createGroup(action, { put, call, select }) {
            const userIdList = yield select(state => state.group.userIdList);
            const data = yield call(groupService.createGroup, userIdList);
            yield put({
                type: 'handleOK',
            });
            message.success(data);
        },
        *showGroupModal(action, { put, call, select }) {
            const token = yield select(state => state.global.token);
            const friendList = yield call(friendService.fetchFriendList, token);
            yield put({
                type: 'showModal',
                payload: friendList,
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/group') {
                    dispatch({
                        type: 'getGroups',
                    });
                }
            });
        },
    },
};

export default GroupsModel;
