import React, { Component } from 'react';
import {
    WingBlank,
    WhiteSpace,
    List,
    Checkbox,
    InputItem,
    Button,
    Radio,
    DatePicker,
    ImagePicker,
} from 'antd-mobile';
import { createForm } from 'rc-form';

import PublicHeader from '@/components/PublicHeader';

const { CheckboxItem } = Checkbox;
const { RadioItem } = Radio;
const { AgreeItem } = Checkbox;
const ListItem = List.Item;
const now = new Date();
const data = [
    {
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
    },
];

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            date: now,
            files: data,
            multiple: false,
            checked: false,
        };
    }

    handleChange = item => {
        // console.log(item);
    };

    handleChangeRadio = item => {
        this.setState({
            value: item.value,
        });
    };

    handleChangeDate = date => {
        this.setState({ date });
    };

    handleChangeFiles = (files, type, index) => {
        // console.log(files, type, index);
        this.setState({
            files,
        });
    };

    handleCHangeSiwtch = checked => {
        this.setState({
            checked,
        });
    };

    handleTo = e => {
        e.preventDefault();
        // console.log('跳转到协议页面')
    };

    handleClickImg = (index, fs) => {
        // console.log(index, fs)
    };

    handleRegister = () => {
        // console.log('发送请求跳转')
    };

    render() {
        const {
            form: { getFieldProps },
        } = this.props;
        const { value, checked, files, multiple, date } = this.state;

        const data1 = [
            { value: 0, label: 'doctor' },
            { value: 1, label: 'bachelor' },
        ];
        const data2 = [
            { value: 0, label: '打篮球' },
            { value: 1, label: '踢足球' },
            { value: 2, label: '去跑步' },
            { value: 3, label: '去学习' },
        ];
        return (
            <div>
                <PublicHeader title="用户注册" isBack />
                <WingBlank>
                    <List renderHeader={() => '个人信息'}>
                        <InputItem {...getFieldProps('account')} placeholder="请输入用户名">
                            用户名
                        </InputItem>
                        <InputItem {...getFieldProps('password')} placeholder="请输入密码">
                            密&emsp;码
                        </InputItem>
                    </List>
                    <List renderHeader={() => '性别'}>
                        {data1.map(item => (
                            <RadioItem
                                key={item.value}
                                checked={value === item.value}
                                onChange={() => this.handleChangeRadio(item)}
                            >
                                {item.label}
                            </RadioItem>
                        ))}
                    </List>
                    <List renderHeader={() => '生日'}>
                        <DatePicker
                            mode="date"
                            title="选择日期"
                            extra="Optional"
                            value={date}
                            onChange={() => this.handleChangeDate(date)}
                        >
                            <ListItem arrow="horizontal">生日日期选择</ListItem>
                        </DatePicker>
                    </List>
                    <List renderHeader={() => '兴趣爱好'}>
                        {data2.map(item => (
                            <CheckboxItem
                                key={item.value}
                                onChange={() => this.handleChange(item)}
                                defaultChecked={item.value === 3}
                            >
                                {item.label}
                            </CheckboxItem>
                        ))}
                    </List>
                    <List renderHeader={() => '上传头像'}>
                        <ImagePicker
                            files={files}
                            onChange={this.handleChangeFiles}
                            onImageClick={(index, fs) => this.handleClickImg(index, fs)}
                            selectable={files.length < 7}
                            multiple={multiple}
                        />
                    </List>
                    <AgreeItem
                        data-seed="logId"
                        onChange={e => this.handleCHangeSiwtch(e.target.checked)}
                        defaultChecked={checked}
                    >
                        我已阅读并同意
                        <a href="http://wwww.baidu.com" onClick={e => () => this.handleTo(e)}>
                            《用户协议》
                        </a>
                    </AgreeItem>
                    <Button type="primary" onClick={this.handleRegister}>
                        注册
                    </Button>
                    <WhiteSpace />
                    <Button type="primary">重置</Button>
                </WingBlank>
            </div>
        );
    }
}

export default createForm()(Register);
