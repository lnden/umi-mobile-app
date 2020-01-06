/* eslint-disable */
// 暂时注释，日后提出为公共组件
import React, { Component } from 'react';
import { Carousel, WingBlank, WhiteSpace, Button } from 'antd-mobile';

import PublicHeader from '@/components/PublicHeader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 2,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }

    handleClickAdd = () => {
        this.setState({
            data: this.state.data.concat('AiyWuByWklrrUDlFignR'),
        });
    };

    renderCarousel = () => {
        return (
            <Carousel
                autoplay={false}
                infinite
                selectedIndex={this.state.slideIndex}
                beforeChange={(form, to) => console.log(`slide from ${form} to  ${to}`)}
                afterChange={index => console.log(`slide to`, index)}
            >
                {this.state.data.map((item, index) => (
                    <a
                        key={item}
                        href="https://www.baidu.com"
                        style={{
                            display: 'inline-block',
                            width: '100%',
                            height: this.state.imgHeight,
                        }}
                    >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
                            alt={`${index}-img`}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    };

    render() {
        return (
            <div>
                <PublicHeader headParam={{ title: '首页', isBack: false }} />
                <WingBlank>
                    {this.renderCarousel()}
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
