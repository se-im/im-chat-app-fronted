import React, { Component } from 'react';
import ProfileHeader from './components/header/ProfileHeader';
import ProfileBody from './components/body/ProfileBody';
import styles from './index.css';

class ProfilePanel extends Component {
    render() {
        return (
            <div className={styles.profile_panel}>
                <ProfileHeader />
                <ProfileBody />
            </div>
        );
    }
}
export default ProfilePanel;
