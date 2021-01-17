// let a="su5203333";
// window.onload = function(){
//     console.log(a);
// }

// let a = 2;
// {
//     var a = 3;
// }
// console.log(a);

// var a = 2;
// {
//     let a = 3;
// }
// console.log(a);
// for (let i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);
// 用const申明常量
// const a='su';
// var a='苏国韦';
// console.log(a);

// 变量的解构赋值
// let a = 0;
// let b = 1;
// let c = 2;
// 数组结构结构的方式
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d);
// let [a,b="su"] = ['苏国韦',undefined];
// console.log(a+b); 
// let [a,b="su"]=['苏国韦',null];
// console.log(a+b);
// 2.2 对象的解构赋值
// let {foo,bar} = {bar:'苏国韦',foo:'su'};
// console.log(foo+bar); 

// let foo;
// // // {foo}={foo:'su'};
// // ({foo}={foo:'su'});
// // console.log(foo);

// const [a,b,c,d,e]='liang';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);
// let arr1=['www','taiji','com'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('su');
// console.log(arr2);
// console.log(arr1);
// rest ...
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(first);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// function taiji(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// let su='苏国韦';
// let blog = '非常高兴你能看到这篇文章，我是你的老师'+su+'。这节课我们学习字符串模版。';
// document.write(blog);
// ES6写法
// let su='苏国韦';
// let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老师${su},这节课我们学习字符串模版。`;
// document.write(blog);

// let a=1;
// let b=2;
// let result=`${a+b}`;
// let result = a+b;
// document.write(result);
//字符串查找
// ES5的写法
// let su='苏国韦';
// let blog = '非常高兴你能看到这篇文章，我是你的老师苏国韦。这节课我们学习字符串模版。';
// document.write(blog.indexOf(su));

// document.write(blog.includes(su));
// // // 判断开头是否存在
// document.write(blog.startsWith(su));
// // 判断结尾是否存在：
// document.write(blog.endsWith(su));

// document.write('*'.repeat(3));

// 二进制 Binary
// let binary = 0B010101;
// console.log(binary);
// // 八进制
// const octal = 0o666;
// console.log(octal);

// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('su'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5 判读NaN
// // console.log("******************************")
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log("#############################")
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));
// console.log(333333)
// console.log(parseInt("abc1111"));
// console.log(Number.isNaN(parseInt("abc1111")));
//Number.isInteger 判断是否为整数
// let a= 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// let su = Math.pow(2,53)-1;
// console.log(su);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(9007199254740991333)
// 安全整数判断isSafeInteger( )
// console.log(Number.isSafeInteger(su));

// let json ={
//     '0':'su',
//     '1':'苏国韦',
//     '2':'太极员工',
//     length:3
//    // length必须写
// }
// console.log(json);
// let arr = Array.from(json);
// console.log(arr);

// // Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// let arr = Array.of('太极','苏国韦','开发者社区')
// console.log(arr)

//find() 实例方法
// let arr=[1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     return value >4;
//     // return index > 4;
// });
// console.log(v)

//findIndex()方法
// let arr1=[1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value >4);
// console.log(i);

//filter()方法 不同之处在于filter返回的是数组
// let arr2=[1,2,3,4,5,6,7,8];
// var a = arr2.filter((value) => value >4);
// console.log(a)

// 数组去重
// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// fill
// let arr=['su','苏国韦','太极公司','你好'];
// arr.fill('web',1,3);
// console.log(arr);
// fill左闭右开

// //数组循环
// //数组循环
// let arr=['su','苏国韦','太极公司'];
// for (let item of arr){
//    console.log(item);
// }

// for…of数组索引
// //数组循环
// let arr=['su','苏国韦','太极公司'];
// for (let index of arr.keys()){
//    console.log(index);
// }

// 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环
// let arr=['su','苏国韦','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries方法 切分数组
// let arr=['su','苏国韦','太极公司'];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log('******************')
// console.log(list.next().value);
// console.log('&&&&&&&&&&&&&&&&&&&')
// console.log(list.next().value);
// console.log('$$$$$$$$$$$$$$$$$$$')

//ES6箭头函数
// 首先是ES5中的写法
// 'use strict'
// function add(a,b=2){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1))
// console.log(add.length);
// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// 有严谨模式‘use strict’函数有默认值的时候是不行的
// function add(a,b=1){
//     // 'use strict'
//     return a+b;
// }
// console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// // 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内

// 默认值  es6箭头函数
// var add=(a,b=2) => a+b;
// console.log(add(1));
//
// var add=(a,b=1)=>{
//     console.log('taiji')
//     return a+b;
// }
// console.log(add(1))

//对象的函数解构 json
// let a = undefined;
// function fun (a=4){
//     console.log(a);
// }
// fun(a);

// 对象的函数结构
// let json = {
//     a:'su',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

//数组的函数解构
// let arr = ['su','苏国韦','太极'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d)
// }
//
// fun(...arr);

// in的用法
// let obj ={
//     a:'su',
//     b:'苏国韦'
// }
// // // c指key
// console.log('c' in obj);

// 数组判断

