import React from 'react';
import { Avatar } from 'antd';
import styles from './style.css';

const GroupProfilePanel = props => {
    return (
        <div className={styles.group_header}>
            <div className={styles.header_members}>
                <div>
                    <Avatar shape={''}></Avatar>
                </div>
            </div>
        </div>
    );
};

export default GroupProfilePanel;
