import store from 'store';
import { observable, computed } from 'mobx'

const ALL = Symbol('all')   //Symbol 独一无二的值
const COMPLETED = Symbol('completed')
const UNCOMPLETED = Symbol('uncompleted')

export default class TodoService {
    constructor() {
        this.load();
    }
    //从localstore中加载数据
    load() {
        store.each((value, key) => { if (key.startsWith(TodoService.NAMESPACE)) this._todos.set(key, value) })
    }

    static NAMESPACE = "todo::"; //prefix + str = key
    static STATES = {
        all:ALL,
        completed:COMPLETED.
        uncompleted:UNCOMPLETED
    }

    @observable
    _todos = new Map();  //监控变化,_todos内部,实现外部访问的get及set方法

    @observable filter = TodoService.STATES.completed;

    @computed  //可在任意类上属性的getter上使用.它所依赖的值发生了变化就重新计算,否则返回上次计算的结果
    get todos() {  //返回数组
        return [...this._todos.values()]
            .filter(item => {
                let fs = this.filter;  //Symbol
                console.log(fs, item.completed)
                if (fs === TodoService.STATES.all) {
                    return true;
                } else if (fs === TodoService.STATES.completed) {
                    if (item.completed === true)
                        return true;
                    else
                        return false;
                } else if (fs === TodoService.STATES.uncompleted) {
                    if (item.completed === false)
                        return true;
                    else
                        return false;
                }
            })
    }

    set todos(value) {
        this._todos = value;
    }
    // todos = new Map();
    // @observable 
    // change = (new Date()).valueOf()  //设置一个状态值,监控改值变化,数据改变时改动该值 
    //需要在observe的render中使用这个变量才会触发刷新

    create(title) {
        console.log("service create!!!!!!!!!!!!!!!!!!")
        const todo = {
            key: TodoService.NAMESPACE + (new Date()).valueOf(),
            title: title,
            completed: false
        }
        this._todos.set(todo.key, todo);
        store.set(todo.key, todo);
        let temp = this._todos;  //解决新添加数据,不渲染,mobx认为this.todos无变化
        this._todos = {};
        this._todos = temp;
        // console.log(this.change);
        // this.change = (new Date()).valueOf();
        return todo;
    }

    cc(title){
        const todo = {
            key: TodoService.NAMESPACE + (new Date()).valueOf(),
            title: title,
            completed: false
        };

        //url + method => restful
        //post add ;put modify
        axios.post('/api/todo', todo)
          .then(function (response) {
            console.log(response);
          })
    }




    setTodoState(key, checked) {
        //搜索key,列表=>字典
        let todo = this._todos.get(key);
        todo.completed = checked;
        //同步
        store.set(key, todo);
        let temp = this._todos;  //解决复选框改变,状态改变completed,不渲染,认为this.todos无变化
        this._todos = {};
        this._todos = temp;
        // console.log("sssssssssssssssssss",this.change);
        // this.change = (new Date()).valueOf()
    }

    setFilterState(value) {
        // this.filter = value;
        this.filter = TodoService.STATES[value];
    }
}






















