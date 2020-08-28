import React, { Fragment } from 'react';
import { Avatar, Button } from 'antd';
import { connect } from 'react-redux';
import { FormOutlined } from '@ant-design/icons';
import styles from './style.css';

const ProfileHeader = props => {
    const { userProfileModel } = props;
    return (
        <Fragment>
            <div className={styles.profile_header}>
                <Avatar
                    className={styles.header_user_photo}
                    shape="circle"
                    icon={<img src={userProfileModel.cur_user.avatarUrl} />}
                />
                <h3 className={styles.header_user_name}>
                    {userProfileModel.cur_user.username}
                </h3>
                <Button className={styles.header_user_edit}>
                    <FormOutlined /> modify remark
                </Button>
            </div>

            <div className={styles.profile_body}>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>Mobile</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        18391551595
                        <span className={'iconfont'}>&#xeb9d;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>Email</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        18391551595
                        <span className={'iconfont'}>&#xeb9d;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>Birthday</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        18391551595
                        <span className={'iconfont'}>&#xeb9d;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>Gender</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        18391551595
                        <span className={'iconfont'}>&#xeb9d;</span>
                    </div>
                </div>
            </div>

            <div className={styles.body_footer}>
                <div className={styles.footer_item_title}>
                    <div className={styles.body_item_title}>
                        <strong>Description</strong>
                    </div>
                    <span className={'iconfont'}>&#xeb9d;</span>
                </div>

                <p placeholder={'nothing~~~'} />
            </div>
        </Fragment>
    );
};
const mapStateToProps = ({ userProfileModel }) => ({
    userProfileModel,
});

export default connect(mapStateToProps)(ProfileHeader);
