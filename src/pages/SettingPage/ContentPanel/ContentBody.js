import React, { Component } from 'react';
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

class ContentBody extends Component {
    state = {
        loading: false,
        value: 1,
    };
    render() {
        const { imageUrl } = this.state;
        const { Option } = Select;
        const { TextArea } = Input;

        return (
            <div className={styles.content_body}>
                <div className={styles.body_container}>
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
                                    <div
                                        className={
                                            styles.body_user_avatar_container
                                        }
                                    >
                                        {imageUrl ? (
                                            <img
                                                className={
                                                    styles.body_user_avatar
                                                }
                                                src={imageUrl}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        ) : (
                                            <div
                                                className={
                                                    styles.body_user_avatar_upload_btn
                                                }
                                            >
                                                点击上传头像
                                            </div>
                                        )}
                                    </div>
                                </Upload>
                                <div
                                    className={
                                        styles.body_profile_edit_item_name
                                    }
                                >
                                    <input
                                        defaultValue={'User Name'}
                                        disabled={true}
                                    />
                                    <div
                                        className={
                                            styles.body_profile_edit_name
                                        }
                                    >
                                        <FormOutlined border={true} /> 更改昵称
                                    </div>
                                </div>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>Gender</div>
                                <Select
                                    style={{ width: '100%' }}
                                    bordered={false}
                                    defaultValue={'男'}
                                    suffixIcon={<FormOutlined />}
                                >
                                    <Option value="lucy">男</Option>
                                    <Option value="lucy">女</Option>
                                </Select>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>Mobile</div>
                                <Input.Group compact={true}>
                                    <Input
                                        style={{ width: '10%' }}
                                        bordered={false}
                                        defaultValue="+86"
                                    />
                                    <Input
                                        style={{ width: '90%' }}
                                        bordered={false}
                                        defaultValue="18391551595"
                                        suffix={<FormOutlined />}
                                    />
                                </Input.Group>
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>Email</div>
                                <Input
                                    bordered={false}
                                    defaultValue="2423587483@qq.com"
                                    suffix={<FormOutlined />}
                                />
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>Birthday</div>
                                <DatePicker
                                    style={{ width: '100%' }}
                                    bordered={false}
                                    defaultValue={moment(
                                        '2015-06-06',
                                        'YYYY-MM-DD',
                                    )}
                                    allowClear={false}
                                />
                            </div>
                            <div className={styles.body_profile_edit_item_2}>
                                <div>Description</div>
                                <TextArea
                                    bordered={false}
                                    rows={2}
                                    placeholder={
                                        'write something to introduce yourself...'
                                    }
                                />
                            </div>
                        </div>
                    </div>
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
                                    <FormOutlined /> &nbsp;退出登录
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.body_user_agreement}>
                        <strong>用户协议</strong>
                    </div>
                    <div className={styles.body_about_me}>
                        <strong>用户协议</strong>
                    </div>
                </div>
            </div>
        );
    }
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
    onChangeGender = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
}

export default ContentBody;
