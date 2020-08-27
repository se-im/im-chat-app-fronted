import React, { Component } from 'react';
import { Avatar, Input, Cascader, Select, Option } from 'antd';
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
        return (
            <div className={styles.body_account_manage}>
                <strong>账号管理</strong>
                <div className={styles.body_account_manage_container}>
                    <div className={styles.body_account_manage_item}>
                        <Avatar
                            size={50}
                            shape={'circle'}
                            src={
                                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'
                            }
                        />
                        <div className={styles.body_account_manage_off}>
                            <FormOutlined /> &nbsp;退出当前账号
                        </div>
                    </div>
                    <div className={styles.body_account_manage_item}>
                        <Input.Password
                            className={styles.body_account_manage_input_pwd}
                            placeholder={'input new password'}
                            defaultValue={'123456'}
                            disabled={true}
                            bordered={false}
                            // iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <div className={styles.body_account_manage_change_pwd}>
                            <FormOutlined /> &nbsp;修改密码
                        </div>
                    </div>
                    <div className={styles.body_account_manage_item_2}>
                        <Select
                            className={styles.body_account_manage_state}
                            bordered={false}
                            defaultValue={'在线'}
                            // suffixIcon={<FormOutlined />}
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
            </div>
        );
    }
}
export default AccountManage;
