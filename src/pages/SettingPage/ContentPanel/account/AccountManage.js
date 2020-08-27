import React, { Component } from 'react';
import { connect } from 'umi';
import { Avatar, Input, Switch, Select } from 'antd';
import {
    FormOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
} from '@ant-design/icons';

import styles from './style.css';

class AccountManage extends Component {
    render() {
        const options = [
            { value: '在线', label: 'online' },
            { value: '忙碌', label: 'busy' },
            { value: '离线', label: 'offline' },
        ];
        const { user } = this.props;
        return (
            <div className={styles.body_account_manage}>
                <strong>账号管理</strong>
                <div className={styles.body_account_manage_container}>
                    <div className={styles.body_account_manage_item}>
                        <Avatar
                            size={50}
                            shape={'circle'}
                            src={user.avatarUrl}
                        />
                        <div className={styles.body_account_manage_off}>
                            <FormOutlined /> &nbsp;退出当前账号
                        </div>
                    </div>
                    <div className={styles.body_account_manage_item}>
                        <Input.Password
                            className={styles.body_account_manage_input_pwd}
                            placeholder={'input new password'}
                            defaultValue={user.password}
                            disabled={true}
                            bordered={false}
                        />
                        <div className={styles.body_account_manage_change_pwd}>
                            <FormOutlined /> &nbsp;修改密码
                        </div>
                    </div>
                    <div className={styles.body_account_manage_item}>
                        <div className={styles.body_account_manage_show}>
                            对陌生人是否可见
                        </div>
                        <div className={styles.body_account_manage_change_show}>
                            <Switch defaultChecked={user.shown} />
                        </div>
                    </div>
                    <div className={styles.body_account_manage_item_2}>
                        <Select
                            className={styles.body_account_manage_state}
                            bordered={false}
                            defaultValue={'在线'}
                        >
                            <Select.Option value="online">在线</Select.Option>
                            <Select.Option value="busy">忙碌</Select.Option>
                            <Select.Option value="offline">离线</Select.Option>
                        </Select>
                        <div className={styles.body_account_manage_online}>
                            <FormOutlined /> &nbsp;在线状态
                        </div>
                    </div>
                </div>
                <div className={styles.body_isOk}>
                    <button className={styles.body_btn1}>完成</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    let { global } = state;
    return {
        user: global.cur_user,
        current_panel: state.global.current_panel,
    };
};
export default connect(mapStateToProps)(AccountManage);
