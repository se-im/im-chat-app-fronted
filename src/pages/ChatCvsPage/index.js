import React, { Fragment } from 'react';
import CvsPanel from './CvsPanel';
import MessagePanel from './MessagePanel';
import ProfilePanel from './ProfilePanel';
import { connect } from 'umi';
import request from '../../../util/request';
import api from '../../../util/api';

const index = ({}) => {
    request.get(api.getUserByToken, {});
    return (
        <Fragment>
            <CvsPanel />
            <MessagePanel />
            <ProfilePanel />
        </Fragment>
    );
};

const mapStateToProps = state => {
    return { token: state.global.token };
};

export default connect(mapStateToProps)(index);
