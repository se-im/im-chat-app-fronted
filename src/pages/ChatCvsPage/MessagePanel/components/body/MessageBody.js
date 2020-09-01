import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import styles from './style.css';
import MessageItem from './MessageItem/index';
const index = ({ cur_inbox, cur_cvs }) => {
    const inbox = JSON.parse(JSON.stringify(cur_inbox));
    inbox['cvsType'] = cur_cvs.cvsType;
    return (
        <div className={styles.msg_body}>
            {inbox.map((v, i) => (
                <MessageItem message={v} cvsType={cur_cvs.cvsType} key={i} />
            ))}
            {/*<div className={styles.body_sender}>*/}
            {/*    <Avatar*/}
            {/*        className={styles.body_sender_photo}*/}
            {/*        shape="circle"*/}
            {/*        size="large"*/}
            {/*        icon={<img src={Message.sender.avatarUrl} />}*/}
            {/*    />*/}
            {/*    <div className={styles.body_sender_message}>*/}
            {/*        <div className={styles.body_sender_message_item}>*/}
            {/*            hahhahahha*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={styles.body_receiver}>*/}
            {/*    <div className={styles.body_receiver_message}>*/}
            {/*        <div className={styles.body_receiver_message_item}>*/}
            {/*            hahhahahha*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <Avatar*/}
            {/*        className={styles.body_receiver_photo}*/}
            {/*        shape="circle"*/}
            {/*        size="large"*/}
            {/*        icon={<img src={Message.receiver.userPhoto} />}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cur_inbox: state.inbox.cur_inbox,
        cur_cvs: state.cvs.cur_cvs,
    };
};

export default connect(mapStateToProps)(index);
