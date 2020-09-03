import React, { Component, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import styles from './style.css';
import MessageItem from './MessageItem/index';
import InfiniteScroll from 'react-infinite-scroller';
import ReactPullToRefresh from 'react-pull-to-refresh';
import request from '../../../../../../util/request';

const index = ({ cur_inbox, cur_cvs, dispatch }) => {
    const messagesEnd = React.createRef();

    function scrollToBottom() {
        const scrollHeight = messagesEnd.scrollHeight; //里面div的实际高度  2000px
        const height = messagesEnd.clientHeight; //网页可见高度  200px
        const maxScrollTop = scrollHeight - height;
        messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        // messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }

    useLayoutEffect(() => {
        console.log('-------------');
        scrollToBottom();
    });

    const [userModel, setUserModel] = useState({
        loading: true,
    });

    function handleRefresh(resolve, reject) {
        let success = true;
        console.log('-----------');
        setTimeout(() => {
            resolve;
        }, 10000);
    }
    const inbox = JSON.parse(JSON.stringify(cur_inbox));
    inbox['cvsType'] = cur_cvs.cvsType;

    return (
        <div className={styles.msg_body} ref={messagesEnd}>
            <ReactPullToRefresh
                onRefresh={handleRefresh}
                className="your-own-class-if-you-want"
                style={{
                    textAlign: 'center',
                }}
            >
                {inbox.map((v, i) => (
                    <MessageItem
                        message={v}
                        cvsType={cur_cvs.cvsType}
                        key={i}
                    />
                ))}
            </ReactPullToRefresh>
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
