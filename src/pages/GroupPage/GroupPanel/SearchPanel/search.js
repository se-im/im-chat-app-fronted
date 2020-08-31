import React from 'react';
import styles from './search.css';
import { Input, Modal } from 'antd';
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
            />
            <span
                className={'iconfont im-icon-test' + ' ' + styles.add_icon}
                onClick={showModal.bind(this)}
            />
            <Modal
                title="创建群聊"
                visible={props.visible}
                onOk={handleOK.bind(this)}
                onCancel={handleCancel.bind(this)}
            >
                <div className={styles.modal}>
                    <Input
                        size="large"
                        className={styles.inputId}
                        bordered={true}
                        placeholder="请输入要添加好友的id"
                        addonBefore="id:"
                        onChange={handleIdChange.bind(this)}
                    />
                    <br />
                    <Input
                        size="large"
                        className={styles.inputId}
                        bordered={true}
                        placeholder="请输入备注信息"
                        addonBefore="note:"
                        onChange={handleNoteChange.bind(this)}
                    />
                </div>
            </Modal>
        </div>
    );
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
    function handleIdChange(e) {
        let id = e.target.value;
        props.dispatch({
            type: 'addFriend/handleIdChange',
            payload: {
                id: id,
            },
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
    };
};
export default connect(mapStateToProps)(index);
