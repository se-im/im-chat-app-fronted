import React, { Fragment } from 'react';
import { Avatar, Input, Form, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import styles from './style.css';

const GroupProfilePanel = props => {
    return (
        <Fragment>
            <div className={styles.group_header}>
                <div className={styles.header_search_container}>
                    <Input.Search
                        className={styles.header_search_members}
                        placeholder={'搜索群成员'}
                        onSearch={value => {
                            console.log(value);
                        }}
                        // prefix={<AudioOutlined/>}
                    />
                </div>
                <div className={styles.header_members}>
                    <div className={styles.header_add_member}>
                        <Avatar
                            className={styles.header_add_member_icon}
                            shape={'circle'}
                            icon={<span className={'iconfont'}>&#xeb9d;</span>}
                        />
                        <p>添加</p>
                    </div>
                </div>
            </div>
            <div className={styles.group_body}>
                <Form name="basic" onFinish={''}>
                    <div className={styles.group_body_item}>
                        <div className={styles.body_group_title}>
                            <strong>群名</strong>
                        </div>
                        <Form.Item name="name">
                            <Input
                                className={styles.group_body_item_input}
                                name={'name'}
                                bordered={false}
                                placeholder={'群聊名称'}
                                suffix={<FormOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.group_body_item_2}>
                        <div className={styles.body_group_title}>
                            <strong>群公告</strong>
                        </div>
                        <Form.Item name="notice">
                            <Input.TextArea
                                className={styles.group_body_item_input}
                                name={'notice'}
                                bordered={false}
                                placeholder={'群聊公告'}
                                suffix={<FormOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.group_body_item}>
                        <div className={styles.body_group_title}>
                            <strong>我在本群昵称</strong>
                        </div>
                        <Form.Item name="nickname">
                            <Input
                                className={styles.group_body_item_input}
                                name={'nickname'}
                                bordered={false}
                                placeholder={'我的群聊昵称'}
                                suffix={<FormOutlined />}
                            />
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </Fragment>
    );
};

export default GroupProfilePanel;
