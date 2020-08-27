import React, { Component } from 'react';
import ItemBody from './ItemPanel/ItemBody';
import ContentBody from './ContentPanel/ContentBody';
import styles from './index.css';

class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item1: 'profile',
        };
    }
    setItemType = item => {
        this.setState({
            item1: item,
        });
    };
    render() {
        return (
            <div className={styles.setting_body}>
                <ItemBody item1={this.setItemType} />
                <ContentBody item2={this.state.item1} />
            </div>
        );
    }
}

export default SettingPage;
