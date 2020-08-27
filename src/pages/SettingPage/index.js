import React, { Component } from 'react';
import ItemBody from './ItemPanel/ItemBody';
import ContentBody from './ContentPanel/ContentBody';
import styles from './index.css';

class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 'profile',
        };
    }
    render() {
        return (
            <div className={styles.setting_body}>
                <ItemBody />
                <ContentBody item={this.state.item} />
            </div>
        );
    }
}

export default SettingPage;
