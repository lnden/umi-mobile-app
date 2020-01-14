import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import PropTypes from 'prop-types';

import BizIcon from '@/components/BizIcon';

const TabBarItem = TabBar.Item;
const tabBarData = [
    {
        title: '首页',
        icon: 'home',
        selectedIcon: 'home',
        link: '/',
    },
    {
        title: '发现',
        icon: 'discover',
        selectedIcon: 'discover',
        link: '/discover',
        badge: 'new',
    },
    {
        title: '消息',
        icon: 'message',
        selectedIcon: 'message',
        link: '/message',
        badge: '6',
    },
    {
        title: '我的',
        icon: 'mine',
        selectedIcon: 'mine',
        link: '/mine',
        dot: true,
    },
];

class MenuBar extends PureComponent {
    render() {
        const { pathname, children } = this.props;
        return (
            <TabBar>
                {tabBarData.map(({ title, icon, selectedIcon, link, badge, dot }) => (
                    <TabBarItem
                        key={link}
                        title={title}
                        icon={<BizIcon type={icon} styles={{ fontSize: '0.36rem' }} />}
                        selectedIcon={
                            <BizIcon type={selectedIcon} styles={{ fontSize: '0.36rem' }} />
                        }
                        dot={dot}
                        badge={badge}
                        selected={pathname === link}
                        onPress={() => {
                            return Router.push(`${link}`);
                        }}
                    >
                        {children.props.location.pathname === link && children}
                    </TabBarItem>
                ))}
            </TabBar>
        );
    }
}

MenuBar.defaultProps = {
    children: null,
    pathname: '/',
};
MenuBar.propTypes = {
    children: PropTypes.node,
    pathname: PropTypes.string,
};
export default MenuBar;
