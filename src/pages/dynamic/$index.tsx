import React, { Component } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// class Dynamic extends Component {
//     constructor(props) {
//         super(props)
//         console.log(this.props, 22222222222222)
//         this.state = { id: this.props.match.params.id }
//     }
//     render() {
//         let state = { ...this.state }
//         return (

//         )
//     }
// }

const Dynamic: React.FC<{}> = props => {
    const { id } = props.match.params;
    return (
        <PageHeaderWrapper>
            <div>{id}动态页面</div>
        </PageHeaderWrapper>
    )
}

export default Dynamic