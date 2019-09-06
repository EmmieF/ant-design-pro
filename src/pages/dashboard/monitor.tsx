import React, { Component } from 'react';
// import router from 'umi/router'
import { PageHeaderWrapper } from '@ant-design/pro-layout';


class Monitor extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    };
    render() {
        return (
            <PageHeaderWrapper>
                <div>这是监控页</div>
            </PageHeaderWrapper>
        )
    }
}

export default Monitor
