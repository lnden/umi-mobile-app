import React, { PureComponent } from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';

const PopoverItem = Popover.Item;
const myImg = src => (
    <img
        src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
        className="am-icon am-icon-xs"
        alt={src}
    />
);

class HeaderBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
        };
    }

    onSelect = opt => {
        const { value } = opt.props;
        this.setState({
            visible: false,
            selected: value,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    renderItem = () => {
        return [
            <PopoverItem
                key="4"
                value="scan"
                icon={myImg('tOtXhkIWzwotgGSeptou')}
                data-seed="logId"
            >
                Scan
            </PopoverItem>,
            <PopoverItem
                key="5"
                value="special"
                icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
                style={{ whiteSpace: 'nowrap' }}
            >
                My Qrcode
            </PopoverItem>,
            <PopoverItem key="6" value="help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>Help</span>
            </PopoverItem>,
        ];
    };

    renderPopover = () => {
        const { visible, selected } = this.state;
        return (
            <Popover
                mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={visible}
                overlay={this.renderItem()}
                align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
            >
                <div
                    style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Icon type="ellipsis" data-state={selected} />
                </div>
            </Popover>
        );
    };

    render() {
        const { title } = this.props;
        return (
            <div>
                <NavBar mode="light" rightContent={this.renderPopover()}>
                    {title}
                </NavBar>
            </div>
        );
    }
}

HeaderBar.defaultProps = {
    title: 'umi-mobile-app',
};
HeaderBar.propTypes = {
    title: PropTypes.string,
};
export default HeaderBar;
