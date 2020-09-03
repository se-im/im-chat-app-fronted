import React from 'react';
import styles from './index.css';
import { connect } from 'umi';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
let message = {
    createTime: 1598873766000,
    cvsId: 37,
    id: 51,
    messageId: 22,
    msg: 'sfsfs',
    readed: false,
    selfSend: true,
    senderAvatarUrl:
        'http://1.zmz121.cn:8010/res/file/pic/17201800000320200521080528088661.png',
    senderId: 8,
    senderName: 'tom',
    syncId: 1,
};

const index = ({ message, cvsType }) => {
    function genNameDiv() {
        return <div className={styles.name_title}>{message.senderName}</div>;
    }

    function genMsgBody() {
        let message_content_style = message.selfSend
            ? `${styles.message_content}  ${styles.self_message_contet}`
            : `${styles.message_content}`;
        return <div className={styles.message_content}>{message.msg}</div>;
    }

    let message_item_style = message.selfSend
        ? `${styles.message_item}  ${styles.self_message_item}`
        : `${styles.message_item}`;
    return (
        <div className={message_item_style}>
            <div>
                <Avatar
                    size={44}
                    src={message.senderAvatarUrl}
                    icon={<UserOutlined />}
                />
            </div>

            <div className={styles.message_and_title}>
                <div>
                    {cvsType === 'G' && !message.selfSend && genNameDiv()}
                </div>

                {genMsgBody()}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(index);
