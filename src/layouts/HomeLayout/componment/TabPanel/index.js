import React, { Component } from 'react';
import styles from './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import './assert/iconfont.css';

class index extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className={styles.tab_panel}>
                <Avatar
                    size={56}
                    icon={<UserOutlined />}
                    src={this.props.user.avatarUrl}
                    className={styles.be_middle + ' ' + styles.head_pic}
                />
                <h5 className={styles.username}>
                    {this.props.user.username} user
                </h5>
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
    }
}

const handleMsgClick = e => {
    const dispatch = this.props;
    dispatch({
        type,
    });
};
const mapStateToProps = state => {
    return { user: state.global.user };
};

export default connect(mapStateToProps)(index);
