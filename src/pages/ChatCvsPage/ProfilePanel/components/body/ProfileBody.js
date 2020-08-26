import React, { Component } from 'react';
import styles from './sty.css';

class ProfileBody extends Component {
    render() {
        return (
            <div className={styles.profile_body}>
                <div>motto</div>
                <div>mobile</div>
                <div>email</div>
                <div>birth</div>
                <div>gender</div>
            </div>
        );
    }
}

export default ProfileBody;
