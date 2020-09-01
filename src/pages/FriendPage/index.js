import React, { Fragment } from 'react';
import FriendPanel from './FriendPanel/index';
import FriendRequest from './FriendRequestPanel/friendRequest';
import { connect } from 'react-redux';
import FriendInfo from './FriendInfoPanel/FriendInfo';
import EmptyMessagePanel from '../ChatCvsPage/EmptyMessagePanel';

const index = ({ haveNewFriendChosen, haveFriendChosen }) => {
    return (
        <Fragment>
            <FriendPanel />
            {haveNewFriendChosen && <FriendRequest />}
            {haveFriendChosen && <FriendInfo />}
            {!haveNewFriendChosen && !haveFriendChosen && <EmptyMessagePanel />}
        </Fragment>
    );
};
const mapStateToProps = state => {
    return {
        haveNewFriendChosen: state.newFriend.haveNewFriendChosen,
        haveFriendChosen: state.friend.haveFriendChosen,
    };
};
export default connect(mapStateToProps)(index);
