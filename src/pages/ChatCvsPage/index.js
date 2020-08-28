import React, { Fragment } from 'react';
import CvsPanel from './CvsPanel';
import MessagePanel from './MessagePanel';
import ProfilePanel from './ProfilePanel';
import { connect } from 'umi';

const index = ({}) => {
    return (
        <Fragment>
            <CvsPanel />
            <MessagePanel />
            <ProfilePanel style={{ display: true }} />
        </Fragment>
    );
};

const mapStateToProps = state => {
    return { token: state.global.token };
};

export default connect(mapStateToProps)(index);
