import { getUserByToken } from './service';
import { Link } from 'umi';

const ChatModel = {
    namespace: 'chatPanel',
    state: {
        currentCvsType: 'U',
        showProfilePanel: false,
        profileForUser: {},
        profileForGroup: {},
    },
    reducers: {
        //action->{type, payload}
        // setUserR(state, action) {
        //     return action.payLoad;
        // },

        chengeCurrentCvsType(state, action) {
            state.currentCvsType = action.payload;
        },

        revertProfilePanel(state, action) {
            state.showProfilePanel = !state.showProfilePanel;
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
                //put到当前state
            } else if (cvsType === 'G') {
                //获取群聊信息
                //put到当前state
            }

            yield effects.put({
                type: 'revertProfilePanel',
            });
        },

        //effects -> {put, call}
        *getUser(action, effects) {
            const token1 = yield effects.select(state => state.global.token);
            const data = yield effects.call(getUserByToken, token1);
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
