import store from 'store';
import {observable} from 'mobx'

export default class TodoService {
    constructor(){
        this.load();
    }
    //从localstore中加载数据
    load(){
        store.each((value, key) => {if (key.startsWith(TodoService.NAMESPACE)) this.todos.set(key,value)})
    }

    static NAMESPACE = "todo::"; //prefix + str = key
    @observable todos = new Map();

    create(title){
        const todo = {
            key:TodoService.NAMESPACE + (new Date()).valueOf(),
            title:title,
            completed:false
        }
        this.todos.set(todo.key,todo); 
        store.set(todo.key,todo);
        return todo;
    }

    setTodoState(key,checked){
        //搜索key,列表=>字典
        let todo = this.todos.get(key);
        todo.completed = checked;
        //同步
        store.set(key,todo);
        }
} 






















