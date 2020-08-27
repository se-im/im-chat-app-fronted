import React, { Component } from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import '../../../../../assert/iconfont/iconfont.css';

const index = props => {
    return (
        <div className={styles.tab_panel}>
            <Avatar
                size={56}
                icon={<UserOutlined />}
                src={props.user.avatarUrl}
                className={styles.be_middle + ' ' + styles.head_pic}
            />
            <h5 className={styles.username}>{props.user.username} user</h5>
            <span
                className={'iconfont icon-message-fill' + ' ' + styles.icon}
            />
            <span className={'iconfont icon-user' + ' ' + styles.icon} />
            <span
                className={
                    'iconfont icon-fenleiorguangchangorqitatianchong' +
                    ' ' +
                    styles.icon
                }
            />
            <span
                className={
                    'iconfont icon-shezhi' +
                    ' ' +
                    styles.icon +
                    ' ' +
                    styles.shezhi
                }
            />
        </div>
    );
};

const handleMsgClick = e => {
    const dispatch = this.props;
    dispatch({
        type,
    });
};
const mapStateToProps = state => {
    let { global } = state;
    return { user: global.cur_user };
};

export default connect(mapStateToProps)(index);
