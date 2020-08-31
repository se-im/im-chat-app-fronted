import React from 'react';
import styles from './index.css';
import { connect } from 'umi';

export default ({ cur_inbox }) => {
    console.log(cur_inbox);
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
