import React, { Component, Fragment } from 'react';
import ProfileEdit from './profile/ProfileEdit';
import AccountManage from './account/AccountManage';
import UserAgreement from './agreement/UserAgreement';
import AboutMe from './about/AboutMe';
import styles from './style.css';

class ContentBody extends Component {
    showProfile = () => {
        if (this.props.item2 === 'profile') {
            return (
                <Fragment>
                    <ProfileEdit />
                </Fragment>
            );
        } else if (this.props.item2 === 'account') {
            return (
                <Fragment>
                    <AccountManage />
                </Fragment>
            );
        } else if (this.props.item2 === 'agreement') {
            return (
                <Fragment>
                    <UserAgreement />
                </Fragment>
            );
        } else if (this.props.item2 === 'about') {
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
