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
            type: 'newFriend/setNewFriendNotChosen',
        });
        props.dispatch({
            type: 'friendInfo/getFriendInfo',
            payload: item.friendId,
        });
    }
    function friendChosenStyle(item) {
        if (
            props.haveFriendChosen &&
            props.cur_friend.friendId === item.friendId
        ) {
            return styles.itemClick;
        } else {
            return ' ';
        }
    }

    function clickNewFriend() {
        props.dispatch({
            type: 'newFriend/setNewFriendChosen',
        });
        props.dispatch({
            type: 'friend/setFriendNotChosen',
        });
    }
    function newFriendChosenStyle() {
        if (props.haveNewFriendChosen) return styles.itemClick;
        else return ' ';
    }
    return (
        <div className={styles.body}>
            <div
                className={styles.newFriend + ' ' + newFriendChosenStyle()}
                onClick={clickNewFriend}
            >
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
                        className={styles.item + ' ' + friendChosenStyle(item)}
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
                                <p className={styles.userName}>{item.note}</p>
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
        haveNewFriendChosen: state.newFriend.haveNewFriendChosen,
        haveFriendChosen: state.friend.haveFriendChosen,
    };
};
export default connect(mapStateToProps)(FriendList);
