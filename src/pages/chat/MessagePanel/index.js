import React, { Component } from 'react';
import MessageHeader from './components/header/MessageHeader';
import MessageFooter from './components/footer/MessageFooter';
import styles from './index.css';

class MessagePanel extends Component {
    render() {
        return (
            <div className={styles.msg_panel}>
                <MessageHeader />
                <div className={styles.msg_body}>I am content</div>
                <MessageFooter />
            </div>
        );
    }
}
export default MessagePanel;
