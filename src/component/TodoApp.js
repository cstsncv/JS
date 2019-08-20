import React from 'react';
import { observer } from 'mobx-react'
import Create from './Create';
//import TodoService from '../service/service'  //service 从props传入
import Todo from './Todo'
import Filter from './Filter'


@observer  //mobx观察者是一个类
export default class Root extends React.Component {
    constructor(props) {
        super(props);
        //this.service = new TodoService();  //service由props传入
        //  this.state = {todos:this.service.todos,filter:"uncompleted"}  //this.state改变从新渲染
        this.state = { filter: "uncompleted" }  //将filter放置后方service中
    }

    handleCreate(event) {
        // console.log(event.target.value);
        // console.log(this);
        this.props.service.create(event.target.value);
        //  this.setState({todos:this.service.todos});
    }

    handleCheckChange(event, key) {
        console.log("~~~~~~~~~~~~~~~", key, event.target.checked);
        this.props.service.setTodoState(key, event.target.checked);
        //  this.setState({todos:this.service.todos}) 
    }

    handleCondChange(value) {
        console.log(value);
        //   console.log(this);
        //this.setState({filter:value});
        this.props.service.setFilterState(value);
    }

    render() {
        return <div>
            <Create onCreate={this.handleCreate.bind(this)} />
            <Filter onChange={this.handleCondChange.bind(this)} />
            <hr />
            {/**完成显示 */}
            {this.props.service.todos.map(item =>
                <Todo onChange={this.handleCheckChange.bind(this)} key={item.key} todo={item} />)}
        </div>;
        //手动添加onCreate属性,传给Create
    }
}





















