import React from 'react';
import styles from './GroupList.css';
import { Avatar, List } from 'antd';
import { connect } from '../../../../.umi/plugin-dva/exports';

const index = props => {
    return (
        <div>
            <List
                className={styles.groupList}
                itemLayout="horizontal"
                dataSource={props.groupList}
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
                                    {item.groupName}
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
        groupList: state.group.groupList,
    };
};

export default connect(mapStateToProps)(index);
