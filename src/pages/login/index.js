import React from 'react';
import './index.css';
import img1 from '../../../assert/login/img-01.png';
import '../../../assert/iconfont/iconfont.css';
import { connect } from 'umi';


const index =  (props) => {
    function login() {

    }

    console.log(props)

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src={img1} alt="IMG"/>
                    </div>

                    <form className="login100-form validate-form">
					<span className="login100-form-title">
						登陆
					</span>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="email" placeholder="邮箱"/>
                            <span className="focus-input100"/>
                            <span className="symbol-input100">
							<i className="iconfont icon-email" aria-hidden="true"/>
						</span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="password" name="pass" placeholder="密码"/>
                            <span className="focus-input100"/>
                            <span className="symbol-input100">
							<i className="iconfont icon-password" aria-hidden="true"/>
						</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={login}>
                                登陆
                            </button>
                        </div>

                        <div className="text-center p-t-12">
						<span className="txt1">
							忘记
						</span>
                            <a className="txt2" href="#">
                                用户名 / 密码?
                            </a>
                        </div>

                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                注册新账号
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}




const mapStateToProps = state => {
    const {login} = state;
    return {props: login};
};

export default connect(mapStateToProps)(index);
