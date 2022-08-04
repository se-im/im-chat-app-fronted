import React, { Component, Fragment } from 'react';
import { connect } from 'umi';

import axios from 'axios';
import {
    Upload,
    message,
    Input,
    Select,
    DatePicker,
    Avatar,
    Form,
    Switch,
} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './style.css';
import request from '../../../../../util/request';
import api from '../../../../../util/api';

class ProfileEdit extends Component {
    state = {
        value: 1,
        username: this.props.user.username,
        birthday:
            this.props.user.birthday > 0
                ? this.props.user.birthday
                : '2020-09-01',
        shown: this.props.user.shown,
        imageUrl: this.props.user.avatarUrl,
    };

    //上传用户头像
    beforeUpload = file => {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    handleChangeAvatar = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        console.log('----开始上传');
        if (info.file.status === 'done') {
            const formData = new FormData();
            formData.append('file', info.file.originFileObj);
            this.setState({
                uploading: true,
            });
            const url = request.getFullUrlPath(api.file_api.uploadHeadPic);
            console.log('上传url' + url);
            axios
                .post(url, formData, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(res => {
                    this.setState({
                        imageUrl: res,
                    });
                    message.info(res);
                })
                .catch(error => {
                    message.error(error.data);
                });
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
    //修改用户信息
    onFinish = values => {
        values.birthday = new Date(this.state.birthday).getTime();
        values.shown = this.state.shown;
        values.avatarUrl = this.state.imageUrl;
        this.props.dispatch({
            type: 'global/updateUserInfo',
            payload: values,
        });
        console.log(values);
    };
    //修改用户生日
    handleGetBirthdayChange = (date, dateString) => {
        this.state.birthday = dateString;
    };
    handleIsShownChange = (checked, e) => {
        this.state.shown = checked;
    };
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
                        <div>个人信息</div>
                        <div className={styles.body_profile_edit_container}>
                            <div className={styles.body_profile_edit_item_1}>
                                <Form.Item>
                                    <Upload
                                        accept=".jpg, .jpeg, .png"
                                        beforeUpload={this.beforeUpload}
                                        onChange={this.handleChangeAvatar}
                                        showUploadList={false}
                                    >
                                        <div
                                            className={
                                                styles.body_user_avatar_container
                                            }
                                        >
                                            <img
                                                name="avatarUrl"
                                                className={
                                                    styles.body_user_avatar
                                                }
                                                src={imageUrl}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </Upload>
                                </Form.Item>
                                <div
                                    className={
                                        styles.body_profile_edit_item_name
                                    }
                                >
                                    <Form.Item name="username">
                                        <input
                                            name="username"
                                            placeholder={'昵称'}
                                            disabled={false}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>用户ID</div>
                                <Form.Item name="id">
                                    <Input
                                        name="id"
                                        bordered={false}
                                        disabled={true}
                                        placeholder={'在此填写ID'}
                                        suffix={
                                            <span className={'iconfont '}>
                                                &#xe781;
                                            </span>
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>性别</div>
                                <Form.Item name="gender">
                                    <Select
                                        style={{ width: '100%' }}
                                        bordered={false}
                                        placeholder={'在此选择性别'}
                                        suffix={
                                            <span className={'iconfont '}>
                                                &#xe61f;
                                            </span>
                                        }
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
                                    <Input
                                        name="phone"
                                        style={{ width: '100%' }}
                                        bordered={false}
                                        placeholder={'在此填写电话号码'}
                                        prefix={<span>+86 &nbsp;&nbsp;</span>}
                                        suffix={
                                            <span
                                                className={'iconfont '}
                                                style={{ color: '#a9a9a9' }}
                                            >
                                                &#xe653;
                                            </span>
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>邮箱</div>
                                <Form.Item name="email" className={''}>
                                    <Input
                                        name="email"
                                        bordered={false}
                                        placeholder={'在此填写邮箱'}
                                        suffix={
                                            <span
                                                className={'iconfont '}
                                                style={{ color: '#a9a9a9' }}
                                            >
                                                &#xe617;
                                            </span>
                                        }
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
                                            this.formatDate(user.birthday),
                                            'YYYY-MM-DD',
                                        )}
                                        name="birthday"
                                        onChange={this.handleGetBirthdayChange}
                                        suffix={
                                            <span className={'iconfont '}>
                                                &#xe72a;
                                            </span>
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className={styles.body_profile_edit_item_3}>
                                <div className={styles.body_item_show}>
                                    对陌生人是否可见
                                </div>
                                <div className={styles.body_item_change_show}>
                                    <Switch
                                        name="shown"
                                        defaultChecked={user.shown}
                                        onChange={this.handleIsShownChange}
                                    />
                                </div>
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
}

const mapStateToProps = state => {
    let { global } = state;
    return {
        user: global.cur_user,
        current_panel: state.global.current_panel,
    };
};

export default connect(mapStateToProps)(ProfileEdit);