// let arr=[,,,];
// console.log(arr.length); //3
// console.log(arr[0])
// console.log(0 in arr);  // false
// // 注意：这里的0指的是数组下标位置是否为空。
// let arr1=['su','苏国韦'];
// console.log(0 in arr1);  // true
// console.log(0 in arr);
// 数组遍历 forEach
// let arr = ['su','苏国韦','太极'];
// arr.forEach((val,index)=>console.log(index,val));
// 数组遍历 filter
// let arr = ['su','苏国韦','太极'];
// arr.filter(x => console.log(x));
// // 数组遍历 some
// let arr = ['su','苏国韦','太极'];
// arr.some(x => console.log(x));
// // 数组遍历 map替换
// let arr = ['su','苏国韦','太极'];
// console.log(arr.map(x=>'web'));
// 数组转换成字符串
// let arr = ['su','苏国韦','太极'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// 对象
// 对象赋值
// let name = 'su';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);

// // key值的构建
// let key = "skill"
// var obj ={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2))

// Object.is( ) 对象比较
// is()
// let obj1={name:'su'};
// let obj2={name:'su'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// ===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign
// let a={a:'su'};
// let b={b:'苏国韦'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

// Symbol的打印
// let su = Symbol('苏国韦');
// console.log(su);
// console.log(su.toString());


// Symbol在对象中的应用
// let su = Symbol();
// let obj = {
//     [su]:'苏国韦'
// }
// console.log(obj[su]);
// obj[su]='太极员工'
// console.log(obj[su]);

//Symbol对象元素的保护作用
// let obj = {name:'su',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }
// let obj ={name:'su',skill:'web'};
// // let age = Symbol();
// // obj[age]=18;
// // console.log(obj);
// // for(let item in obj){
// //     console.log(obj[item]);
// // }
// // console.log(obj[age]);

// set的声明
// let setArr = new Set(['su','苏国韦','web','苏国韦',]);
// setArr.add('前端技术');
// console.log(setArr);

//eg
// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// for (let i of s) {
//     console.log(i);
// }
// // // // has查找set中的值
// console.log(setArr.has('su'));

// Set值的增删改
// setArr.clear(); //删除全部
// // // 删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value)=>console.log(value));
// size属性  size属性可以获得Set值的数量。
// console.log(setArr.size);
//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'su',b:'苏国韦'};
// // let obj1 = obj;
// let obj1={a:'su',b:'苏国韦'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
// json
// let json={
//     name:'su',
//     skill:'web'
// };
// console.log(json.name);

// =>
// var map = new Map();
// map.set(json,'I am');
// console.log(map);
// map.set('su',json);
// console.log(map);
//map增删查
//get 取值
// console.log(map.get(json));
// // delete 删除特定的值
// map.delete(json);
// console.log(map);
// clear 删除全部的值
// map.clear();
//size
// console.log(map.size);
// //has
// console.log(map.has('su'));

//proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理
//
// let obj = {
//     add:function(val){
//         return val+100
//     },
//     name:'I am su'
// }
// console.log(obj.add(100));
// console.log(obj.name);
// for example
// const employee = {
//     firstName: 'liang',
//     lastName: 'juan'
// };
// //
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.org);
// console.log(employee.fullName);
// console.groupEnd()
// let handler = {
//     get: function(target, fieldName) {

//         if(fieldName === 'fullName' ) {
//             return `${target.firstName} ${target.lastName}`;
//         }

//         return fieldName in target ?
//             target[fieldName] :
//             `No such property as, '${fieldName}'!`

//     }
// };
// let p = new Proxy(employee, handler);
// console.log('#########################')
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.org);
// console.log(p.fullName);
// console.groupEnd()

// const validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if(value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//         }
//     }
// };
// let pr = new Proxy(employee, validator);
// pr.age = "test";
// var pro = new Proxy({
//     add:function(val){
//         return val+100
//     },
//     name:'I am su'
// }, {
//     // get
//     get: function (target, key, property) {
//         console.log('come in Get');
//         return target[key];
//     },
// // });
// // console.log(pro.name);
// //    set
//     set: function (target, key, value, recriver) {
//         console.log(` setting ${key} = ${value}`);
//         return target[key] = value + '222';
//     }
// //
// });
// console.log(pro.name);
// pro.name = '苏国韦'
// console.log(pro.name);

// apply的使用
// let target = function(){
//     return 'I am su';
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target,handler);
// console.log(pro());

//promise
//promise es5 回调地狱
// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// //
// function step3(resolve,reject){
//     state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });

// class 类
//类的声明
// class Coder {
//     name(val) {
//         console.log(val);
//         return val;
//     }

// }
//
// let su = new Coder;
// su.name('苏国韦');
//     skill(val) {
//         console.log(this.name('苏国韦') + ':' + 'skill-' + val);
//     }
//
//
// // //     // 类的传参
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     add(){
//         return this.a + this.b;
//     }
// }
//
// let su = new Coder(1,2);
// // su.name('苏国韦');
// // su.skill('web');
// console.log(su.add())
//
// //类的继承
// class htmler extends Coder{
//
// }
// let suDev = new htmler;
// suDev.name('苏国韦');

// 模块化
// import 引入  export 输出
