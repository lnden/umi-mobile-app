import React, { PureComponent } from 'react';
import styles from './index.less';

class UserLayout extends PureComponent {
    render() {
        const { children } = this.props;
        return <div className={styles.userLayout}>{children}</div>;
    }
}

export default UserLayout;
