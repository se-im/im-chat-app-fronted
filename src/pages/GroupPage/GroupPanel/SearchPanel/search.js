import React from 'react';
import styles from './search.css';
import { Input, Modal, Menu, Dropdown, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../../../../assert/iconfont/iconfont.css';
import { connect } from 'react-redux';

const index = props => {
    const { TextArea } = Input;
    const CheckboxGroup = Checkbox.Group;
    const menu = (
        <Menu>
            <Menu.Item key={'1'} onClick={showModal.bind(this)}>
                <p>创建群聊</p>
            </Menu.Item>
            <Menu.Item key={'2'}>
                <p>添加群成员</p>
            </Menu.Item>
        </Menu>
    );
    const friendList = props.friendList;
    return (
        <div className={styles.friend_header}>
            <Input
                size="large"
                className={styles.search}
                placeholder="Search Conversations"
                prefix={<SearchOutlined />}
            />
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <span
                    className={'iconfont im-icon-test' + ' ' + styles.add_icon}
                />
            </Dropdown>
            {/*<span className={'iconfont im-icon-test' + ' ' + styles.add_icon} onClick={showModal.bind(this)}/>*/}
            <Modal
                title="创建群聊"
                visible={props.visible}
                onOk={handleOK.bind(this)}
                onCancel={handleCancel.bind(this)}
            >
                {/*<div className={styles.modal}>*/}
                {/*    <TextArea*/}
                {/*        size="large"*/}
                {/*        className={styles.inputId}*/}
                {/*        bordered={true}*/}
                {/*        autoSize={{ minRows: 4, maxRows: 6 }}*/}
                {/*        placeholder="请输入要加入群聊的用户id"*/}
                {/*        onChange={handleIdChange.bind(this)}*/}
                {/*    />*/}
                {/*</div>*/}
                <CheckboxGroup
                    options={friendList}
                    onChange={checkedList.bind(this)}
                />
            </Modal>
        </div>
    );
    function checkedList(e) {
        const checkedList = [];
        checkedList.push(e);
        // let checkedArr = checkedList.toString();
        props.dispatch({
            type: 'group/setCheckedList',
            payload: checkedList,
        });
    }
    function showModal() {
        props.dispatch({
            type: 'group/showGroupModal',
        });
    }
    function handleOK() {
        props.dispatch({
            type: 'group/createGroup',
        });
    }
    function handleCancel() {
        props.dispatch({
            type: 'group/handleCancel',
        });
    }
    function handleIdChange(e) {
        let ids = e.target.value;
        let idsArray = ids.split(',').map(Number);
        props.dispatch({
            type: 'group/setUserIdList',
            payload: {
                ids: idsArray,
            },
        });
    }
};
const mapStateToProps = state => {
    return {
        visible: state.group.visible,
        friendList: state.group.friendList,
        checkedList: state.group.checkedList,
    };
};
export default connect(mapStateToProps)(index);
