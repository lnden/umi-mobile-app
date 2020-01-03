import React, { Component } from 'react';

import PublicHeader from '@/components/PublicHeader';

class Message extends Component {
    render() {
        return (
            <div>
                <PublicHeader headParam={{ title: '消息', isBack: false }} />
                <div>消息页面</div>
            </div>
        );
    }
}

export default Message;
