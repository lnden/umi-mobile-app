import React, { PureComponent } from 'react';

import MenuBar from '@/components/MenuBar';

// 底部有bar菜单
const BarRoutes = ['/', '/discover', '/message', '/mine'];

class BasicLayout extends PureComponent {
    render() {
        const { children, location } = this.props;
        if (BarRoutes.indexOf(location.pathname) < 0) {
            return <>{children}</>;
        }
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <MenuBar pathname={location.pathname}>{children}</MenuBar>
            </div>
        );
    }
}

export default BasicLayout;
