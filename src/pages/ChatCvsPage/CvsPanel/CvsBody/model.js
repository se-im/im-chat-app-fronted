import { getRemoteList } from './service';

const CvsModel = {
    namespace: 'Conversations',

    state: {},

    reducers: {
        getList(state, { payload }) {
            return payload;
        },
    },
    effects: {
        *getRemote(action, { put, call }) {
            const data = yield call(getRemoteList);
            yield put({
                type: 'getList',
                payload: { data },
            });
        },
    },

    subscriptions: {
        // setup({ dispatch, history }) {
        //     return history.listen(({ pathname }) => {
        //         if (pathname === '/') {
        //             dispatch({
        //                 type: 'getRemote',
        //             });
        //         }
        //     });
        // },
    },
};

export default CvsModel;
