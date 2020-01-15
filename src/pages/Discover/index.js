import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

import PublicHeader from '@/components/PublicHeader';

class Discover extends Component {
    render() {
        return (
            <div>
                <PublicHeader title={formatMessage({ id: 'menu.discover' })} />
                <div>发现页面</div>
            </div>
        );
    }
}

export default Discover;
