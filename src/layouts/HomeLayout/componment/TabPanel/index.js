import React, { Component } from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import '../../../../../assert/iconfont/iconfont.css';
import { Link } from 'umi';

const index = props => {
    let baseIconClass = `iconfont ${styles.icon}`;

    function handleClick(index) {
        props.dispatch({
            type: 'global/setCurrentPanel',
            payload: index,
        });
    }

    function genStyle(index) {
        if (index === props.current_panel) {
            return styles.choosen;
        } else {
            return ' ';
        }
    }

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
                className={`${baseIconClass}  im-message1 ${
                    styles.icon_message
                } ${genStyle(1)}`}
                onClick={handleClick.bind(this, 1)}
            />
            {/*好友图标*/}
            <Link
                to={'/friend'}
                className={`${baseIconClass} im-people ${
                    styles.icon_message
                } ${genStyle(2)}`}
                onClick={handleClick.bind(this, 2)}
            />
            {/*群聊图标*/}
            <Link
                to={'/group'}
                className={`${baseIconClass} im-friends ${
                    styles.icon_group
                } ${genStyle(3)}`}
                onClick={handleClick.bind(this, 3)}
            />
            {/*设置图标*/}
            <Link
                to={'/setting'}
                className={`${baseIconClass} im-setting ${
                    styles.setting_icon
                } ${styles.icon_group} ${genStyle(4)}`}
                onClick={handleClick.bind(this, 4)}
            />
        </div>
    );
};

const mapStateToProps = state => {
    let { global } = state;
    return { user: global.cur_user, current_panel: state.global.current_panel };
};

export default connect(mapStateToProps)(index);
