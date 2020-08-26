import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FriendList from './FriendList/index';

const index = () => {
    return (
        <div className={styles.friend_Panel}>
            <div className={styles.friend_header}>
                <Input
                    size="large"
                    className={styles.search}
                    placeholder="Search Conversations"
                    prefix={<SearchOutlined />}
                />
                <div className={styles.add}>
                    <a className={styles.add_icon}>+</a>
                </div>
            </div>
            <FriendList />
        </div>
    );
};
export default index;
