import axios from 'axios';
import { message } from 'antd';
import api from '../../../util/api';

export const getUserByToken = token => {
    return axios
        .get(api.getUserByToken, {
            params: {
                token: token,
            },
        })
        .then(res => {
            if (res.data.status === 200) {
                return res.data.data;
            } else {
                message.error(res.data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
};
