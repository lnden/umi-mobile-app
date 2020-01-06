import React, { Component } from 'react';
import { connect } from 'dva';
import { createSelector } from 'reselect';
import { WingBlank, WhiteSpace, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

import { createAction, loadingSelector } from '@/utils';
import logo from '@/assets/logo.svg';
import styles from './index.less';

@connect(
    createSelector(loadingSelector('login/login'), loginLoading => ({
        loading: loginLoading,
    })),
)
class Login extends Component {
    handleSubmit = () => {
        const { dispatch, form } = this.props;
        const loginInfo = form.getFieldsValue();
        if (loginInfo.account && loginInfo.account.length === 13 && loginInfo.password) {
            dispatch(createAction('login/login')(loginInfo));
        } else {
            Toast.info('用户名或密码输入错误', 2, null, true);
        }
    };

    render() {
        const {
            form: { getFieldProps },
            loading,
        } = this.props;
        return (
            <WingBlank size="lg">
                <div className={styles.wrapper}>
                    <img src={logo} alt="logo" />
                </div>
                <InputItem {...getFieldProps('account')} type="phone" placeholder="请输入手机号">
                    用户名
                </InputItem>
                <InputItem {...getFieldProps('password')} type="password" placeholder="****">
                    密&emsp;码
                </InputItem>
                <WhiteSpace size="xl" />
                <Button onClick={this.handleSubmit} type="primary" loading={loading}>
                    登录
                </Button>
            </WingBlank>
        );
    }
}

export default createForm()(Login);
