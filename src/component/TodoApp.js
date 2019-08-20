import React from 'react';
import {observer} from 'mobx-react'
import Create from './Create';
import TodoService from '../service/service'
import Todo from './Todo'
import Filter from './Filter'

@observer
export default class Root extends React.Component{
  constructor (props){
    super(props);
    this.service = new TodoService();
    this.state = {todos:this.service.todos,filter:"uncompleted"}
  }

  handleCreate (event){
    // console.log(event.target.value);
    // console.log(this);
    this.service.create(event.target.value);
    this.setState({todos:this.service.todos});
  }

  handleCheckChange(event,key){
    console.log("~~~~~~~~~~~~~~~",key,event.target.checked);
    this.service.setTodoState(key,event.target.checked);
    this.setState({todos:this.service.todos})
  }

  handleCondChange(value) {
    console.log(value);
    console.log(this);
    this.setState({filter:value});
  }

  render (){
      return <div>
        <Create onCreate={this.handleCreate.bind(this)}/>
        <Filter onChange={this.handleCondChange.bind(this)}/>
        <hr />
        {/**完成显示 */}
        {[...this.service.todos.values()]
        .filter(item => {
          let fs = this.state.filter;
         console.log(fs,item.completed)
          if (fs === "all") {
            return true;
          } else if (fs === "completed"){
            if (item.completed === true) 
              return true;
             else 
              return false; 
          } else if (fs === "uncompleted"){
             if (item.completed === false)
              return true;
              else 
              return false;
         }

        })
        .map(item => 
        <Todo onChange={this.handleCheckChange.bind(this)} key={item.key} todo={item} />)}
      </div>;  
      //手动添加onCreate属性,传给Create
  }
}





















