import React from 'react';
import styles from './index.css';
import TabPanel from './TabPanel/index';
import CvsPanel from './CvsPanel/index';
import { connect } from 'umi';
import './CvsPanel/icons/iconfont.css';
import axios from 'axios';
import api from '../../../util/api';

const index = token => {
    return (
        <div className={styles.main_panel}>
            <TabPanel />
            <CvsPanel />
        </div>
    );
};

const mapStateToProps = state => {
    return { token: state.global.token };
};

export default connect(mapStateToProps)(index);
