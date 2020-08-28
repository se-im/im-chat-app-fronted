import React from 'react';
import styles from './search.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const index = () => {
    return (
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
    );
};
export default index;
