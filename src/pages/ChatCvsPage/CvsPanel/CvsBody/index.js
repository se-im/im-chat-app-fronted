import React from 'react';
import styles from './index.css';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';
const cvsbody = ({ Conversations }) => {
    return (
        <div className={styles.body}>
            <List
                className={styles.cvs_body}
                itemLayout="horizontal"
                dataSource={Conversations.data}
                split={false}
                renderItem={(item, index) => (
                    <List.Item className={styles.item} id={index}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    className={styles.avatar}
                                    src={item.avatarUrl}
                                />
                            }
                            title={
                                <p className={styles.userName}>
                                    {item.cvsName}
                                </p>
                            }
                            description={
                                <p className={styles.description}>
                                    {item.lastMessage}
                                </p>
                            }
                        />
                        <div>
                            <span className={styles.userStatus} />
                            <i className={styles.lastMsgTime}>
                                {item.lastMessageTime}
                            </i>
                            <br />
                            <p className={styles.unreadMsgNum}>
                                {item.unreadMessageNum}
                            </p>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};
const mapStateToProps = ({ Conversations }) => {
    return {
        Conversations,
    };
};
export default connect(mapStateToProps)(cvsbody);
