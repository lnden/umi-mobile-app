import React, { Component } from 'react';
import { connect } from 'dva';
import PublicHeader from '@/components/PublicHeader';

@connect(state => {
    return state;
})
class Home extends Component {
    render() {
        return (
            <div>
                <PublicHeader headParam={{ title: '首页', isBack: false }} />
                <div>首页页面</div>
            </div>
        );
    }
}

export default Home;
