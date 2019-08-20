import React from 'react';
import ReactDom from 'react-dom';
//import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import Create from './component/Create';
// import TodoService from './service/service'
// import Todo from './component/Todo'
// import Filter from './component/Filter'
import TodoApp from './component/TodoApp';
import TodoService from './service/service'
//TodoApp 管理渲染,及所有状态
//Create负责显示文本框,接收用户输入的待办事项
//Todo 负责每条待办事项显示
//Filter 负责一个状态fliter的切换
//service 负责业务的处理,目前把数据处理也放至这个类

const service = new TodoService();
ReactDom.render(<TodoApp service={service} />,document.getElementById('root'));


// const appState = new AppState();

// render(
//   <AppContainer>
//     <App appState={appState} />
//   </AppContainer>,
//   document.getElementById('root')
// );

// if (module.hot) {
//   module.hot.accept('./App', () => { render(App) })
// }

// class Toggle extends React.Component{
//   constructor(props){
//    // console.log(props)
//     super(props);
//     this.state = {
//       flag : true
//       // p1 : "flora",
//       // p2 : "csts",
//       // p3 : 0
//     }
//   }


//   handleClick(event){
//     console.log(event);
//     console.log(this.state)
//     let x = event.target;//从事件中获取元素
//    // alert("触发的元素id是:" + x.id);
//     this.setState({flag:!this.state.flag});
//   }
  
//   render(){
//     //this.state.p1 = 'ltt';
//     // this.state.p3++
//     // console.log(this.state.p3)
//     // setTimeout(() => this.setState({p1:"ltt",p2:".com"}),2000);
//     //不能在render中直接使用setstate
//     /**使用bind包装this,    onClick产生的事件 */
//     let text = this.state.flag ?'true':'false'
//     return (<div id = "t1" onClick={this.handleClick.bind(this)}>
//       {console.log(this.props.parent)}
//     点击这句话会触发一个事件,并弹出一个警示框{this.props.schoolName}<br />
//     flag = {text};
//     {this.props.children}

// </div>);
//   }
// }

// class Root extends React.Component {
//   render (){
//     return (<div> 
//       My test<hr />
//       <Toggle schoolName="schoolname" parent={this}> 
//         <hr /> {/**注释 表达式,需用{} */}
//         <div>我是Toggle的子元素</div>
//       </Toggle>
//       </div>);
//   }
// }

// ReactDom.render(<Root />,document.getElementById('root'));

//将Root无状态组件增强
// let wrapper = function (Fn,props){
//   return (
//     <div>
//       {props.schoolName}
//       <hr />
//       <Fn />
//     </div>
//   );
// };
//柯里化
// let Wrapper = function(Fn){
//   return function (props) {
//     return (
//       <div>
//         {props.schoolName}
//         <hr />
//         <Fn />
//       </div>
//     );
//   };
// }
//简化Wrapper
// let Wrapper = Fn => props => <div>{props.schoolName}<hr /><Fn /></div>


// let Root = props => <div>{props.schoolName}</div>;
// let NewRoot = Wrapper(Root)

// ReactDom.render(<NewRoot schoolName="aaa"/>,document.getElementById('root'));

// //改为装饰器,ES2016的装饰器只能装饰类,所以,将Root改写成类
// //let Wrapper = Fn => props => (<div>{props.schoolName}<hr /><Fn schoolName={props.schoolName}/></div>);
// //Fn 传参方式
// let Wrapper = Fn => props => (<div>
//   {props.schoolName}{console.log(props,typeof(props))}
//   <hr />
//   <Fn {...props}/>  {/**对象解构,解构后为schoolName = "Flora" ,相当于给组件增加了属性*/}
//   </div>);
// //参数解构方法传参

// @Wrapper
// class Root extends React.Component{ //Root = Wrapper(Root)
//   render() {
//     return <div id = "rooot">My Name is {this.props.schoolName}<hr /></div>;
//   }
// }

// ReactDom.render(<Root schoolName="Flora"/>,document.getElementById('root'));

// //带参装饰器
// let Wrapper = id => Fn => props => (<div id = {id}> 
//   {props.schoolName}{console.log(props,typeof(props))}
//   <hr />
//   <Fn {...props}/>  {/**对象解构,解构后为schoolName = "Flora" ,相当于给组件增加了属性*/}
// </div>);

// @Wrapper('wrapper') //Root = Wrapper('wrapper')(Root)(props)
// class Root extends React.Component{ 
//   render() {
//     return <div id = "rooot">My Name is {this.props.schoolName}<hr /></div>;
//   }
// }

// ReactDom.render(<Root schoolName="Flora"/>,document.getElementById('root'));























