import React, { Component } from 'react';
import {
    UserAddOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import styles from './style.css';
import { connect } from 'react-redux';
import cvs from '../../../../../models/cvs/cvs';

const index = props => {
    const { cur_cvs } = props.cvs;

    function userStateCircle() {
        if (cur_cvs.isOnline === true) {
            return <span className={styles.header_userinfo_state_on} />;
        } else {
            return <span className={styles.header_userinfo_state_off} />;
        }
    }
    function iconFocus(icon) {
        icon.style.color = '#8053b6';
        icon.style.fontSize = '25px';
    }
    function iconBlur(icon) {
        icon.style.color = '#969896';
        icon.style.fontSize = '22px';
    }

    return <div></div>;

    return (
        <div className={styles.msg_header}>
            <div className={styles.header_left}>
                <img src={cur_cvs.avatarUrl} />
                <div className={styles.header_userinfo}>
                    <div>{cur_cvs.cvsName}</div>
                    <p>
                        {cur_cvs.isOnline} &nbsp;
                        {userStateCircle()}
                    </p>
                </div>
            </div>
            <div className={styles.header_right}>
                <div
                    onMouseEnter={() => iconFocus(changeStyleIconUserAdd)}
                    onMouseLeave={() => iconBlur(changeStyleIconUserAdd)}
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
};
const mapStateToProps = ({ cvs, global }) => ({
    cvs,
    global,
});

export default connect(mapStateToProps)(index);
