import React, { Fragment } from 'react';
import CvsPanel from './CvsPanel';
import MessagePanel from './MessagePanel';
import EmptyMessagePanel from './EmptyMessagePanel';
import ProfilePanel from './ProfilePanel';
import { connect } from 'umi';

const index = ({ showProfilePanel, haveCvsChosen }) => {
    return (
        <Fragment>
            <CvsPanel />
            {haveCvsChosen && <MessagePanel />}
            {!haveCvsChosen && <EmptyMessagePanel />}
            {showProfilePanel && <ProfilePanel />}
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        showProfilePanel: state.chatPanel.showProfilePanel,
        haveCvsChosen: state.cvs.haveCvsChosen,
    };
};

export default connect(mapStateToProps)(index);
