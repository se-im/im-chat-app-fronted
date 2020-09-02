import React from 'react';
import styles from './index.css';
import { connect } from 'react-redux';
import { List, Avatar, message } from 'antd';
const index = ({ cvs: cvs, dispatch }) => {
    function clickCvs(item, index) {
        dispatch({
            type: 'cvs/setCurCvs',
            payload: item,
        });
        dispatch({
            type: 'cvs/setUnReadMsgNum',
            payload: item,
        });
        dispatch({
            type: 'inbox/getInboxList',
            payload: item,
        });
    }

    function genStyle(item) {
        if (cvs.cur_cvs.id === item.id) {
            return styles.cur_cvs;
        } else {
            return '';
        }
    }

    function genUnreadMessageNumDiv(unreadMessageNum) {
        if (unreadMessageNum > 0) {
            return <p className={styles.unreadMsgNum}>{unreadMessageNum}</p>;
        } else {
            return <p className={styles.emptyBlock} />;
        }
    }

    function genUserStatusStyle(isOnline) {
        if (isOnline) {
            return styles.userStatusOnline;
        } else {
            return styles.userStatusOffline;
        }
    }

    return (
        <div className={styles.body}>
            <List
                className={styles.cvs_body}
                itemLayout="horizontal"
                dataSource={cvs.data}
                split={false}
                renderItem={(item, index) => (
                    <List.Item
                        className={styles.item + ' ' + genStyle(item)}
                        id={index}
                        onClick={clickCvs.bind(this, item, index)}
                    >
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
                            <span
                                className={
                                    styles.userStatus +
                                    ' ' +
                                    genUserStatusStyle(item.online)
                                }
                            />
                            <i className={styles.lastMsgTime}>
                                {item.lastMessageTimeFormated}
                            </i>
                            <br />
                            {genUnreadMessageNumDiv(item.unreadMessageNum)}
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};
const mapStateToProps = ({ cvs }) => {
    return {
        cvs: cvs,
    };
};
export default connect(mapStateToProps)(index);
