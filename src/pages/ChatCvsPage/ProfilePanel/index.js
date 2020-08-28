import React, { Component } from 'react';
import UserProfilePanel from './UserProfile/UserProfilePanel';
import styles from './index.css';

class ProfilePanel extends Component {
    render() {
        return (
            <div className={styles.profile_panel}>
                <UserProfilePanel />
            </div>
        );
    }
}
export default ProfilePanel;
