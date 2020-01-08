import React from 'react';
import PropTypes from 'prop-types';

const BizIcon = props => {
    const { type, styles, className, text } = props;
    return (
        <i className={`iconfont icon-${type} ${className || ''}`} style={{ ...styles }}>
            {text}
        </i>
    );
};

BizIcon.defaultProps = {
    type: '',
    styles: {},
    className: {},
    text: '',
};

BizIcon.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.object,
    className: PropTypes.object,
    text: PropTypes.string,
};

export default BizIcon;
