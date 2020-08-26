import React from 'react';
import styles from './index.css';
import { Avatar, List } from 'antd';
import { connect } from 'react-redux';

const index = ({ Friends }) => {
    return (
        <div>
            <List
                className={styles.friendList}
                itemLayout="horizontal"
                dataSource={Friends.data}
                split={false}
                renderItem={item => (
                    <List.Item className={styles.item}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    className={styles.avatar}
                                    src={item.avatarUrl}
                                />
                            }
                            title={
                                <a href="" className={styles.userName}>
                                    {item.userName}
                                </a>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
const mapStateToProps = ({ Friends }) => {
    return {
        Friends,
    };
};
export default connect(mapStateToProps)(index);
