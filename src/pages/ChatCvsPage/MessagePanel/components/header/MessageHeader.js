import React from 'react';
import {
    UserAddOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import styles from './style.css';
import { connect } from 'react-redux';

const MessageHeader = props => {
    const { cur_cvs } = props.cvs;

    function userStateCircle() {
        if (cur_cvs.online === true && cur_cvs.cvsType === 'U') {
            return (
                <p>
                    在线 &nbsp; &nbsp;
                    <span className={styles.header_userinfo_state_on} />
                </p>
            );
        } else if (cur_cvs.cvsType === 'U') {
            return (
                <p>
                    离线 &nbsp; &nbsp;
                    <span className={styles.header_userinfo_state_off} />
                </p>
            );
        }
    }

    function showProfilePanel() {
        props.dispatch({
            type: 'chatPanel/changeProfilePannelStatus',
        });
    }

    return (
        <div className={styles.msg_header}>
            <div className={styles.header_left}>
                <img src={cur_cvs.avatarUrl} />
                <div className={styles.header_userinfo}>
                    <div>{cur_cvs.cvsName}</div>
                    {userStateCircle()}
                </div>
            </div>
            <div className={styles.header_right}>
                <UserAddOutlined className={styles.header_icons} />
                <PhoneOutlined className={styles.header_icons} />
                <VideoCameraOutlined className={styles.header_icons} />
                <InfoCircleOutlined
                    className={styles.header_icons}
                    onClick={showProfilePanel}
                />
            </div>
        </div>
    );
};
const mapStateToProps = ({ cvs, global }) => ({
    cvs,
    global,
});

export default connect(mapStateToProps)(MessageHeader);
