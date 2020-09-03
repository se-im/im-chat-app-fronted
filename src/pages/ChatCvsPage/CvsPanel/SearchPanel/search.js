import React from 'react';
import styles from './search.css';
import { Input, Modal, Avatar, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../../../../assert/iconfont/iconfont.css';
import { connect } from 'react-redux';

const index = props => {
    return (
        <div className={styles.friend_header}>
            <Input
                size="large"
                className={styles.search}
                placeholder="Search Conversations"
                prefix={<SearchOutlined />}
                onChange={searchCvs.bind(this)}
            />
            <span
                className={'iconfont im-icon-test' + ' ' + styles.add_icon}
                onClick={showModal.bind(this)}
            />
            <Modal
                title="添加好友"
                visible={props.visible}
                onOk={handleOK.bind(this)}
                onCancel={handleCancel.bind(this)}
            >
                <div className={styles.modal}>
                    <Input
                        size="large"
                        className={styles.inputId}
                        bordered={true}
                        placeholder="请输入陌生人的名字或id"
                        addonBefore="名字/id:"
                        value={props.inputMsg}
                        onChange={handleInputChange.bind(this)}
                    />
                    <br />
                    <Input
                        size="large"
                        className={styles.inputId}
                        bordered={true}
                        placeholder="请输入备注信息"
                        addonBefore="note:"
                        value={props.note}
                        onChange={handleNoteChange.bind(this)}
                    />
                    {showFriendInfoList(props.friendInfo.length)}
                </div>
            </Modal>
        </div>
    );
    function showFriendInfoList(friendInfoListLength) {
        if (friendInfoListLength !== 0) {
            return (
                <List
                    className={styles.friendInfoList}
                    itemLayout="horizontal"
                    dataSource={props.friendInfo}
                    bordered={true}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={item.avatarUrl}
                                        className={styles.avatar}
                                    />
                                }
                                title={<p>用户ID：{item.id}</p>}
                                description={<p>用户名：{item.username}</p>}
                            />
                        </List.Item>
                    )}
                />
            );
        } else {
            return '';
        }
    }

    function searchCvs(e) {
        let value = e.target.value;
        console.log(value);
        props.dispatch({
            type: 'cvs/handleSearch',
            payload: value,
        });
    }
    function showModal() {
        props.dispatch({
            type: 'addFriend/showModal',
        });
    }
    function handleOK() {
        props.dispatch({
            type: 'addFriend/addNewFriend',
        });
    }
    function handleCancel() {
        props.dispatch({
            type: 'addFriend/handleCancel',
        });
    }
    function handleInputChange(e) {
        let value = e.target.value;
        props.dispatch({
            type: 'addFriend/handleInputMsgChange',
            payload: {
                inputMsg: value,
            },
        });
        props.dispatch({
            type: 'addFriend/getUserByIdOrName',
        });
    }
    function handleNoteChange(e) {
        let note = e.target.value;
        props.dispatch({
            type: 'addFriend/handleNoteChange',
            payload: {
                note: note,
            },
        });
    }
};
const mapStateToProps = state => {
    return {
        visible: state.addFriend.visible,
        friendInfo: state.addFriend.friendInfo,
        inputMsg: state.addFriend.inputMsg,
        note: state.addFriend.note,
    };
};
export default connect(mapStateToProps)(index);
