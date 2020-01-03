import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

export default () => (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '200px' }}>
        <ActivityIndicator text="正在加载" style={{ margin: '0 auto' }} />
    </div>
);
