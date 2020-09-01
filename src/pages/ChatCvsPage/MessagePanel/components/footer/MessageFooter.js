import React, { Component } from 'react';
import { Input } from 'antd';
import {
    PaperClipOutlined,
    SmileOutlined,
    PictureOutlined,
    HistoryOutlined,
    ContactsOutlined,
    MailOutlined,
    SendOutlined,
} from '@ant-design/icons';
import styles from './style.css';
import { connect } from 'umi';

class MessageFooter extends Component {
    state = {
        inputValue: '',
    };
    render() {
        return (
            <div className={styles.msg_footer}>
                <div className={styles.footer_icons_container}>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconPaperClip)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconPaperClip)
                        }
                    >
                        <PaperClipOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconPaperClip = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconSmile)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconSmile)
                        }
                    >
                        <SmileOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconSmile = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconScissor)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconScissor)
                        }
                    >
                        <PictureOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconScissor = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconHistory)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconHistory)
                        }
                    >
                        <HistoryOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconHistory = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconContact)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconContact)
                        }
                    >
                        <ContactsOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconContact = icon;
                            }}
                        />
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconMail)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconMail)
                        }
                    >
                        <MailOutlined
                            className={styles.footer_icons}
                            ref={icon => {
                                this.changeStyleIconMail = icon;
                            }}
                        />
                    </div>
                </div>
                <div className={styles.footer_input_area}>
                    <Input
                        className={styles.footer_input}
                        bordered={false}
                        rows={5}
                        placeholder="Please write here "
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                        onPressEnter={this.sendMessage.bind(this)}
                    />

                    <div className={styles.footer_send_area}>
                        <SendOutlined
                            className={styles.footer_icons_send}
                            onClick={this.sendMessage.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    sendMessage() {
        this.props.dispatch({
            type: 'Message/sendMessageToRemote',
            payload: this.state.inputValue,
        });
        this.setState({
            inputValue: '',
        });
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
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
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(MessageFooter);
