import { getFriendsList } from './service';

const FriendsModel = {
    namespace: 'Friends',

    state: {},

    reducers: {
        getList(state, { payload }) {
            return payload;
        },
    },
    effects: {
        *getFriends(action, { put, call }) {
            const data = yield call(getFriendsList);
            yield put({
                type: 'getList',
                payload: { data },
            });
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'getFriends',
                    });
                }
            });
        },
    },
};

export default FriendsModel;
