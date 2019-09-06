import React, { Component } from 'react';
import router from 'umi/router'
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Analyze: React.FC<{}> = (props) => {
    const handleRouter = (type) => {
        let url = ''
        if (type === 'monitor') {
            url = '/dashboard/monitor/jiankong'
        } else {
            url = '/dynamic/333'
        }
        router.push(url)
    };
    return (
        <PageHeaderWrapper>
            <div >这是分析页</div>
            <div onClick={handleRouter.bind(this, 'monitor')}>到监控页</div>
            <div onClick={handleRouter.bind(this, 'dynamic')}>到动态页面</div>
        </PageHeaderWrapper>
    )
}

//ts写法
// export default (): React.ReactNode => (
//     <PageHeaderWrapper>
//         <div>这是分析页</div>
//     </PageHeaderWrapper>
// );

export default Analyze
