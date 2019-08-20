// let store = require('store');
// store.set('user','csts');
// console.log(store.get('user'));

// store.remove('user');
// console.log(store.get('user'));
// console.log(store.get('user','a')); //a

// store.set('user',{'name':'csts','age':22})
// console.log(store.get('user'));
// console.log(store.get('user').name);

// store.set('school',{name:'ucse'})
// store.each(function(value,key){  //迭代时key value 是反的
//     console.log(key,'--->',value);
// });

// store.clearAll()

m = new Map();
m.set(1,'a')
m.set(2,'b')
m.set(3,'c')
console.log(m)
// forEach 方法只能遍历,没有返回值
let t = m.forEach((value,key)=>[key,value]);
console.log(t)
//利用数组的map最终返回新的集合的特性  values()是迭代器
t = [...m.values()].map(item => item+100)
console.log(t)