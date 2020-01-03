import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';

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

    render() {
        const {
            headParam: { title, isBack },
        } = this.props;
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
                    isBack ? <Icon value="1" type="left" color="#333333" size="md" /> : renderIcon()
                }
                onLeftClick={e => this.handleClick(e)}
            >
                {title}
            </NavBar>
        );
    }
}

export default PublicHeader;
