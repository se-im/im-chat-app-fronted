import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FriendList from './FriendList/FriendList';
import SearchPanel from './SearchPanel/search';

const index = () => {
    return (
        <div className={styles.friend_Panel}>
            <SearchPanel />
            <FriendList />
        </div>
    );
};
export default index;
