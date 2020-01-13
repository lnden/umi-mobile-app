import React, { PureComponent } from 'react';
import { WhiteSpace, List, Toast } from 'antd-mobile';
import { connect } from 'dva';
import { createSelector } from 'reselect';

import { createAction, loadingSelector } from '@/utils';
import PublicHeader from '@/components/PublicHeader';
import ListMap from './map';

const ListItem = List.Item;

@connect(
    createSelector(loadingSelector('global/logout'), loginLoading => ({
        loading: loginLoading,
    })),
)
class Seeting extends PureComponent {
    componentDidUpdate() {
        const { loading } = this.props;
        loading &&
            Toast.loading('Loading...', 1, () => {
                // console.log('Load complete !!!');
            });
    }

    handleClick = url => {
        if (!url) {
            const { dispatch } = this.props;
            dispatch(createAction('global/logout')());
        }
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
                <PublicHeader title="设置" isBack />
                <WhiteSpace size="xl" />
                <List>{this.renderItem(ListMap.member)}</List>
                <WhiteSpace size="xl" />
                <List>{this.renderItem(ListMap.major)}</List>
                <WhiteSpace size="xl" />
                <List>{this.renderItem(ListMap.credit)}</List>
                <WhiteSpace size="xl" />
                <List>{this.renderItem(ListMap.service)}</List>
            </div>
        );
    }
}

export default Seeting;
