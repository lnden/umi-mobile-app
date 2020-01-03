import React, { Component } from 'react';

import PublicHeader from '@/components/PublicHeader';

class Mine extends Component {
    render() {
        return (
            <div>
                <PublicHeader headParam={{ title: '我的', isBack: false }} />
                <div>我的页面</div>
            </div>
        );
    }
}

export default Mine;
