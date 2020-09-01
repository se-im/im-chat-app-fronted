import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import { Upload, message, Input, Select, DatePicker, Avatar, Form } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './style.css';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class ProfileEdit extends Component {
    state = {
        loading: false,
        value: 1,
        username: this.props.user.username,
    };

    onFinish(values) {
        //TODO
        // values.avatarUrl = this.props.imageUrl;
        this.props.dispatch({
            type: 'global/updateUserInfo',
            payload: values,
        });
        console.log(values);
    }

    handleUserChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    render() {
        const { imageUrl } = this.state;
        const { user } = this.props;
        return (
            <Fragment>
                <Form
                    name="basic"
                    initialValues={{ remember: true, ...user }}
                    onFinish={this.onFinish.bind(this)}
                >
                    <div className={styles.body_profile_edit}>
                        <strong>个人信息</strong>

                        <div className={styles.body_profile_edit_container}>
                            <div className={styles.body_profile_edit_item_1}>
                                <Upload
                                    name="avatarUrl"
                                    action=""
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                    showUploadList={false}
                                >
                                    <div
                                        className={
                                            styles.body_user_avatar_container
                                        }
                                    >
                                        {imageUrl ? (
                                            <img
                                                name="avatarUrl"
                                                className={
                                                    styles.body_user_avatar
                                                }
                                                src={imageUrl}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        ) : (
                                            <img
                                                className={
                                                    styles.body_user_avatar
                                                }
                                                src={user.avatarUrl}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        )}
                                    </div>
                                </Upload>

                                <div
                                    className={
                                        styles.body_profile_edit_item_name
                                    }
                                >
                                    <Form.Item name="username">
                                        <input
                                            name="username"
                                            placeholder={'昵称'}
                                            value={this.state.username}
                                            disabled={false}
                                            onChange={this.handleUserChange.bind(
                                                this,
                                            )}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>性别</div>
                                <Form.Item name="gender">
                                    <Select
                                        className={
                                            styles.body_profile_edit_item_2_input
                                        }
                                        style={{ width: '100%' }}
                                        bordered={false}
                                        placeholder={'在此选择性别'}
                                        suffixIcon={<FormOutlined />}
                                    >
                                        <Select.Option value="male">
                                            男
                                        </Select.Option>
                                        <Select.Option value="female">
                                            女
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>电话</div>
                                <Form.Item name="phone" className={''}>
                                    <Input.Group compact={true}>
                                        <Input
                                            style={{ width: '15%' }}
                                            bordered={false}
                                            defaultValue="+86"
                                        />
                                        <Input
                                            name="phone"
                                            // defaultValue={user.phone}
                                            style={{ width: '85%' }}
                                            bordered={false}
                                            placeholder={'在此填写电话号码'}
                                            suffix={<FormOutlined />}
                                        />
                                    </Input.Group>
                                </Form.Item>
                            </div>

                            <div className={styles.body_profile_edit_item_2}>
                                <div>邮箱</div>
                                <Form.Item name="email" className={''}>
                                    <Input
                                        name="email"
                                        bordered={false}
                                        placeholder={'在此填写邮箱'}
                                        suffix={<FormOutlined />}
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>生日</div>
                                <Form.Item>
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        bordered={false}
                                        defaultValue={moment(
                                            user.birthday
                                                ? this.formatDate(user.birthday)
                                                : '2050-08-20',
                                            'YYYY-MM-DD',
                                        )}
                                        allowClear={false}
                                        name="birthday"
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>个人简介</div>
                                <Form.Item name="description" className={''}>
                                    <Input.TextArea
                                        name="description"
                                        bordered={false}
                                        rows={2}
                                        placeholder={'在此介绍一下你自己...'}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className={styles.body_isOk}>
                            <button className={styles.body_btn1}>完成</button>
                        </div>
                    </div>
                </Form>
            </Fragment>
        );
    }

    // 更换头像
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    // 格式化日期
    formatDate = date => {
        let new_date = null;
        if (date) {
            new_date = new Date(date);
        } else {
            new_date = new Date();
        }
        let year = new_date.getFullYear();
        let month = new_date.getMonth() + 1;
        let day = new_date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return year + '-' + month + '-' + day;
    };
}

const mapStateToProps = state => {
    let { global } = state;
    return {
        user: global.cur_user,
        current_panel: state.global.current_panel,
    };
};

export default connect(mapStateToProps)(ProfileEdit);
