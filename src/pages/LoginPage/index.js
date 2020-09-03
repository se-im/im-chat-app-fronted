import React, { useState } from 'react';
import './index.css';
import img1 from '../../../assert/login/img-01.png';
import '../../../assert/iconfont/iconfont.css';
import { connect } from 'umi';
import { Link } from 'dva/router';

const index = ({ LoginModel, dispatch }) => {
    const [userModel, setUserModel] = useState({
        username: 'tom',
        password: '1',
    });
    function login(event) {
        event.preventDefault();
        dispatch({
            type: 'global/login',
            payload: userModel,
        });
    }

    function handleUsernameChange(e) {
        setUserModel({
            username: e.target.value,
            password: userModel.password,
        });
    }

    function handlePasswordChange(e) {
        setUserModel({
            username: userModel.username,
            password: e.target.value,
        });
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src={img1} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">登录</span>

                        <div className="wrap-input100 validate-input">
                            <input
                                className="input100"
                                type="text"
                                name="email"
                                value={userModel.username}
                                onChange={handleUsernameChange}
                                placeholder="邮箱"
                            />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i
                                    className="iconfont im-user"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                value={userModel.password}
                                onChange={handlePasswordChange}
                                placeholder="密码"
                            />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i
                                    className="iconfont im-password1"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button
                                className="login100-form-btn"
                                onClick={login}
                            >
                                登录
                            </button>
                        </div>

                        <div className="text-center p-t-12">
                            <span className="txt1">忘记</span>
                            <a className="txt2" href="#">
                                用户名 / 密码?
                            </a>
                        </div>

                        <div className="text-center p-t-136">
                            <Link to={'/register/index'}>
                                注册新账号
                                <i
                                    className="fa fa-long-arrow-right m-l-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = props => {
    return { LoginModel: props.LoginModel };
};

export default connect(mapStateToProps)(index);
