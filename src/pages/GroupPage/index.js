import React, { Fragment } from 'react';
import GroupPanel from './GroupPanel/Group';
import EmptyMessagePanel from '../ChatCvsPage/EmptyMessagePanel';
import { connect } from 'react-redux';

const index = ({ haveGroupChosen }) => {
    return (
        <Fragment>
            <GroupPanel />
            {haveGroupChosen && <EmptyMessagePanel />}
        </Fragment>
    );
};
const mapStateToProps = state => {
    return {
        haveGroupChosen: state.groupInfo.haveGroupChosen,
    };
};

export default connect(mapStateToProps)(index);
