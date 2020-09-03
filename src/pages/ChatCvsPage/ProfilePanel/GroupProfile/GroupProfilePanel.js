import React, { Component, Fragment } from 'react';
import {
    Avatar,
    Input,
    Form,
    Button,
    Upload,
    message,
    Modal,
    List,
} from 'antd';
import { FormOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './style.css';

class GroupProfilePanel extends Component {
    state = {
        userID: null,
        avatarUrl: this.props.chatPanel.profileForGroup.avatarUrl,
        flag: false,
    };
    //上传群聊头像
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
    handleChangeGroupAvatar = info => {
        if (info.file.status === 'done') {
            const formData = new FormData();
            formData.append('file', info.file.originFileObj);
            const url = 'http://1.zmz121.cn:8010/file/upload/headpic';
            axios
                .post(url, formData, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(res => {
                    this.setState({
                        avatarUrl: res,
                    });
                    message.info(res);
                })
                .catch(error => {
                    message.error(error.data);
                });
        }
    };
    //修改群信息
    onFinish = values => {
        values.avatarUrl = this.state.avatarUrl;
        this.props.dispatch({
            type: 'chatPanel/updateGroupInfo',
            payload: values,
        });
    };
    //控制模态框的显示与隐藏
    showModal = () => {
        this.props.dispatch({
            type: 'chatPanel/setVisibleToShowModel',
        });
    };
    handleCancel = () => {
        this.props.dispatch({
            type: 'chatPanel/setVisibleToCancelModel',
        });
        this.setState({
            userID: null,
            flag: false,
        });
    };
    //添加群成员
    handleAddNewMembers = () => {
        let newMember = {
            username: this.props.friendInfo[0].username,
            userAvatarUrl: this.props.friendInfo[0].avatarUrl,
        };
        this.props.chatPanel.profileForGroup.members.push(newMember);
        this.props.dispatch({
            type: 'chatPanel/updateGroupProfileMemberNum',
        });
        this.setState({
            userID: null,
            flag: false,
        });
        this.props.dispatch({
            type: 'chatPanel/addNewMemberToGroup',
            payload: {
                userID: this.props.friendInfo[0].id,
            },
        });
        this.handleCancel();
    };
    handleShowNewMemberInfo = flag => {
        if (flag) {
            return (
                <List
                    className={styles.header_new_member_view}
                    itemLayout="horizontal"
                    dataSource={this.props.friendInfo}
                    bordered={true}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={item.avatarUrl}
                                        className={
                                            styles.header_new_member_view_avatar
                                        }
                                    />
                                }
                                title={<p>用户ID：{item.id}</p>}
                                description={<p>用户名：{item.username}</p>}
                            />
                        </List.Item>
                    )}
                />
            );
        }
    };
    handleUserIdInput = e => {
        this.setState({
            userID: e.target.value,
        });
        if (e.target.value !== null) {
            this.setState({
                flag: true,
            });
        }
        this.props.dispatch({
            type: 'addFriend/handleInputMsgChange',
            payload: {
                inputMsg: e.target.value,
            },
        });
        this.props.dispatch({
            type: 'addFriend/getUserByIdOrName',
        });
    };
    //退出群聊
    handleExitGroup = () => {
        this.props.dispatch({
            type: 'chatPanel/exitGroup',
        });
        this.props.dispatch({
            type: 'chatPanel/setShowProfileToNot',
        });
    };
    render() {
        const { chatPanel, friendInfo } = this.props;
        const { avatarUrl, flag } = this.state;
        const {
            beforeUpload,
            handleChangeGroupAvatar,
            onFinish,
            showModal,
            handleAddNewMembers,
            handleUserIdInput,
            handleCancel,
            handleShowNewMemberInfo,
            handleExitGroup,
        } = this;
        return (
            <Fragment>
                <div className={styles.group_header}>
                    <div className={styles.header_members}>
                        <div className={styles.header_members_title}>
                            群聊成员（{chatPanel.profileForGroup.memberNum}）
                        </div>
                        <div className={styles.header_members_list}>
                            <div
                                className={styles.header_member_item}
                                onClick={showModal}
                            >
                                <Avatar
                                    className={styles.header_add_member_icon}
                                    shape={'circle'}
                                    icon={
                                        <PlusOutlined
                                            className={
                                                styles.header_add_member_icon_content
                                            }
                                        />
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
                                    bordered={true}
                                    placeholder="请输入用户ID"
                                    addonBefore="UserID："
                                    onChange={handleUserIdInput}
                                />
                                {handleShowNewMemberInfo(flag)}
                            </Modal>
                            {chatPanel.profileForGroup.members.map(
                                (item, index) => {
                                    return (
                                        <div
                                            className={
                                                styles.header_member_item
                                            }
                                            key={item.username}
                                        >
                                            <Avatar
                                                className={
                                                    styles.header_add_member_icon
                                                }
                                                shape={'circle'}
                                                src={item.userAvatarUrl}
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
                                        <span className={'iconfont'}>
                                            &#xe781;
                                        </span>
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
                                        <span className={'iconfont'}>
                                            &#xe62a;
                                        </span>
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
                                    accept=".jpg, .jpeg, .png"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChangeGroupAvatar}
                                    showUploadList={false}
                                >
                                    <div
                                        className={
                                            styles.body_group_avatar_container
                                        }
                                    >
                                        <Avatar
                                            className={
                                                styles.body_group_avatar_container
                                            }
                                            shape={'circle'}
                                            src={avatarUrl}
                                            alt="avatar"
                                            style={{ width: '100%' }}
                                        />
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
                        onClick={handleExitGroup}
                    >
                        删除并退出
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    chatPanel: state.chatPanel,
    friendInfo: state.addFriend.friendInfo,
});

export default connect(mapStateToProps)(GroupProfilePanel);
