import React from 'react';
import styles from './index.css';
import TabPanel from './TabPanel/index';
import { connect } from 'umi';
import axios from 'axios';
import api from '../../../util/api'

const index = (token) => {

    return (
        <div className={styles.main_panel}>
            <TabPanel/>
        </div>
    );

};


const mapStateToProps = (state) => {
    return { token: state.global.token };
};


export default connect(mapStateToProps)(index);
