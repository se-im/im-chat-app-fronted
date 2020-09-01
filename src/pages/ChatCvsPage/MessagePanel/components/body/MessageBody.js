import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import styles from './style.css';
import MessageItem from './MessageItem/index';

class index extends Component {
    msgdiv = React.createRef();
    render() {
        return (
            <div className={styles.msg_body} ref={this.msgdiv}>
                {this.props.cur_inbox.map((v, i) => (
                    <MessageItem
                        message={v}
                        cvsType={this.props.cur_cvs.cvsType}
                        key={i}
                    />
                ))}
            </div>
        );
    }

    // 组件初始化后
    componentDidMount() {
        if (this.msgdiv.current) {
            const scrollHeight = this.msgdiv.current.scrollHeight; //里面div的实际高度  2000px
            const height = this.msgdiv.current.clientHeight; //网页可见高度  200px
            const maxScrollTop = scrollHeight - height;
            this.msgdiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
        }
    }
    // 组件更新后
    componentDidUpdate() {
        if (this.msgdiv.current) {
            const scrollHeight = this.msgdiv.current.scrollHeight; //里面div的实际高度  2000px
            const height = this.msgdiv.current.clientHeight; //网页可见高度  200px
            const maxScrollTop = scrollHeight - height;
            this.msgdiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
        }
    }
}

// const index = ({ cur_inbox, cur_cvs }) => {
//     const inbox = JSON.parse(JSON.stringify(cur_inbox));
//     const msgdiv = React.createRef();
//
//     inbox['cvsType'] = cur_cvs.cvsType;
//     return (
//         <div className={styles.msg_body} ref={msgdiv}>
//             {inbox.map((v, i) => (
//                 <MessageItem message={v} cvsType={cur_cvs.cvsType} key={i} />
//             ))}
//             {/*<div className={styles.body_sender}>*/}
//             {/*    <Avatar*/}
//             {/*        className={styles.body_sender_photo}*/}
//             {/*        shape="circle"*/}
//             {/*        size="large"*/}
//             {/*        icon={<img src={Message.sender.avatarUrl} />}*/}
//             {/*    />*/}
//             {/*    <div className={styles.body_sender_message}>*/}
//             {/*        <div className={styles.body_sender_message_item}>*/}
//             {/*            hahhahahha*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//             {/*<div className={styles.body_receiver}>*/}
//             {/*    <div className={styles.body_receiver_message}>*/}
//             {/*        <div className={styles.body_receiver_message_item}>*/}
//             {/*            hahhahahha*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//             {/*    <Avatar*/}
//             {/*        className={styles.body_receiver_photo}*/}
//             {/*        shape="circle"*/}
//             {/*        size="large"*/}
//             {/*        icon={<img src={Message.receiver.userPhoto} />}*/}
//             {/*    />*/}
//             {/*</div>*/}
//         </div>
//     );
// };
const mapStateToProps = state => {
    return {
        cur_inbox: state.inbox.cur_inbox,
        cur_cvs: state.cvs.cur_cvs,
    };
};

export default connect(mapStateToProps)(index);
