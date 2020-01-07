/* eslint-disable */
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 176,
            slideIndex: 2,
        };
    }

    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.props.resourceList.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.props.resourceList.length - 1 });
        }
    }

    render() {
        const { resourceList } = this.props;
        return (
            <Carousel
                autoplay={false}
                infinite
                selectedIndex={this.state.slideIndex}
                beforeChange={(form, to) => console.log(`slide from ${form} to  ${to}`)}
                afterChange={index => console.log(`slide to`, index)}
            >
                {resourceList.map((item, index) => (
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
    }
}

export default CustomCarousel;
