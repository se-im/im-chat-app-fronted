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
                                    onClick={agreeFriendRequest.bind(
                                        this,
                                        item,
                                        index,
                                    )}
                                >
                                    同意
                                </Button>
                                <Button
                                    type="default"
                                    size="middle"
                                    className={
                                        styles.item_button +
                                        ' ' +
                                        styles.item_refuseBtn
                                    }
                                    onClick={refuseFriendRequest.bind(
                                        this,
                                        item,
                                    )}
                                >
                                    拒绝
                                </Button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
    function agreeFriendRequest(item) {
        props.dispatch({
            type: 'handleFriendRequest/agreeFriendRequest',
            payload: {
                requestId: item.requestId,
                status: 2,
            },
        });
    }
    function refuseFriendRequest(item) {
        props.dispatch({
            type: 'handleFriendRequest/refuseFriendRequest',
            payload: {
                requestId: item.requestId,
                status: 1,
            },
        });
    }
};

const mapStateToProps = state => {
    return {
        newFriendList: state.newFriend.newFriendList,
        responseMsg: state.handleFriendRequest.responseMsg,
    };
};
export default connect(mapStateToProps)(friendRequestBody);
