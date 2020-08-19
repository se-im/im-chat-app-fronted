import React from 'react';
import styles from './index.css';
import { Input } from 'antd';

const index = () => {
    return (
        <div className={styles.cvs_Panel}>
            <div className={styles.cvs_header}>
                <div>
                    <span className="iconfont icon-search"></span>
                </div>
                <Input
                    size="large"
                    className={styles.search}
                    placeholder="Search Conversation"
                />
            </div>
        </div>
    );
};

export default index;
