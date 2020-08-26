import React, { Component } from 'react';
import {
    UserAddOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import styles from './style.css';
import { connect } from 'react-redux';

class MessageHeader extends Component {
    render() {
        const { Message } = this.props;
        return (
            <div className={styles.msg_header}>
                <div className={styles.header_left}>
                    <img src={Message.receiver.userPhoto} />
                    <div className={styles.header_userinfo}>
                        <div>{Message.receiver.userName}</div>
                        <p>
                            {Message.receiver.userState} &nbsp;
                            {this.setUserState()}
                        </p>
                    </div>
                </div>
                <div className={styles.header_right}>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconUserAdd)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconUserAdd)
                        }
                    >
                        <UserAddOutlined
                            className={styles.header_icons}
                            ref={icon => {
                                this.changeStyleIconUserAdd = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconPhone)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconPhone)
                        }
                    >
                        <PhoneOutlined
                            className={styles.header_icons}
                            ref={icon => {
                                this.changeStyleIconPhone = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconVideoCamera)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconVideoCamera)
                        }
                    >
                        <VideoCameraOutlined
                            className={styles.header_icons}
                            ref={icon => {
                                this.changeStyleIconVideoCamera = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconInfoCircle)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconInfoCircle)
                        }
                    >
                        <InfoCircleOutlined
                            className={styles.header_icons}
                            ref={icon => {
                                this.changeStyleIconInfoCircle = icon;
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
    setUserState() {
        const { Message } = this.props;
        if (Message.receiver.userState === 'online') {
            return <span className={styles.header_userinfo_state_on} />;
        } else if (Message.receiver.userState === 'busy') {
            return <span className={styles.header_userinfo_state_busy} />;
        } else {
            return <span className={styles.header_userinfo_state_off} />;
        }
    }
    iconFocus(icon) {
        icon.style.color = '#8053b6';
        icon.style.fontSize = '25px';
    }
    iconBlur(icon) {
        icon.style.color = '#969896';
        icon.style.fontSize = '22px';
    }
}
const mapStateToProps = ({ Message }) => ({
    Message,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageHeader);
