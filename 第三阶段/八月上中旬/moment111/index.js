const moment = require('moment')
// console.log(moment)
// moment();
//当前时间
// const date=moment('1999-02-15');
// console.log(date);
// console.log(moment('2020-04-26').format('YYYY-MM-DD'));
//格式化时间
// console.log(moment('2020-04-26').format('YYYY-MMMM-DD'));
//完整月份

// console.log(moment().format('YYYY-MM-DD HH:mm:ss A'))
//HH小时24小时制，mm、ss有前导零的分钟数、秒数,A大写的AM，PM

// const date=moment().subtract(1,'day').format('YYYY-MM-DD HH:mm:ss A');
//比当前日期减一天，减一年(1,'year'),减七个月(7,'month'),年月日时分秒都可减
// const date=moment().add(1,'day').format('YYYY-MM-DD HH:mm:ss A');

// console.log(date);

// let date=moment().add(1,'hour').hour()
//加一小时拿小时数
// let date=moment().month()
// console.log(date+1);
// console.log(moment().add(1,'month').daysInMonth())
//输出下个月天数
// const result=moment('2020-10-13').isBefore('2020-10-16')
//判断是否在某一天之前，10-13是否在10-16之前
//返回的是true或者false
// console.log(result)

// const result= moment('2010-10-13').isBefore('2020-10-16','year')
// console.log(result)

// const result= moment('2021').isLeapYear()
//isLeapYear判断是否是闰年
// console.log(result)

// const result= moment().diff(moment('1992-01-11'),'day')
//diff计算两者时间间隔，隔了多少天
// console.log(result)


// const date=moment()
// console.log(date.toDate())

function banyuan(date){
    this.date=date;
    this.push=function(v){
        this.date.push(v)
        return this
    }
    this.value=function(){
        return this.date
    }
}

const b1=new banyuan([]);
// console.log(b1);
b1.push(1).push(2);
console.log(b1)
