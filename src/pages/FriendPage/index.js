import React, { Fragment } from 'react';
import FriendPanel from './FriendPanel/index';
import FriendRequest from './FriendRequestPanel/friendRequest';
import { connect } from 'react-redux';
import FriendInfo from './FriendInfoPanel/FriendInfo';

const index = () => {
    return (
        <Fragment>
            <FriendPanel />
            {/*<FriendRequest />*/}
            <FriendInfo />
            {haveNewFriendChosen && <FriendRequest />}
            {/*{haveFriendChosen}*/}
        </Fragment>
    );
};
export default index;
