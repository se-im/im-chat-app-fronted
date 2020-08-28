import React from 'react';
import styles from './style.css';
import { List, Avatar, Button } from 'antd';
import { connect } from '../../../../../.umi/plugin-dva/exports';

const friendRequestBody = () => {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    return (
        <div className={styles.friendRequest_body}>
            <div className={styles.body_content}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        className={styles.avatar}
                                        src="https://avatars0.githubusercontent.com/u/7636918?s=400&u=1c72c9f0a3ba63aab7cdae9d33459113b7f364fa&v=4"
                                    />
                                }
                                title={
                                    <a href="" className={styles.title}>
                                        {item.title}
                                    </a>
                                }
                                description=""
                            />
                            <div>
                                <Button
                                    type="primary"
                                    size="middle"
                                    className={styles.item_button}
                                >
                                    同意
                                </Button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    const newFriend = state.newFriend;
    // console.log(newFriend.haveFetched);
    // console.log(newFriend.newFriendListLength);
    return {
        // newFriendList:newFriend.newFriendList
    };
};
export default connect(mapStateToProps)(friendRequestBody);
