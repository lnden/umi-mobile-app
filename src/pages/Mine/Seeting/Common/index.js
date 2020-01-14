import React, { Component } from 'react';
import { List, WhiteSpace, Picker, Card, Button } from 'antd-mobile';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { connect } from 'dva';
import { createSelector } from 'reselect';

import { selector, createAction } from '@/utils';
import PublicHeader from '@/components/PublicHeader';

const ListItem = List.Item;
const CardHeader = Card.Header;
const CardBody = Card.Body;
const CardFooter = Card.Footer;

const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};
const colors = [
    {
        label: (
            <div>
                <span style={{ ...colorStyle, backgroundColor: '#FF0000' }} />
                <span>红色</span>
            </div>
        ),
        value: '#FF0000',
    },
    {
        label: (
            <div>
                <span style={{ ...colorStyle, backgroundColor: '#00FF00' }} />
                <span>绿色</span>
            </div>
        ),
        value: '#00FF00',
    },
    {
        label: (
            <div>
                <span style={{ ...colorStyle, backgroundColor: '#0000FF' }} />
                <span>蓝色</span>
            </div>
        ),
        value: '#0000FF',
    },
];
const languages = [
    {
        label: 'English',
        value: 'en-US',
    },
    {
        label: '简体中文',
        value: 'zh-CN',
    },
];

@connect(
    createSelector(selector('global', ['language', 'theme']), (language, theme) => ({
        language,
        theme,
    })),
)
class Common extends Component {
    handleClick = e => {
        // console.log(e);
    };

    handleChangeLang = value => {
        const { dispatch } = this.props;
        dispatch(createAction('global/setLocale')(value[0]));
    };

    handleChangeColor = color => {
        const { dispatch } = this.props;
        dispatch(createAction('global/setTheme')(color));
    };

    render() {
        const { language, theme } = this.props;
        return (
            <div>
                <PublicHeader title="通用" isBack />
                <WhiteSpace size="xl" />
                <List>
                    <ListItem arrow="horizontal" onClick={() => this.handleClick('message')}>
                        新消息通知
                    </ListItem>
                </List>
                <WhiteSpace size="xl" />
                <List>
                    <Picker
                        data={languages}
                        value={language}
                        cols={1}
                        onChange={this.handleChangeLang}
                    >
                        <ListItem arrow="horizontal">多语言切换</ListItem>
                    </Picker>
                    <Picker data={colors} value={theme} cols={1} onChange={this.handleChangeColor}>
                        <ListItem arrow="horizontal">主题设置</ListItem>
                    </Picker>
                </List>
                <WhiteSpace size="xl" />
                <Card>
                    <CardHeader title={formatMessage({ id: 'mine.seeting.common.title' })} />
                    <CardBody>
                        <div>{formatMessage({ id: 'mine.seeting.common.content' })}</div>
                        <FormattedMessage id="mine.seeting.common.title" />
                    </CardBody>
                    <CardFooter
                        content={formatMessage({ id: 'mine.seeting.common.footer' })}
                        extra={<div>{formatMessage({ id: 'mine.seeting.common.extra' })}</div>}
                    />
                    <Button type="primary">主色调按钮pimary</Button>
                </Card>
            </div>
        );
    }
}

export default Common;
