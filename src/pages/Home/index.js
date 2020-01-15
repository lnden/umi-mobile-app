import React, { Component } from 'react';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { formatMessage } from 'umi/locale';

import CustomCarousel from '@/components/CustomCarousel';
import HeaderBar from './HeaderBar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        };
    }

    handleClickAdd = () => {
        const { data } = this.state;
        this.setState({
            data: data.concat('AiyWuByWklrrUDlFignR'),
        });
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <HeaderBar title={formatMessage({ id: 'menu.home' })} />
                <WingBlank>
                    <CustomCarousel resourceList={data} />
                    <WhiteSpace />
                    <Button onClick={() => this.handleClickAdd()} type="primary">
                        动态增加轮播图
                    </Button>
                    <div>首页页面</div>
                </WingBlank>
            </div>
        );
    }
}

export default Home;
