import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import PropTypes from 'prop-types';

import BizIcon from '@/components/BizIcon';
import styles from './index.less';

class PublicHeader extends PureComponent {
    handleClick = e => {
        const types = e.target.nodeName;
        if (types === 'I') {
            // console.log('搜索页面');
        } else if (types === 'svg' || types === 'use') {
            // console.log('返回上一页');
            router.goBack();
        }
    };

    handleClickRight = e => {
        const innerHtml = e.target.innerHTML;
        switch (innerHtml) {
            case '设置':
                router.push('/mine/seeting');
                break;
            default:
                break;
        }
    };

    render() {
        const { title, isBack, rightName } = this.props;
        const region = undefined; // 全国
        const renderIcon = () => {
            return region ? (
                <BizIcon
                    className={styles.icons}
                    value="2"
                    type="address"
                    text={region}
                    styles={{ fontSize: '0.36rem' }}
                />
            ) : null;
        };

        return (
            <NavBar
                mode="light"
                icon={
                    isBack ? (
                        <Icon value="1" type="left" className={styles.icons} size="lg" />
                    ) : (
                        renderIcon()
                    )
                }
                onLeftClick={e => this.handleClick(e)}
                rightContent={[
                    <span key="0" onClick={this.handleClickRight}>
                        {rightName}
                    </span>,
                ]}
            >
                {title}
            </NavBar>
        );
    }
}

PublicHeader.defaultProps = {
    title: 'umi-mobile-app',
    isBack: false,
    rightName: '',
};
PublicHeader.propTypes = {
    title: PropTypes.string,
    isBack: PropTypes.bool,
    rightName: PropTypes.string,
};
export default PublicHeader;
