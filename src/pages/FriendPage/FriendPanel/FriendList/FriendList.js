import React from 'react';
import styles from './index.css';
import { Avatar, List } from 'antd';
import { connect } from 'react-redux';
import { UserAddOutlined } from '@ant-design/icons';

const FriendList = props => {
    function unReadFriendRequest(length) {
        if (length > 0) {
            return <div className={styles.unKnownUser}>{length}</div>;
        }
    }
    function clickFriend(item, index) {
        props.dispatch({
            type: 'friend/setCurFriend',
            payload: item,
        });
        props.dispatch({
            type: 'friendInfo/getFriendInfo',
            payload: item.friendId,
        });
    }
    function chosenStyle(item) {
        if (
            props.cur_friend.friendId === item.friendId &&
            props.haveNewFriendChosen
        ) {
            return styles.itemClick;
        } else {
            return ' ';
        }
    }
    return (
        <div className={styles.body}>
            <div className={styles.newFriend}>
                <div className={styles.iconFriend}>
                    <UserAddOutlined />
                </div>
                <p>新的朋友</p>
                {unReadFriendRequest(props.newFriendListLength)}
            </div>
            <List
                className={styles.friendList}
                itemLayout="horizontal"
                dataSource={props.friend}
                split={false}
                renderItem={(item, index) => (
                    <List.Item
                        className={styles.item + ' ' + chosenStyle(item)}
                        id={index}
                        onClick={clickFriend.bind(this, item, index)}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    className={styles.avatar}
                                    src={item.avatarUrl}
                                />
                            }
                            title={
                                <a href="" className={styles.userName}>
                                    {item.note}
                                </a>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        friend: state.friend.friendList,
        newFriendListLength: state.newFriend.newFriendListLength,
        cur_friend: state.friend.cur_friend,
        haveNewFriendChosen: state.friend.haveNewFriendChosen,
    };
};
export default connect(mapStateToProps)(FriendList);
