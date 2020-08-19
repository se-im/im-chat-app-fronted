import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const index = () => {
    return (
        <div className={styles.cvs_Panel}>
            <div className={styles.cvs_header}>
                <Input
                    size="large"
                    className={styles.search}
                    prefix={<SearchOutlined />}
                    placeholder="Search Conversation"
                />
            </div>
        </div>
    );
};

export default index;
