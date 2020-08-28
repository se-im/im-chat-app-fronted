import React from 'react';
import styles from './style.css';
import { UserAddOutlined } from '@ant-design/icons';

const index = () => {
    return (
        <div className={styles.friendRequest_header}>
            <div className={styles.header_content}>
                <div className={styles.header_icon}>
                    <UserAddOutlined />
                </div>
                <p>新的朋友</p>
            </div>
        </div>
    );
};
export default index;
