import React from 'react';
import { connect } from 'umi';
import { Avatar, Button, message } from 'antd';
import styles from './GroupInfo.css';

const GroupInfo = props => {
    // 格式化日期
    function formatDate(date) {
        let new_date = null;
        if (date) {
            new_date = new Date(date);
        } else {
            new_date = new Date();
        }
        let year = new_date.getFullYear();
        let month = new_date.getMonth() + 1;
        let day = new_date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return year + '-' + month + '-' + day;
    }

    const { groupInfo } = props;
    return (
        <div className={styles.groupInfo_panel}>
            <div className={styles.groupInfo_header}>
                <div className={styles.header_content}>
                    <Avatar
                        className={styles.header_avatar}
                        shape={'circle'}
                        src={groupInfo.cur_groupInfo.avatarUrl}
                    />
                    <p>{groupInfo.cur_groupInfo.name}</p>
                </div>
            </div>
            <div className={styles.groupInfo_body}>
                <div className={styles.body_content}>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>群聊名称</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {groupInfo.cur_groupInfo.name}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>群聊ID</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {groupInfo.cur_groupInfo.id}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>群主ID</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {groupInfo.cur_groupInfo.createUserId}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>建群日期</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {formatDate(groupInfo.cur_groupInfo.createTime)}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>群聊人数</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {groupInfo.cur_groupInfo.memberNum}
                        </div>
                    </div>
                    <div className={styles.body_content_item_last}>
                        <div className={styles.body_content_item_desc}>
                            <strong>群聊简介</strong>
                        </div>
                        <div className={styles.body_content_item_desc_content}>
                            {groupInfo.cur_groupInfo.description}
                        </div>
                    </div>
                </div>
                <div className={styles.body_content_button}>
                    <Button
                        type="primary"
                        block
                        onClick={proposeCvs.bind(
                            this,
                            groupInfo.cur_groupInfo.id,
                        )}
                    >
                        发起群聊
                    </Button>
                </div>
            </div>
        </div>
    );
    function proposeCvs(groupId) {
        const cvsList = props.cvs.data;
        let isExist = false;
        for (let i of cvsList) {
            if (groupId === i.relationEntityId && i.cvsType === 'G') {
                isExist = true;
            }
        }
        if (!isExist) {
            props.dispatch({
                type: 'cvs/proposeCvs',
                payload: { entityId: groupId, cvsType: 'G' },
            });
        } else {
            message.success('群聊已存在');
            props.dispatch({
                type: 'cvs/routerToCvs',
                payload: { entityId: groupId, cvsType: 'U' },
            });
        }
    }
};

const mapStateToProps = ({ groupInfo, cvs }) => {
    return {
        groupInfo,
        cvs,
    };
};

export default connect(mapStateToProps)(GroupInfo);
