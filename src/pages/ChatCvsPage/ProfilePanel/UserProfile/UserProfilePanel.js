import React, { Fragment } from 'react';
import { Avatar, Button, Form } from 'antd';
import { connect } from 'react-redux';
import { FormOutlined } from '@ant-design/icons';
import styles from './style.css';

const ProfileHeader = props => {
    const { chatPanel } = props;
    // 格式化日期
    const formatDate = date => {
        let new_date = null;
        if (date) {
            new_date = new Date(date);
        } else {
            new_date = new Date();
        }
        let year = new_date.getFullYear();
        let month = new_date.getMonth() + 1;
        let day = new_date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return year + '-' + month + '-' + day;
    };
    const onFinish = values => {
        props.dispatch({
            type: 'chatPanel/updateUserNote',
            payload: values,
        });
    };
    console.log(chatPanel.profileForUser);
    return (
        <Fragment>
            <div className={styles.profile_header}>
                <Avatar
                    className={styles.header_user_photo}
                    shape="circle"
                    icon={<img src={chatPanel.profileForUser.avatarUrl} />}
                />
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                        ...chatPanel.profileForUser,
                    }}
                    onFinish={onFinish}
                    className={styles.header_user_note_container}
                >
                    <Form.Item name="note">
                        <input
                            className={styles.header_user_note}
                            name={'note'}
                            placeholder={'备注'}
                        />
                    </Form.Item>
                    <Button
                        className={styles.header_note_edit}
                        htmlType={'submit'}
                    >
                        <FormOutlined /> modify remark
                    </Button>
                </Form>
            </div>

            <div className={styles.profile_body}>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>昵称</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        {chatPanel.profileForUser.username}
                        <span className={'iconfont'}>&#xe63e;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>电话</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        +86&nbsp;{chatPanel.profileForUser.phone}
                        <span className={'iconfont'}>&#xe653;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>邮箱</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        {chatPanel.profileForUser.email}
                        <span className={'iconfont'}>&#xe617;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>生日</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        {formatDate(chatPanel.profileForUser.birthday)}
                        <span className={'iconfont'}>&#xe72a;</span>
                    </div>
                </div>
                <div className={styles.body_item}>
                    <div className={styles.body_item_title}>
                        <strong>性别</strong>
                    </div>
                    <div className={styles.body_item_content}>
                        {chatPanel.profileForUser.gender}
                        <span className={'iconfont'}>&#xe61f;</span>
                    </div>
                </div>
            </div>

            <div className={styles.body_footer}>
                <div className={styles.footer_item_title}>
                    <strong>Description</strong>
                </div>
                <div className={styles.footer_item_content}>
                    <p>
                        {chatPanel.profileForUser.description
                            ? chatPanel.profileForUser.description
                            : 'There is nothing...'}
                    </p>
                </div>
            </div>
        </Fragment>
    );
};
const mapStateToProps = ({ chatPanel }) => ({
    chatPanel,
});

export default connect(mapStateToProps)(ProfileHeader);
