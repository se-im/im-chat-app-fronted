import React, { Component } from 'react';
import styles from './style.css';

class AboutMe extends Component {
    render() {
        return (
            <div className={styles.body_about_manage}>
                <div>关于我们</div>
                <div className={styles.body_about_manage_container}></div>
            </div>
        );
    }
}
export default AboutMe;
