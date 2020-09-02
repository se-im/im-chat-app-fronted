import React, { Component } from 'react';
import { connect } from 'umi';
import { Avatar, Input, Form, Select } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'umi';

import styles from './style.css';

class AccountManage extends Component {
    onFinish = values => {
        this.props.dispatch({
            type: 'global/updateUserPassword',
            payload: values,
        });
    };
    render() {
        const { user } = this.props;
        return (
            <div className={styles.body_account_manage}>
                <strong>账号管理</strong>
                <Form
                    name="basic"
                    initialValues={{ remember: true, ...user }}
                    onFinish={this.onFinish}
                >
                    <div className={styles.body_account_manage_container}>
                        <div className={styles.body_account_manage_item}>
                            <Avatar
                                size={50}
                                shape={'circle'}
                                src={user.avatarUrl}
                            />
                            <Link
                                to={'/login/index'}
                                className={styles.body_account_manage_off}
                            >
                                退出当前账号
                            </Link>
                        </div>
                        <div className={styles.body_account_manage_item_pwd}>
                            <div>
                                <Form.Item
                                    name="passwordOld"
                                    className={
                                        styles.body_account_manage_input_pwd
                                    }
                                >
                                    <Input.Password
                                        name="passwordOld"
                                        placeholder={'input old password'}
                                        bordered={false}
                                        prefix={'原密码：'}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="passwordNew"
                                    className={
                                        styles.body_account_manage_input_pwd
                                    }
                                >
                                    <Input.Password
                                        name="passwordOld"
                                        placeholder={'input old password'}
                                        bordered={false}
                                        prefix={'新密码：'}
                                    />
                                </Form.Item>
                            </div>
                            <div
                                className={
                                    styles.body_account_manage_change_pwd
                                }
                            >
                                修改密码
                            </div>
                        </div>
                        <div className={styles.body_account_manage_item_2}>
                            <Select
                                className={styles.body_account_manage_state}
                                bordered={false}
                                defaultValue={'在线'}
                            >
                                <Select.Option value="online">
                                    在线
                                </Select.Option>
                                <Select.Option value="offline">
                                    离线
                                </Select.Option>
                            </Select>
                            <div className={styles.body_account_manage_online}>
                                在线状态
                            </div>
                        </div>
                    </div>
                    <div className={styles.body_isOk}>
                        <button className={styles.body_btn1}>完成</button>
                    </div>
                </Form>
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
