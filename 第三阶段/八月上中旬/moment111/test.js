const _ = require('lodash');
const { constant } = require('lodash');
// console.log(_);

// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
   
// const result = _.findIndex(users,function(o){return o.user == 'pebbles';});
//类似于find(),返回找到元素的索引值index，找不到返回-1

// const result=_.findIndex(users, { 'user': 'fred', 'active': false });
// console.log(result)



// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
  //删掉2的倍数
// });
// console.log(array);
// => [1, 3]
//移除后的数组
// console.log(evens);
// => [2, 4]
//被删掉的部分




//反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
// var array = [1, 2, 3, 4];
// const result=_.reverse(array);
// console.log(array);


//获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
// let array = ['a','b','c','d','e'];
// const result=_.nth(array,2)
// console.log(result)
// //=>c，正数a[2]
// console.log(_.nth(array,-2));
// //=>d,倒数第二个




//遍历
// _.forEach([1, 2], function(value) {
//     console.log(value);
// });
// // => Logs `1` then `2`.
// //数组里面也可以是对象
// _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    // console.log(key);
    //=====>a,b
    // console.log(value)
    //====>1,2
// });



//filter过滤
// var users = [
//     { 'user': 'barney','age': 36, 'active': true },
//     { 'user': 'fred', 'age': 40, 'active': false },
//     { 'user': 'tom',  'age': 28, 'active': false },
// ];
//拿到active为false的
// const result=_.filter(users,function(o){return !o.active;});
// console.log(result)

//拿到active为false的
// const result=_.filter(users, ['active', false]);
// console.log(result)
// => objects for ['fred']

//根据属性的值进行分组
// const result=_.groupBy(users,'active')
// console.log(result)




// //map返回新的映射后的数组
// function square(n) {
//     return n * n;
//   }
// console.log(_.map([4, 8], square));
// => [16, 64]



// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 36 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 34 }
// ];
// console.log(_.sortBy(users, function(o) { return o.user; }));
//=====> objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
// console.log(_.sortBy(users, ['user', 'age']));
//=====> objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
   
 
// The `_.property` iteratee shorthand.
// _.map(users, 'user');
// => ['barney', 'fred']

//sortBy从小到大排,顺序
// console.log(_.sortBy(users,[function(o) {return o.user;}]))

//先按user，再按age排(user是根据首字母顺序)
// console.log(_.sortBy(users,['user','age']))
//倒序，从大到小排
// console.log(_.orderBy(users,['user','age'],['asc','desc']))


// //_.isEqual用来比较两者的值是否相等，不包括继承和可枚举的属性
// var obj={'a':1};
// var other={'a':1};
// console.log(_.isEqual(obj,other))
// //===>true
// console.log(obj===other)
// //====>false


//不要小数
// console.log(Math.floor(_.random(0,10)));
//true需要小数,false 不要小数
// console.log(_.random(0,10,true));

//omit去除属性
// var object = { 'a': 1, 'b': '2', 'c': 3 };
// console.log(_.omit(object, ['a', 'c']));
// => { 'b': '2' }


//找到年纪最小的人
// var users=[
//     { 'user': 'barney',  'age':36 },
//     { 'user': 'fred',    'age':40},
//     { 'user': 'pebbles', 'age':1}
// ];
//----------11111------
// let a2=_.sortBy(users,'age');
// console.log(a2[0])
//或者
// console.log(_.head(a2))
//
//------------2222-----
// let result=_.sortBy(users,'age')
// result=_.map(result,(item)=>{
//     return item.user+' is '+item.age
// })
// console.log(result)
// console.log(_.head(result))


//------------3333-------
// var youngest=
// _.chain(users)
// .sortBy('age')
// .map(function(o){
//     return o.user+' is '+o.age
// })
// .head()
// .value();
// //将数据拿出来
// console.log('youngest=====>',youngest)


let users = [
    {
        name:'tom',
        score:80,
        class:'A'
    },
    {
        name:'lucy',
        score:90,
        class:'A'
    },
    {
        name:'nacy',
        score:83,
        class:'B'
    },
    {
        name:'jack',
        score:84,
        class:'A'
    },{
        name:'lily',
        score:91,
        class:'A'
    }
]
var result=
_.chain(users)
.filter(['class','A'])
.orderBy(['score'],['desc'])
.map((item)=>{
    // console.log(item)
    return _.omit(item,'class')
})
.value()
console.log(result)
// let array2=_.filter(users,['class','A'])
// // console.log(array2)
// let array3=_.orderBy(array2,['score'],['desc']);
// console.log(array3)

// let result=_.omit(object,['class']);
// console.log(result)






