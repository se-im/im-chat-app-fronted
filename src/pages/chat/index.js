import React from 'react';
import styles from './index.css';
import TabPanel from './TabPanel/index';
import ConversationsPanel from './ConversationsPanel';
import MessagePanel from './MessagePanel';
import ProfilePanel from './ProfilePanel';
import { connect } from 'umi';

const index = ({ token }) => {
    return (
        <div className={styles.main_panel}>
            <TabPanel />
            <ConversationsPanel />
            <MessagePanel />
            <ProfilePanel />
        </div>
    );
};

const mapStateToProps = state => {
    return { token: state.global.token };
};

export default connect(mapStateToProps)(index);
