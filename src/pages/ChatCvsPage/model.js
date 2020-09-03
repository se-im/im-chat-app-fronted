import {
    getUserByToken,
    getFriendInfoById,
    updateFriendNote,
    getGroupInfoById,
    updateGroupInfoById,
    getGroupMembersByGroupId,
    exitGroupByGroupId,
    addGroupMembers,
} from './service';
import { Link } from 'umi';

const ChatModel = {
    namespace: 'chatPanel',
    state: {
        currentCvsType: 'U',
        showProfilePanel: false,
        profileForUser: {
            id: 12,
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200121080107498725.png',
            birthday: 1598645123000,
            description: '',
            email: 'jim@nwsuaf.edu.cn',
            gender: 'male',
            note: 'boy',
            phone: 123456,
            username: 'Jim',
        },
        profileForGroup: {
            id: 7,
            name: 'a3tom的群聊',
            avatarUrl:
                'http://1.zmz121.cn:8010/res/file/pic/17201800000320200321080339502649.png',
            memberNum: 6,
            createUserId: 8,
            description: 'To help student ',
            createTime: 1598579812000,
            members: [],
            visible: false,
            userID: '',
        },
    },
    reducers: {
        //action->{type, payload}
        setUserR(state, action) {
            return action.payLoad;
        },
        chengeCurrentCvsType(state, action) {
            state.currentCvsType = action.payload;
        },

        setShowProfileToNot(state, action) {
            state.showProfilePanel = false;
            return state;
        },
        revertProfilePanel(state, action) {
            state.showProfilePanel = !state.showProfilePanel;
            return state;
        },
        setUserProfile(state, action) {
            state.profileForUser = action.payload;
            return state;
        },
        setGroupProfile(state, action) {
            state.profileForGroup = action.payload;
            return state;
        },
        setVisibleToShowModel(state, action) {
            state.profileForGroup.visible = true;
            return state;
        },
        setVisibleToCancelModel(state, action) {
            state.profileForGroup.visible = false;
            return state;
        },
        setUserIdForAddGroupMember(state, action) {
            state.profileForGroup.userID = action.payload.userID;
            return state;
        },
    },
    effects: {
        *changeProfilePannelStatus(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            if (!cur_cvs || !cur_cvs.id) {
                return;
            }
            // console.log(cur_cvs);
            let cvsType = cur_cvs.cvsType;
            yield effects.put({
                type: 'chengeCurrentCvsType',
                payload: cur_cvs.cvsType,
            });
            if (cvsType === 'U') {
                //获取用户信息
                const cur_user = yield effects.call(
                    getFriendInfoById,
                    cur_cvs.relationEntityId,
                );
                // console.log(cur_user);
                //put到当前state
                yield effects.put({
                    type: 'setUserProfile',
                    payload: cur_user,
                });
            } else if (cvsType === 'G') {
                //获取群聊信息
                const cur_group = yield effects.call(
                    getGroupInfoById,
                    cur_cvs.relationEntityId,
                );
                cur_group.members = yield effects.call(
                    getGroupMembersByGroupId,
                    cur_cvs.relationEntityId,
                );
                //put到当前state
                yield effects.put({
                    type: 'setGroupProfile',
                    payload: cur_group,
                });
            }
            yield effects.put({
                type: 'revertProfilePanel',
            });
        },
        *updateUserNote(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            yield effects.call(
                updateFriendNote,
                cur_cvs.relationEntityId,
                action.payload.note,
            );
        },
        *getGroupMembers(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            const cur_group = yield effects.call(
                getGroupInfoById,
                cur_cvs.relationEntityId,
            );
            cur_group.members = yield effects.call(
                getGroupMembersByGroupId,
                cur_cvs.relationEntityId,
            );
            yield effects.put({
                type: 'setGroupInfo',
                payload: cur_group,
            });
        },
        *updateGroupInfo(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            yield effects.call(
                updateGroupInfoById,
                cur_cvs.relationEntityId,
                action.payload.avatarUrl,
                action.payload.name,
                action.payload.description,
            );
        },
        *exitGroup(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            yield effects.call(exitGroupByGroupId, cur_cvs.relationEntityId);
        },
        *addNewMemberToGroup(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            yield effects.call(
                addGroupMembers,
                cur_cvs.relationEntityId,
                action.payload.userID,
            );
        },
        //effects -> {put, call}
        *getUser(action, effects) {
            const setted = yield effects.select(
                state => state.global.tokenSeted,
            );
            if (setted) {
                return;
            }
            let token1 = yield window.localStorage.getItem('token');
            if (token1 === undefined || token1 === '') {
                token1 = yield effects.select(state => state.global.token);
            } else {
                yield effects.put({
                    type: 'global/setToken',
                    payload: token1,
                });
            }
            const data = yield effects.call(getUserByToken, token1);
            // console.log(data);
            yield effects.put({
                type: 'global/setUser',
                payload: data,
            });

            yield effects.put({
                type: 'websocket/setWebsocketToken',
            });

            yield effects.put({
                type: 'cvs/getCvslist',
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            history.listen((location, action) => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'getUser',
                    });
                }
            });
        },
    },
};

export default ChatModel;
