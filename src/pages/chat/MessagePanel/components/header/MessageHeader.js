import React, { Component } from 'react';
import {
    UserAddOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    InfoOutlined,
} from '@ant-design/icons';
import styles from './style.css';

class MessageHeader extends Component {
    render() {
        return (
            <div className={styles.msg_header}>
                <div className={styles.header_left}>
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3107068196,1940194195&fm=26&gp=0.jpg" />
                    <div className={styles.header_userinfo}>
                        <div>User Name</div>
                        <p>
                            Online&nbsp;
                            <span />
                        </p>
                    </div>
                </div>
                <div className={styles.header_right}>
                    <div>
                        <UserAddOutlined className={styles.header_icons} />
                    </div>
                    <div>
                        <PhoneOutlined className={styles.header_icons} />
                    </div>
                    <div>
                        <VideoCameraOutlined className={styles.header_icons} />
                    </div>
                    <div className={styles.header_icons_container}>
                        <InfoOutlined className={styles.header_icons} />
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageHeader;
