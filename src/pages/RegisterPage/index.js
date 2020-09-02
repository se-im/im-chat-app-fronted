import React from 'react';
import './index.css';
import img1 from '../../../assert/login/img-01.png';
import '../../../assert/iconfont/iconfont.css';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './index.css';
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login1001">
                    <div className="login100-pic js-tilt">
                        <img src={img1} alt="IMG" className="login-img" />
                    </div>

                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                        <span className="login100-form-title">注册</span>

                        <Form.Item
                            label="用户名"
                            name="username"
                            style={{ fontSize: 25 }}
                        >
                            <Input id={1} className="form-item" />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            style={{ fontSize: 25 }}
                        >
                            <Input
                                id={2}
                                type={'password'}
                                className="form-item"
                            />
                        </Form.Item>

                        <Form.Item
                            label="确认密码"
                            name="password_confirm"
                            style={{ fontSize: 25 }}
                        >
                            <Input
                                type={'password'}
                                id={3}
                                className="form-item"
                            />
                        </Form.Item>

                        <Form.Item
                            label="邮箱"
                            name="email"
                            style={{ fontSize: 25 }}
                        >
                            <Input className="form-item" id={4} />
                        </Form.Item>

                        <Form.Item
                            label="电话"
                            name="tel"
                            style={{ fontSize: 25 }}
                        >
                            <Input className="form-item" id={5} />
                        </Form.Item>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">注册</button>
                        </div>

                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                已有账号？登陆
                                <i
                                    className="fa fa-long-arrow-right m-l-5"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </Form>

                    {/*<form className="login100-form validate-form">
					<span className="login100-form-title">
						注册
					</span>

                      <div className="wrap-input100 validate-input" >
                          <input className="input100" type="text" name="email" placeholder="邮箱" />
                          <span className="focus-input100"/>
                          <span className="symbol-input100">
							<i className="iconfont icon-email" aria-hidden="true"/>
						</span>
                      </div>

                      <div className="wrap-input100 validate-input" >
                          <input className="input100" type="password" name="pass" placeholder="密码" />
                          <span className="focus-input100"/>
                          <span className="symbol-input100">
							<i className="iconfont icon-password" aria-hidden="true"/>
						</span>
                      </div>

                      <div className="container-login100-form-btn">
                          <button className="login100-form-btn">
                              登陆
                          </button>
                      </div>



                      <div className="text-center p-t-136">
                          <a className="txt2" href="#">
                              已有账号？登陆
                              <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"/>
                          </a>
                      </div>
                  </form>*/}
                </div>
            </div>
        </div>
    );
};
