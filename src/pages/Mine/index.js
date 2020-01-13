import React, { Component } from 'react';
import { WhiteSpace, List } from 'antd-mobile';

import PublicHeader from '@/components/PublicHeader';
import ListMap from './map';
import './index.less';

const ListItem = List.Item;

class Mine extends Component {
    handleClick = url => {
        // console.log(url);
    };

    renderItem = list => {
        return list.map(item => (
            <ListItem
                thumb={item.thumb}
                extra={item.extra}
                arrow={item.arrow}
                onClick={() => this.handleClick(item.url)}
                key={item.id}
            >
                {item.content}
            </ListItem>
        ));
    };

    render() {
        return (
            <div>
                <PublicHeader title="我的" rightName="设置" />
                <List>{this.renderItem(ListMap.member)}</List>
                <WhiteSpace />
                <List>{this.renderItem(ListMap.major)}</List>
                <WhiteSpace />
                <List>{this.renderItem(ListMap.credit)}</List>
                <WhiteSpace />
                <List>{this.renderItem(ListMap.service)}</List>
            </div>
        );
    }
}

export default Mine;
