// let s=new Set();
// let array=[2,4,1,8,9,10,2];
// array.forEach(function(item){
//     s.add(item);
// })
// console.log(s);


let data = [
    {name:'A',score:90},
    {name:'B',score:82},
    {name:'C',score:100},
    {name:'D',score:71},
    {name:'E',score:81},
    {name:'F',score:92},
    {name:'G',score:72},
    {name:'H',score:61},
    {name:'I',score:71},
    {name:'J',score:51},
    {name:'K',score:90},
    {name:'L',score:82},
    {name:'M',score:74},
    {name:'N',score:71},
    {name:'O',score:81}
]
data.map((item)=>{

    let level = getLevel(item.score);

    item.level = level;

    return item;
})

console.log(data);

function getLevel(score){
    if(score>=85){
        return '优秀'
    }else if(score>=75&&score<=84){
        return '良好'
    }else if(score>=60&&score<=74){
        return '中等'
    }else{
        return '差'
    }
}
let map = new Map();

data.forEach((item)=>{

    if(!map.get(item.level)){
        map.set(item.level,1);
    }else{
        map.set(item.level,map.get(item.level)+1);
    }
})

console.log(map)