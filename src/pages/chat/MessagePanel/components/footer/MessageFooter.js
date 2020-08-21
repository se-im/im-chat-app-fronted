import React, { Component } from 'react';
import { Input } from 'antd';
import {
    PaperClipOutlined,
    SmileOutlined,
    ScissorOutlined,
    HistoryOutlined,
    ContactsOutlined,
    MailOutlined,
    SendOutlined,
} from '@ant-design/icons';

import styles from './style.css';

class MessageFooter extends Component {
    render() {
        const { TextArea } = Input;
        return (
            <div className={styles.msg_footer}>
                <div>
                    <PaperClipOutlined className={styles.footer_icons} />
                    <SmileOutlined className={styles.footer_icons} />
                    <ScissorOutlined className={styles.footer_icons} />
                    <HistoryOutlined className={styles.footer_icons} />
                    <ContactsOutlined className={styles.footer_icons} />
                    <MailOutlined className={styles.footer_icons} />
                </div>
                <div className={styles.footer_input_area}>
                    <Input
                        className={styles.footer_input}
                        bordered={false}
                        rows={5}
                        placeholder="Please write here "
                    />
                    <div className={styles.footer_send_area}>
                        <SendOutlined className={styles.footer_icons_send} />
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageFooter;
