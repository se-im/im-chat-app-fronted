import React, { Fragment } from 'react';
import GroupPanel from './GroupPanel/Group';
import GroupInfo from './GroupInfoPanel/GroupInfo';
import { connect } from 'react-redux';
import EmptyMessagePanel from '../ChatCvsPage/EmptyMessagePanel';

const index = ({ haveGroupChosen }) => {
    return (
        <Fragment>
            <GroupPanel />
            {haveGroupChosen && <GroupInfo />}
            {!haveGroupChosen && <EmptyMessagePanel />}
        </Fragment>
    );
};
const mapStateToProps = state => {
    return {
        haveGroupChosen: state.groupInfo.haveGroupChosen,
    };
};
export default connect(mapStateToProps)(index);
