import React, { Component } from 'react';
import { connect } from 'umi';
import { Upload, message, Input, Select, DatePicker, Avatar } from 'antd';
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
    };
    render() {
        const { imageUrl } = this.state;
        const { user } = this.props;
        return (
            <div className={styles.body_profile_edit}>
                <strong>个人信息</strong>
                <div className={styles.body_profile_edit_container}>
                    <div className={styles.body_profile_edit_item_1}>
                        <Upload
                            name="avatar"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                            showUploadList={false}
                        >
                            <div className={styles.body_user_avatar_container}>
                                {imageUrl ? (
                                    <img
                                        className={styles.body_user_avatar}
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    <img
                                        className={styles.body_user_avatar}
                                        src={user.avatarUrl}
                                        alt="avatar"
                                        style={{ width: '100%' }}
                                    />
                                )}
                            </div>
                        </Upload>
                        <div className={styles.body_profile_edit_item_name}>
                            <input
                                id={'username'}
                                placeholder={'昵称'}
                                defaultValue={user.username}
                                disabled={true}
                            />
                            <div className={styles.body_profile_edit_name}>
                                <FormOutlined border={true} /> 更改昵称
                            </div>
                        </div>
                    </div>
                    <div className={styles.body_profile_edit_item_2}>
                        <div>性别</div>
                        <Select
                            style={{ width: '100%' }}
                            bordered={false}
                            placeholder={'在此选择性别'}
                            defaultValue={user.gender}
                            suffixIcon={<FormOutlined />}
                        >
                            <Select.Option value="male">男</Select.Option>
                            <Select.Option value="female">女</Select.Option>
                        </Select>
                    </div>
                    <div className={styles.body_profile_edit_item_2}>
                        <div>手机</div>
                        <Input.Group compact={true}>
                            <Input
                                style={{ width: '10%' }}
                                bordered={false}
                                defaultValue="+86"
                            />
                            <Input
                                style={{ width: '90%' }}
                                bordered={false}
                                placeholder={'在此填写电话号码'}
                                defaultValue={user.phone}
                                suffix={<FormOutlined />}
                            />
                        </Input.Group>
                    </div>
                    <div className={styles.body_profile_edit_item_2}>
                        <div>邮箱</div>
                        <Input
                            bordered={false}
                            defaultValue={user.email}
                            placeholder={'在此填写邮箱'}
                            suffix={<FormOutlined />}
                        />
                    </div>
                    <div className={styles.body_profile_edit_item_2}>
                        <div>生日</div>
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
                        />
                    </div>
                    <div className={styles.body_profile_edit_item_2}>
                        <div>个人简介</div>
                        <Input.TextArea
                            bordered={false}
                            rows={2}
                            placeholder={'在此介绍一下你自己...'}
                            defaultValue={user.description}
                        />
                    </div>
                </div>
                <div className={styles.body_isOk}>
                    <button
                        className={styles.body_btn1}
                        onClick={this.updateUserInfo}
                    >
                        完成
                    </button>
                </div>
            </div>
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
    //更新用户信息
    updateUserInfo = () => {
        let username = document.getElementById('username');
        this.props.dispatch({
            type: 'global/updateUserInfo',
            payload: {
                id: this.props.user.id,
                username: 'lu',
                description: '',
                email: '',
                phone: '',
                birthday: 1598043966000,
                avatarUrl:
                    'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
                createTime: 1597331350000,
                shown: true,
                gender: null,
            },
        });
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
