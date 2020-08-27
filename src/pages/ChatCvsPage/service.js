import axios from 'axios';
import { message } from 'antd';
import api from '../../../util/api';
import request from '../../../util/request';

const getUserByToken = async token => {
    return request
        .get(api.user_api.getUserByToken, { token: token })
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};

export { getUserByToken };
export default { getUserByToken };
