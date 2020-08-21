import React from 'react';
import styles from './index.css';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';
const cvsbody = ({ Conversations }) => {
    return (
        <List
            className={styles.cvs_body}
            itemLayout="horizontal"
            dataSource={Conversations.data}
            split={false}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                className={styles.avatar}
                                src={item.avatarUrl}
                            />
                        }
                        title={<a href="">{item.cvsName}</a>}
                        description={
                            <p className={styles.description}>
                                {item.lastMessage}
                            </p>
                        }
                    />
                    <div>
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
    );
};
const mapStateToProps = ({ Conversations }) => {
    return {
        Conversations,
    };
};
export default connect(mapStateToProps)(cvsbody);
