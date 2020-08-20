import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

const index = () => {
    return (
        <div className={styles.cvs_Panel}>
            <div className={styles.cvs_header}>
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
            <div className={styles.cvs_body}></div>
        </div>
    );
};

export default index;
