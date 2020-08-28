import React, { Fragment } from 'react';
import CvsPanel from './CvsPanel';
import MessagePanel from './MessagePanel';
import ProfilePanel from './ProfilePanel';
import { connect } from 'umi';

const index = ({ showProfilePanel }) => {
    return (
        <Fragment>
            <CvsPanel />
            <MessagePanel />
            {showProfilePanel && <ProfilePanel />}
        </Fragment>
    );
};

const mapStateToProps = state => {
    return { showProfilePanel: state.chatPanel.showProfilePanel };
};

export default connect(mapStateToProps)(index);
