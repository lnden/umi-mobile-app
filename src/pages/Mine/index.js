import React, { Component } from 'react';
import { connect } from 'dva';
import { createSelector } from 'reselect';
import { WingBlank, Button } from 'antd-mobile';

import PublicHeader from '@/components/PublicHeader';
import { createAction, loadingSelector } from '@/utils';
import styles from './index.less';

@connect(
    createSelector(loadingSelector('login/logout'), loginLoading => ({
        loading: loginLoading,
    })),
)
class Mine extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(createAction('login/logout')());
    };

    render() {
        const { loading } = this.props;
        const isLogin = true;
        return (
            <div className={styles.mineWrapper}>
                <PublicHeader title="我的" />
                <WingBlank>
                    {isLogin && (
                        <Button
                            className={styles.logout}
                            type="primary"
                            onClick={this.handleLogout}
                            loading={loading}
                        >
                            退出登录
                        </Button>
                    )}
                    <div>我的页面</div>
                </WingBlank>
            </div>
        );
    }
}

export default Mine;
