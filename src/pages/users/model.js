import { getRemoteList } from './service';

const UserModel = {
    namespace: 'users',
    state:[],
    reducers: {
        //action->{type, payload}
        getList(state, action) {
            return action.payLoad;
        }
    },
    effects: {
        //effects -> {put, call}
        *getRemote(action, effects){
            const data = yield effects.call(getRemoteList);
            yield effects.put({
                type: 'getList',
                payLoad: data
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }, done){
            history.listen((location, action) =>{
                if(location.pathname === '/users')
                {
                    dispatch({
                        type: 'getRemote'
                    });
                }
            })
        }
    },
};



export default UserModel;
