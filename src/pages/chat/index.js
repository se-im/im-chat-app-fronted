import React from 'react';
import styles from './index.css';
import TabPanel from './TabPanel/index';
import { connect } from 'umi';
import axios from 'axios';
import api from '../../../util/api'

const index = () => {

    axios.get(api.getUserByToken, {
        params: {
            token: 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2MjkzMzUwMDAsImlhdCI6MTU5Nzc5OTAwMH0.wMsLXVQANPknS9lXKwAJC818-LbAorON9MsUBsVA0k0'
        }
    }).then(res => {
        console.log(res);
    }).catch(error =>{
        console.log(error);
    })
    return (
        <div className={styles.main_panel}>
            <TabPanel/>
        </div>
    );

};


const mapStateToProps = (state) => {
    return { users: state.users };
};


export default connect(mapStateToProps)(index);
