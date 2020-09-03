import React from 'react';
import styles from './index.css';
import { connect } from 'umi';
import { Avatar, Image } from 'antd';
import { UserOutlined, FileTextOutlined } from '@ant-design/icons';
let message = {
    id: 605,
    messageId: 216,
    msg: '起的亲爱的',
    msgContentType: 'FALSE',
    cvsId: 174,
    senderId: 8,
    senderName: 'tom12',
    senderAvatarUrl:
        'http://1.zmz121.cn:8010/res/file/pic/17201800000320200121080107498725.png',
    readed: true,
    syncId: 1,
    createTime: 1599035353000,
    selfSend: true,
};

const index = ({ message, cvsType }) => {
    function genNameDiv() {
        return <div className={styles.name_title}>{message.senderName}</div>;
    }

    function genMsgBody() {
        let message_content_style = message.selfSend
            ? `${styles.message_content}  ${styles.self_message_contet}`
            : `${styles.message_content}`;

        if (message.msgContentType === 'text') {
            return <div className={styles.message_content}>{message.msg}</div>;
        } else if (message.msgContentType === 'image') {
            return <Image width={300} src={message.msg} />;
        } else if (message.msgContentType === 'file') {
            return <FileTextOutlined />;
        }
    }

    // function genMsgBody(){
    //     <div className={styles.message_and_title}>
    //         <div>
    //             {cvsType === 'G' && !message.selfSend && genNameDiv()}
    //         </div>
    //         {genMsgBody()}
    //     </div>
    // }
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
