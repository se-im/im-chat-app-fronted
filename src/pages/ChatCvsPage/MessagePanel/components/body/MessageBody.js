import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar, Spin } from 'antd';
import styles from './style.css';
import MessageItem from './MessageItem/index';

// class index extends Component {
//     msgdiv = React.createRef();
//     render() {
//         return (
//             <div
//                 className={styles.msg_body}
//                 ref={this.msgdiv}
//                 onScroll={() => {
//                     this.handleOnScroll();
//                 }}
//             >
//                 <Spin
//                     className={
//                         this.props.showspin
//                             ? styles.show_spin
//                             : styles.hide_spin
//                     }
//                 />
//                 {this.props.cur_inbox.map((v, i) => (
//                     <MessageItem
//                         message={v}
//                         cvsType={this.props.cur_cvs.cvsType}
//                         key={i}
//                     />
//                 ))}
//             </div>
//         );
//     }
//
//     handleOnScroll() {
//         if (this.msgdiv.current) {
//             // const scrollHeight = this.msgdiv.current.scrollHeight; //里面div的实际高度  2000px
//             // const height = this.msgdiv.current.clientHeight; //网页可见高度  200px
//             if (this.msgdiv.current.scrollTop === 0) {
//                 console.log('加载...');
//                 this.props.dispatch({
//                     type: 'Message/changeSpin',
//                 });
//                 if (this.props.cur_inbox.length !== 0) {
//                     this.props.dispatch({
//                         type: 'Message/getNewInbox',
//                         payload: {
//                             cvsId: this.props.cur_inbox[0].cvsId,
//                             syncId: this.props.cur_inbox[0].syncId,
//                         },
//                     });
//                 }
//             }
//         }
//     }
//
//     // 组件初始化后
//     componentDidMount() {
//         if (this.msgdiv.current) {
//             const scrollHeight = this.msgdiv.current.scrollHeight; //里面div的实际高度  2000px
//             const height = this.msgdiv.current.clientHeight; //网页可见高度  200px
//             const maxScrollTop = scrollHeight - height;
//             this.msgdiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
//             //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
//         }
//     }
//     // 组件更新后
//     componentDidUpdate(prevProps) {
//         if (
//             prevProps.cur_inbox.length !== 0 &&
//             this.props.cur_inbox.length !== 0
//         ) {
//             if (
//                 prevProps.cur_inbox[0].cvsId !== this.props.cur_inbox[0].cvsId
//             ) {
//                 if (this.msgdiv.current) {
//                     const scrollHeight = this.msgdiv.current.scrollHeight; //里面div的实际高度  2000px
//                     const height = this.msgdiv.current.clientHeight; //网页可见高度  200px
//                     const maxScrollTop = scrollHeight - height;
//                     this.msgdiv.current.scrollTop =
//                         maxScrollTop > 0 ? maxScrollTop : 0;
//                     //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
//                 }
//             } else {
//                 // console.log(this.msgdiv.current.scrollTop);
//                 // this.msgdiv.current.scrollTop = prevProps.msgdiv.scrollTop;
//             }
//         }
//     }
// }

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
        showspin: state.Message.showspin,
    };
};

export default connect(mapStateToProps)(index);
