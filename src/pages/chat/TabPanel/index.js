import React from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'umi';

const index = ({user, dispatch}) => {

    return (
        <div className={styles.tab_panel}>
            <Avatar size={56} icon={<UserOutlined/>} className={styles.be_middle + ' ' + styles.head_pic}/>
            <h5 className={styles.username}>{user.username}</h5>
        </div>
    );
};


const mapStateToProps = (state) => {
    return { user: state.global.user };
};


export default connect(mapStateToProps)(index);
