import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import CvsBody from './CvsBody/index';

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
            <CvsBody />
        </div>
    );
};
const mapStateToProps = () => {
    return {};
};
export default connect(mapStateToProps)(index);
