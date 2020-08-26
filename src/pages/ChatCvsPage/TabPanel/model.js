const TabModel = {
    namespace: 'TabPanel',

    state: {},

    reducers: {
        getList(state, { payload }) {
            return payload;
        },
    },
    effects: {
        *getRemote(action, { put, call }) {
            const data = yield call(getRemoteList);
            console.log(data);
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
                        type: 'getRemote',
                    });
                }
            });
        },
    },
};

export default TabModel;
