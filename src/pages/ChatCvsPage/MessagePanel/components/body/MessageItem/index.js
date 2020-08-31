import React from 'react';
import styles from './index.css';
import { connect } from 'umi';

const index = ({ message }) => {
    console.log(message);
    return (
        <div>
            <h1 className={styles.title}>
                Page ChatCvsPage\MessagePanel\components\body\MessageItem\index
            </h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cur_inbox: state.inbox.cur_inbox,
    };
};

export default connect(mapStateToProps)(index);
