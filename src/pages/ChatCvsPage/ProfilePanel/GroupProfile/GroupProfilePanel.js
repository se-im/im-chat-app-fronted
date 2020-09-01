import React, { Fragment } from 'react';
import {
    Avatar,
    Input,
    Form,
    Button,
    Switch,
    Upload,
    message,
    Modal,
} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import styles from './style.css';

const GroupProfilePanel = props => {
    const { chatPanel, imageUrl } = props;
    let userID;
    // 更换头像
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = file => {
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
    const handleChange = info => {
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
    //修改群信息
    const onFinish = values => {
        values.avatarUrl = imageUrl
            ? imageUrl
            : chatPanel.profileForGroup.avatarUrl;
        props.dispatch({
            type: 'chatPanel/updateGroupInfo',
            payload: values,
        });
        message.success('修改群信息成功！');
    };

    //控制模态框的显示与隐藏
    const showModal = () => {
        props.dispatch({
            type: 'chatPanel/setVisibleToShowModel',
            payload: {
                userID: userID,
            },
        });
    };
    const handleCancel = () => {
        props.dispatch({
            type: 'chatPanel/setVisibleToCancelModel',
        });
        userID = null;
    };
    //添加群成员
    const handleAddNewMembers = () => {
        props.dispatch({
            type: 'chatPanel/addNewMemberToGroup',
            payload: {
                userID: userID,
            },
        });
    };

    const handleUserIdInput = e => {
        userID = e.target.value;
    };
    return (
        <Fragment>
            <div className={styles.group_header}>
                <div className={styles.header_members}>
                    <div className={styles.header_members_title}>群聊成员</div>
                    <div className={styles.header_members_list}>
                        <div
                            className={styles.header_member_item}
                            onClick={showModal}
                        >
                            <Avatar
                                className={styles.header_add_member_icon}
                                shape={'circle'}
                                icon={
                                    <span className={'iconfont'}>&#xeb9d;</span>
                                }
                            />
                            <p>添加</p>
                        </div>
                        <Modal
                            title="添加群成员"
                            visible={chatPanel.profileForGroup.visible}
                            onOk={handleAddNewMembers}
                            onCancel={handleCancel}
                        >
                            <Input
                                className={styles.inputId}
                                bordered={true}
                                placeholder="请输入用户ID"
                                addonBefore="UserID："
                                onChange={handleUserIdInput}
                            />
                        </Modal>
                        {chatPanel.profileForGroup.members.map(
                            (item, index) => {
                                return (
                                    <div
                                        className={styles.header_member_item}
                                        key={item.username}
                                    >
                                        <Avatar
                                            className={
                                                styles.header_add_member_icon
                                            }
                                            shape={'circle'}
                                            src={item.avatarUrl}
                                        />
                                        <p>{item.username}</p>
                                    </div>
                                );
                            },
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.group_body}>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                        ...chatPanel.profileForGroup,
                    }}
                    onFinish={onFinish}
                >
                    <div className={styles.group_body_item}>
                        <div className={styles.group_body_title}>
                            <strong>群聊ID</strong>
                        </div>
                        <Form.Item name="id">
                            <Input
                                className={styles.group_body_item_input}
                                name={'id'}
                                bordered={false}
                                disabled={true}
                                placeholder={'群聊ID'}
                                suffix={
                                    <span className={'iconfont'}>&#xe781;</span>
                                }
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.group_body_item}>
                        <div className={styles.group_body_title}>
                            <strong>群聊名称</strong>
                        </div>
                        <Form.Item name="name">
                            <Input
                                className={styles.group_body_item_input}
                                name={'name'}
                                bordered={false}
                                placeholder={'群聊名称'}
                                suffix={
                                    <span className={'iconfont'}>&#xe62a;</span>
                                }
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.group_body_item_2}>
                        <div className={styles.group_body_title}>
                            <strong>群聊头像</strong>
                        </div>
                        <div className={styles.group_body_item_2_content}>
                            <Upload
                                name="avatarUrl"
                                action=""
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                                showUploadList={false}
                            >
                                <div
                                    className={
                                        styles.body_group_avatar_container
                                    }
                                >
                                    {imageUrl ? (
                                        <img
                                            name="avatarUrl"
                                            className={''}
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        <img
                                            className={''}
                                            src={
                                                chatPanel.profileForGroup
                                                    .avatarUrl
                                            }
                                            alt="avatar"
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                </div>
                            </Upload>
                            <div
                                className={
                                    styles.group_body_item_2_content_desc
                                }
                            >
                                点击头像可修改
                            </div>
                        </div>
                    </div>
                    <div className={styles.group_body_item_2}>
                        <div className={styles.group_body_title}>
                            <strong>群聊简介</strong>
                        </div>
                        <Form.Item name="description">
                            <Input.TextArea
                                className={styles.group_body_item_input}
                                name="description"
                                bordered={false}
                                placeholder={'群聊简介'}
                                suffix={<FormOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <Button
                        className={styles.group_body_btn}
                        htmlType={'submit'}
                    >
                        <FormOutlined /> 保存修改
                    </Button>
                </Form>
            </div>
            <div className={styles.group_footer}>
                <div
                    className={styles.group_footer_btn}
                    onClick={() => {
                        console.log('click');
                        props.dispatch({
                            type: 'chatPanel/exitGroup',
                        });
                    }}
                >
                    删除并退出
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({ chatPanel }) => ({
    chatPanel,
});

export default connect(mapStateToProps)(GroupProfilePanel);
