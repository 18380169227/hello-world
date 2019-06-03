import React, { Component, Fragment } from 'react';
import Items from './item'

// 定义一个React组件
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.valueChange = this.valueChange.bind(this);
        this.addList = this.addList.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
    valueChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    // 新增
    addList() {
        if (this.state.inputValue !== '') {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
    }
    // 删除
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list})
    }
    // 获取列表items
    geiItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <Items
                        key={index}
                        content={item}
                        index={index}
                        deleteWays={this.handleDelete}
                    />
                )
            })
        )
    }

    //  父组件通过属性的形式向子组件传递参数
    // 子组件通过props接受父组件传过来的参数
   render() {
      return (
         <Fragment>
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.valueChange} />
                <button className='red-btn' onClick={this.addList}>add</button>
            </div>
            <ul>{this.geiItems()}</ul>
        </Fragment>
    );
  }
}

export default App;
