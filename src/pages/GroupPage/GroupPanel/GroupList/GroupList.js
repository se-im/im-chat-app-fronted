import React from 'react';
import styles from './GroupList.css';
import { Avatar, List } from 'antd';
import { connect } from '../../../../.umi/plugin-dva/exports';

const index = props => {
    function groupClick(item) {
        console.log(item);
        props.dispatch({
            type: 'groupInfo/getGroupInfo',
            payload: item.groupId,
        });
    }
    function groupChosenStyle(item) {
        if (props.cur_groupInfo.id === item.groupId && props.haveGroupChosen) {
            return styles.itemClick;
        } else {
            return ' ';
        }
    }
    return (
        <div>
            <List
                className={styles.groupList}
                itemLayout="horizontal"
                dataSource={props.groupList}
                split={false}
                renderItem={item => (
                    <List.Item
                        className={styles.item + ' ' + groupChosenStyle(item)}
                        onClick={groupClick.bind(this, item)}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    className={styles.avatar}
                                    src={item.groupAvatarUrl}
                                />
                            }
                            title={
                                <p className={styles.userName}>
                                    {item.groupName}
                                </p>
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
        groupList: state.group.groupList,
        cur_groupInfo: state.groupInfo.cur_groupInfo,
        haveGroupChosen: state.groupInfo.haveGroupChosen,
    };
};

export default connect(mapStateToProps)(index);
