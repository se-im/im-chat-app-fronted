import React, { Component } from 'react';
import { Input, Popover, Upload, Button, Popconfirm, Progress } from 'antd';
import { Picker } from 'emoji-mart';
import axios from 'axios';
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
import 'emoji-mart/css/emoji-mart.css';
import { connect } from 'umi';
import util from '../../../../../../util/util';

class MessageFooter extends Component {
    state = {
        inputValue: '',
        img: '',
        percent: 0,
    };
    emoji = (
        <Picker
            showPreview={false}
            showSkinTones={false}
            onClick={emoji => {
                this.setState({
                    inputValue: this.state.inputValue + emoji.native,
                });
            }}
        />
    );
    inputfile = React.createRef();
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
                        <Popover trigger={'click'} content={this.emoji}>
                            <SmileOutlined
                                className={styles.footer_icons}
                                ref={icon => {
                                    this.changeStyleIconSmile = icon;
                                }}
                            />
                        </Popover>
                    </div>
                    <div
                        onMouseEnter={() =>
                            this.iconFocus(this.changeStyleIconScissor)
                        }
                        onMouseLeave={() =>
                            this.iconBlur(this.changeStyleIconScissor)
                        }
                    >
                        <Popover
                            content={
                                <Progress
                                    percent={this.state.percent}
                                    style={{ width: '150px' }}
                                />
                            }
                            trigger={'click'}
                        >
                            <PictureOutlined
                                className={styles.footer_icons}
                                ref={icon => {
                                    this.changeStyleIconScissor = icon;
                                }}
                                onClick={() => {
                                    this.inputfile.current.click();
                                }}
                            />
                        </Popover>

                        <Upload
                            showUploadList={false}
                            accept={
                                '.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico'
                            }
                            beforeUpload={file => {
                                this.setState({
                                    img: file,
                                });
                                const data = new FormData();
                                data.append('file', file);
                                axios({
                                    method: 'post',
                                    url:
                                        'http://1.zmz121.cn:8010/file/upload/headpic',
                                    data: data,
                                    onUploadProgress: progressEvent => {
                                        let complete =
                                            ((progressEvent.loaded /
                                                progressEvent.total) *
                                                100) |
                                            0;
                                        this.setState({
                                            percent: complete,
                                        });
                                    },
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                })
                                    .then(res => {
                                        this.sendComplexMessage(res, 'image');

                                        if (res.status === 200) {
                                            return 'success';
                                        } else {
                                            return 'error';
                                        }
                                    })
                                    .catch(error => {
                                        return 'error';
                                    });
                                return false;
                            }}
                        >
                            <Button hidden={true} ref={this.inputfile} />
                        </Upload>
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

    sendComplexMessage(msg, msgContentType) {
        this.props.dispatch({
            type: 'Message/sendMessageToRemote',
            payload: {
                msg: msg,
                msgType: msgContentType,
            },
        });

        let cvsId = this.props.cvs.cur_cvs.id;
        let cur_user = this.props.global.cur_user;
        let inbox = util.genInbox(cvsId, msg, cur_user.avatarUrl, 'image');
        console.log(inbox);
        this.props.dispatch({
            type: 'Message/addNewInbox',
            payload: inbox,
        });
        this.setState({
            inputValue: '',
        });
    }

    sendMessage() {
        this.props.dispatch({
            type: 'Message/sendMessageToRemote',
            payload: {
                msg: this.state.inputValue,
                msgType: 'text',
            },
        });

        let cvsId = this.props.cvs.cur_cvs.id;
        let cur_user = this.props.global.cur_user;
        let inbox = util.genInbox(
            cvsId,
            this.state.inputValue,
            cur_user.avatarUrl,
        );
        console.log(inbox);
        this.props.dispatch({
            type: 'Message/addNewInbox',
            payload: inbox,
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
