import React, { Fragment } from 'react';
import FriendPanel from './FriendPanel/index';
import FriendRequest from './FriendRequestPanel/friendRequest';
import { connect } from 'react-redux';

const index = ({ haveNewFriendChosen, haveFriendChosen }) => {
    return (
        <Fragment>
            <FriendPanel />
            {haveNewFriendChosen && <FriendRequest />}
            {/*{haveFriendChosen}*/}
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
