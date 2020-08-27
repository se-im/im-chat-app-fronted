import React, { Component } from 'react';
import ItemBody from './ItemPanel/ItemBody';
import ContentBody from './ContentPanel/ContentBody';
import styles from './index.css';

class SettingPage extends Component {
    render() {
        return (
            <div className={styles.setting_body}>
                <ItemBody />
                <ContentBody />
            </div>
        );
    }
}

export default SettingPage;
