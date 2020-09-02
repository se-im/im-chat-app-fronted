import React, { Component } from 'react';
import styles from './style.css';

class UserAgreement extends Component {
    render() {
        return (
            <div className={styles.body_agreement_manage}>
                <div>用户协议</div>
                <div className={styles.body_agreement_manage_container}>
                    <div className={styles.body_agreement_manage_title}>
                        <h2>微Q用户协议</h2>
                    </div>
                    <p className={styles.body_agreement_manage_content}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为使用微Q软件（以下简称“本软件”）及服务，你应当阅读并遵守《微Q软件许可及服务协议》（以下简称“本协议”），以及《微Q服务协议》和《VQ号码规则》。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示你注意。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除非你已阅读并接受本协议所有条款，否则你无权下载、安装或使用本软件及相关服务。你的下载、安装、使用、获取微信帐号、登录等行为即视为你已阅读并同意上述协议的约束。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你未满18周岁，请在法定监护人的陪同下阅读本协议及其他上述协议，并特别注意未成年人使用条款。为使用腾讯微信bai软件（以下简du称“本软件”）及服务，你应zhi当阅读并遵守《腾讯微dao信软件许可及服务协议》（以下简称“本协议”），以及《腾讯服务协议》和《QQ号码规则》。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示你注意。
                        除非你已阅读并接受本协议所有条款，否则你无权下载、安装或使用本软件及相关服务。你的下载、安装、使用、获取微信帐号、登录等行为即视为你已阅读并同意上述协议的约束。
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>
                            特别说明，使用该软件，默认您已经同意《VQ用户协议》
                        </strong>
                    </p>
                </div>
            </div>
        );
    }
}
export default UserAgreement;
