import React from 'react';
import styles from './style.css';
import { List, Avatar, Button } from 'antd';
import { connect } from '../../../../../.umi/plugin-dva/exports';

const friendRequestBody = props => {
    return (
        <div className={styles.friendRequest_body}>
            <div className={styles.body_content}>
                <List
                    itemLayout="horizontal"
                    dataSource={props.newFriendList}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        className={styles.avatar}
                                        src={item.senderAvatarUrl}
                                    />
                                }
                                title={
                                    <a href="" className={styles.title}>
                                        {item.senderUsername}
                                    </a>
                                }
                                description={item.note}
                            />
                            <div>
                                <Button
                                    type="primary"
                                    size="middle"
                                    className={styles.item_button}
                                    onClick={handleFriendRequest.bind(
                                        this,
                                        item,
                                        index,
                                    )}
                                >
                                    同意
                                </Button>
                                {haveAdded(props.haveAdded)}
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
    function handleFriendRequest(item) {
        props.dispatch({
            type: 'handleFriendRequest/handleFriendRequest',
            payload: {
                requestId: item.requestId,
                status: item.status,
            },
        });
    }
    function haveAdded(haveAdded) {
        if (haveAdded) {
            return <p>好友添加成功！</p>;
        } else {
            return '';
        }
    }
};

const mapStateToProps = state => {
    // console.log(state.newFriend.newFriendList);
    console.log(state.handleFriendRequest.haveAdded);
    return {
        newFriendList: state.newFriend.newFriendList,
        haveAdded: state.handleFriendRequest.haveAdded,
    };
};
export default connect(mapStateToProps)(friendRequestBody);
