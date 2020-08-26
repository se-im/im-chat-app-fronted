import React, { Component } from 'react';
import MessageHeader from './components/header/MessageHeader';
import MessageBody from './components/body/MessageBody';
import MessageFooter from './components/footer/MessageFooter';
import styles from './index.css';

class MessagePanel extends Component {
    render() {
        return (
            <div className={styles.msg_panel}>
                <MessageHeader />
                <MessageBody />
                <MessageFooter />
            </div>
        );
    }
}
export default MessagePanel;
