import React from 'react';

const BizIcon = props => {
    const { type, styles, className, text } = props;
    return (
        <i className={`iconfont icon-${type} ${className || ''}`} style={{ ...styles }}>
            {text}
        </i>
    );
};
export default BizIcon;
