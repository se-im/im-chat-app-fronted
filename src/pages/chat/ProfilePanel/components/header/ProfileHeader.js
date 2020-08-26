import React, { Component } from 'react';
import { Avatar, Button } from 'antd';
import { connect } from 'react-redux';
import { EditOutlined, FormOutlined } from '@ant-design/icons';
import styles from './style.css';

class ProfileHeader extends Component {
    render() {
        const { Message } = this.props;
        return (
            <div className={styles.profile_header}>
                <Avatar
                    className={styles.header_user_photo}
                    shape="circle"
                    icon={<img src={Message.receiver.userPhoto} />}
                />
                <h3 className={styles.header_user_name}>
                    {Message.receiver.userName}
                </h3>
                {/*<div>*/}
                {/*    <EditOutlined />*/}
                {/*    <input className={styles.header_user_motto} placeholder='write down your motto' />*/}
                {/*</div>*/}
                <Button className={styles.header_use_edit}>
                    {' '}
                    <FormOutlined /> modify remark
                </Button>
            </div>
        );
    }
}
const mapStateToProps = ({ Message }) => ({
    Message,
});

export default connect(mapStateToProps, null)(ProfileHeader);
