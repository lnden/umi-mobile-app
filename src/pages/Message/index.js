import React, { Component } from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

import PublicHeader from '@/components/PublicHeader';

class Message extends Component {
    handleClose = () => {
        // console.log('关闭NoticeBar');
    };

    render() {
        return (
            <div>
                <PublicHeader title="消息" />

                <WhiteSpace />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
                    delayed during National Day.
                </NoticeBar>
                <WhiteSpace />
                <NoticeBar mode="link" onClick={this.handleClose}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
                    delayed during National Day.
                </NoticeBar>
                <WhiteSpace />
                <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
                    Customized icon.
                </NoticeBar>
                <div>消息页面</div>
            </div>
        );
    }
}

export default Message;
