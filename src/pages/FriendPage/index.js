import React, { Fragment } from 'react';
import FriendPanel from './FriendPanel/index';
import FriendRequest from './FriendRequestPanel/friendRequest';

const index = () => {
    return (
        <Fragment>
            <FriendPanel />
            <FriendRequest />
        </Fragment>
    );
};
export default index;
