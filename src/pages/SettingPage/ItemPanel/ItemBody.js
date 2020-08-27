import React, { Component } from 'react';
import styles from './style.css';

class ItemBody extends Component {
    render() {
        return (
            <div className={styles.item_body}>
                <div className={styles.body_item_container}>
                    <div className={styles.body_item}>
                        <span className={'iconfont '}>&#xe635;</span>
                        <strong>个人信息</strong>
                    </div>
                    <div className={styles.body_item}>
                        <span className={'iconfont'}>&#xeb9d;</span>
                        <strong>账号管理</strong>
                    </div>
                    <div className={styles.body_item}>
                        <span className={'iconfont'}>&#xe657;</span>
                        <strong>用户协议</strong>
                    </div>
                    <div className={styles.body_item}>
                        <span className={'iconfont'}>&#xe649;</span>
                        <strong>关于我们</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemBody;
