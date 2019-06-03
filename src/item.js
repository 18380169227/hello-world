import React, { Component } from 'react';

// 定义一个React组件
class Items extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //  子组件如果想和父组件通信，要调用父组件传过来的方法
    handleDelete() {
        const { deleteWays, index} = this.props;
        deleteWays(index);
    }
    render() {
        const { content } = this.props;
        return (
            <li className='list-item' onClick={this.handleDelete}>{content}</li>
        );
    }
}

export default Items;
