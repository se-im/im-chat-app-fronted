import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import styles from './style.css';

class MessageBody extends Component {
    render() {
        const { Message } = this.props;
        return (
            <div className={styles.msg_body}>
                <div className={styles.body_sender}>
                    <Avatar
                        className={styles.body_sender_photo}
                        shape="circle"
                        size="large"
                        icon={<img src={Message.sender.avatarUrl} />}
                    />
                    <div className={styles.body_sender_message}>
                        <div className={styles.body_sender_message_item}>
                            hahhahahha
                        </div>
                    </div>
                </div>
                <div className={styles.body_receiver}>
                    <div className={styles.body_receiver_message}>
                        <div className={styles.body_receiver_message_item}>
                            hahhahahha
                        </div>
                    </div>

                    <Avatar
                        className={styles.body_receiver_photo}
                        shape="circle"
                        size="large"
                        icon={<img src={Message.receiver.userPhoto} />}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ Message }) => ({
    Message,
});

export default connect(mapStateToProps, null)(MessageBody);
