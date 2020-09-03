import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar, Spin } from 'antd';
import styles from './style.css';
import MessageItem from './MessageItem/index';

const index = ({ cur_inbox, cur_cvs, dispatch }) => {
    const messagesEnd = React.createRef();

    function scrollToBottom() {
        const scrollHeight = messagesEnd.current.scrollHeight; //里面div的实际高度  2000px
        const height = messagesEnd.current.clientHeight; //网页可见高度  200px
        const maxScrollTop = scrollHeight - height;
        messagesEnd.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        console.log('-------------');
        scrollToBottom();
    });

    const [userModel, setUserModel] = useState({
        loading: true,
    });

    const inbox = JSON.parse(JSON.stringify(cur_inbox));
    inbox['cvsType'] = cur_cvs.cvsType;

    return (
        <div className={styles.msg_body} ref={messagesEnd}>
            {inbox.map((v, i) => (
                <MessageItem message={v} cvsType={cur_cvs.cvsType} key={i} />
            ))}
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
