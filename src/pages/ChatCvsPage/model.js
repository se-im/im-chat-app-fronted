import { getUserByToken, getFriendInfoById, updateFriendNote } from './service';
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
        profileForGroup: {},
    },
    reducers: {
        //action->{type, payload}
        setUserR(state, action) {
            return action.payLoad;
        },

        chengeCurrentCvsType(state, action) {
            state.currentCvsType = action.payload;
        },

        revertProfilePanel(state, action) {
            state.showProfilePanel = !state.showProfilePanel;
        },
        setUserProfileNote(state, action) {
            state.profileForUser.note = action.payload.note;
            return state;
        },
        setUserProfile(state, action) {
            // console.log('===');
            // console.log(action.payload);
            state.profileForUser = action.payload;
            return state;
        },
    },
    effects: {
        *changeProfilePannelStatus(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            if (!cur_cvs || !cur_cvs.id) {
                return;
            }
            console.log(cur_cvs);
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
                //put到当前state
                yield effects.put({
                    type: 'setUserProfile',
                    payload: cur_user,
                });
            } else if (cvsType === 'G') {
                //获取群聊信息
                //put到当前state
            }

            yield effects.put({
                type: 'revertProfilePanel',
            });
        },
        *getNewUserProfile(action, effects) {
            const cur_cvs = yield effects.select(state => state.cvs.cur_cvs);
            const cur_user = yield effects.call(
                updateFriendNote,
                cur_cvs.relationEntityId,
                action.payload.note,
            );
            // yield effects.put({
            //     type: 'setUserProfile',
            //     payload: cur_user,
            // });
        },

        //effects -> {put, call}
        *getUser(action, effects) {
            const token1 = yield effects.select(state => state.global.token);
            const data = yield effects.call(getUserByToken, token1);
            console.log(data);
            yield effects.put({
                type: 'global/setUser',
                payload: data,
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
