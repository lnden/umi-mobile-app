import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import PropTypes from 'prop-types';

import BizIcon from '@/components/BizIcon';
import tabBarData from './map';

const TabBarItem = TabBar.Item;

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
