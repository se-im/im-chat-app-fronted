import React, { Fragment } from 'react';
import { connect } from 'umi';

import TabPanel from './componment/TabPanel/index';
import styles from './index.css';
const index = props => {
    return (
        <Fragment>
            <div className={styles.main_panel}>
                <TabPanel />
                {props.children}
            </div>
        </Fragment>
    );
};

const handleMsgClick = e => {
    const dispatch = this.props;
    dispatch({
        type,
    });
};
const mapStateToProps = state => {
    return { user: state.global.user };
};

export default connect(mapStateToProps)(index);
