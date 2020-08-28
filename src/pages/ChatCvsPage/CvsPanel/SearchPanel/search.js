import React from 'react';
import styles from './search.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../../../../assert/iconfont/iconfont.css';
const index = () => {
    return (
        <div className={styles.friend_header}>
            <Input
                size="large"
                className={styles.search}
                placeholder="Search Conversations"
                prefix={<SearchOutlined />}
            />
            <span className={'iconfont im-icon-test' + ' ' + styles.add_icon} />
        </div>
    );
};
export default index;
