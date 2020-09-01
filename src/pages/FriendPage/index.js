import React, { Fragment } from 'react';
import FriendPanel from './FriendPanel/index';
import FriendRequest from './FriendRequestPanel/friendRequest';
import FriendInfo from './FriendInfoPanel/FriendInfo';

const index = () => {
    return (
        <Fragment>
            <FriendPanel />
            {/*<FriendRequest />*/}
            <FriendInfo />
        </Fragment>
    );
};
export default index;
