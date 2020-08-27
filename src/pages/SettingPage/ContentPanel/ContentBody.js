import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import ProfileEdit from './profile/ProfileEdit';
import AccountManage from './account/AccountManage';
import UserAgreement from './agreement/UserAgreement';
import AboutMe from './about/AboutMe';
import styles from './style.css';

class ContentBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 'profile',
        };
    }
    showProfile = () => {
        if (this.state.item === 'profile') {
            return (
                <Fragment>
                    <ProfileEdit />
                </Fragment>
            );
        } else if (this.state.item === 'account') {
            return (
                <Fragment>
                    <AccountManage />
                </Fragment>
            );
        } else if (this.state.item === 'agreement') {
            return (
                <Fragment>
                    <UserAgreement />
                </Fragment>
            );
        } else if (this.state.item === 'about') {
            return (
                <Fragment>
                    <AboutMe />
                </Fragment>
            );
        }
    };
    render() {
        return (
            <div className={styles.content_body}>
                <div className={styles.body_container}>
                    {this.showProfile()}
                    <div className={styles.body_isOk}>
                        <button className={styles.body_btn1}>完成</button>
                        {/*<button className={styles.body_btn2}>返回</button>*/}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.setState({
            item: this.props.item,
        });
    }
}
export default ContentBody;
