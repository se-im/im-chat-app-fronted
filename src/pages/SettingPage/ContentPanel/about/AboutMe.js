import React, { Component } from 'react';
import styles from './style.css';

class AboutMe extends Component {
    render() {
        return (
            <div className={styles.body_about_manage}>
                <div>关于我们</div>
                <div className={styles.body_about_manage_container}>
                    <div className={styles.body_about_manage_title}>
                        <h2>关于微Q</h2>
                    </div>
                    <p className={styles.body_about_manage_content}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微Q--即时通信网页版聊天软件基于JavaEE平台开发,使用MySq作为数据库环境，可在Windows、Linux及Mac操作系统平台运行。包括登录注册、好友管理（增删改查）、即时通信能力（发，收）基本功能；群聊、会话管理、消息的持久化、消息漫游能力和图片、视频收发能力等核心功能。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安全、完整的系统策划和设计。我们在产品研发方面的高投入，众多项目的实际应用，让我们具备了相应的的创造力和丰富的经验，这将成为您解决疑问和难题的良好保证。可为您提供多方面完善的策划：如项目的规划立项、总体方案设计、方案评估论证。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先进、专业的技术支持。流人才的深层磨合，对最新技术执拗的探讨精神，使我们能够保证为你提供最专业的应用，最专业的服务。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完善、快速的售后服务。以最快的速度、最有效的方法、最先进的技术保障系统的效果发挥到极至，解除您的后顾之忧。
                    </p>
                </div>
            </div>
        );
    }
}
export default AboutMe;
