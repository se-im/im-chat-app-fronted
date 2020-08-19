import React from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <div className={styles.tab_panel}>
        <Avatar size={56} icon={<UserOutlined />} className={styles.be_middle + " "  + styles.head_pic}/>
        <h5 className={styles.username}>dshdjh</h5>
    </div>
  );
}
