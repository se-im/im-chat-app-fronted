import React from 'react';
import styles from './friendRequest.css';
import FriendRequestBody from './component/body/friendRequestBody';
import FriendRequestHeader from './component/header/friendRequestHeader';

const friendRequest = () => {
    return (
        <div className={styles.friendRequest_panel}>
            <FriendRequestHeader />
            <FriendRequestBody />
        </div>
    );
};
export default friendRequest;
