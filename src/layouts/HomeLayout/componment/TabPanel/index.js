import React, { Component } from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import '../../../../../assert/iconfont/iconfont.css';
import { Link } from 'umi';

const index = props => {
    let path = props.router.location.pathname;
    let baseIconClass = `iconfont ${styles.icon}`;

    return (
        <div className={styles.tab_panel}>
            <Avatar
                size={56}
                icon={<UserOutlined />}
                src={props.user.avatarUrl}
                className={styles.be_middle + ' ' + styles.head_pic}
            />
            <h5 className={styles.username}>{props.user.username}</h5>
            {/*聊天图标*/}
            <Link
                to={'/'}
                className={`${baseIconClass} im-message1 ${styles.icon_message}`}
            />
            {/*好友图标*/}
            <Link
                to={'/friend'}
                className={`${baseIconClass} im-people ${styles.icon_message}`}
            />
            {/*群聊图标*/}
            <Link
                to={'/group'}
                className={`${baseIconClass} im-friends ${styles.icon_group}`}
            />
            {/*设置图标*/}
            <Link
                to={'/setting'}
                className={`${baseIconClass} im-setting ${styles.setting_icon} ${styles.icon_group}`}
            />
        </div>
    );
};

const mapStateToProps = state => {
    let { global } = state;
    return { user: global.cur_user, router: state.router };
};

export default connect(mapStateToProps)(index);
