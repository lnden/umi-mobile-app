import React, { Component } from 'react';

import PublicHeader from '@/components/PublicHeader';

class Discover extends Component {
    render() {
        return (
            <div>
                <PublicHeader headParam={{ title: '我的', isBack: false }} />
                <div>发现页面</div>
            </div>
        );
    }
}

export default Discover;
