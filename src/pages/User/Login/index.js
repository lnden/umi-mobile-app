import React, { Component } from 'react';
import { connect } from 'dva';
import { createSelector } from 'reselect';
import { Flex, WingBlank, WhiteSpace, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import router from 'umi/router';

import { createAction, loadingSelector } from '@/utils';
import logo from '@/assets/logo.svg';
import styles from './index.less';

const FlexItem = Flex.Item;

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

    handleClickRegister = () => {
        router.push('/user/register');
    };

    render() {
        const {
            form: { getFieldProps },
            loading,
            form,
        } = this.props;
        const { account, password } = form.getFieldsValue();
        return (
            <WingBlank size="lg">
                <div className={styles.wrapper}>
                    <img src={logo} alt="logo" />
                </div>
                <InputItem {...getFieldProps('account')} type="phone" placeholder="请输入手机号">
                    用户名
                </InputItem>
                <InputItem {...getFieldProps('password')} type="password" placeholder="******">
                    密&emsp;码
                </InputItem>
                <WhiteSpace size="xl" />
                <Flex>
                    <FlexItem>
                        <Button type="primary" onClick={this.handleClickRegister}>
                            注册
                        </Button>
                    </FlexItem>
                    <FlexItem>
                        <Button
                            onClick={this.handleSubmit}
                            type="primary"
                            loading={loading}
                            disabled={!(account?.length === 13 && password)}
                        >
                            登录
                        </Button>
                    </FlexItem>
                </Flex>
            </WingBlank>
        );
    }
}

export default createForm()(Login);
