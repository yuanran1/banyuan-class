# 题目

1. ```js
   var val = 'c';
   var str = 'Value is' + (val === 'c') ? 'a':'b';
   console.log(str);
   ```

   结果是什么，为什么？

   ```
   根据运算符优先级，（）优先于+，
   var str = ‘Value is c’？‘a’:'b';
   非空字符串为true，三元运算符格式为“ 表达式?true:false ”,所以结果是a
   ```
   
   
   
2. 一个物体从1000米高的地方落下，每次弹起的高度是前一次高度的0.6倍，问多少次之后，高度小于1米。

   ```javascript
   var h=1000;
   var i=0;
   while(h>=1){
       h*=0.6;
       i++;
       if(h<1){
           break;
       }
   }
   console.log(i);
   ```

   14次

3. 物品a 2元，b 5元，c 15元，请问刚好花完100元有多少种情况？

   ```js
   var a=0;
   for(i=0;i<=50;i++){
       for(j=0;j<=20;j++){
           for(k=0;k<=6;k++){
               if(2*i+5*j+15*k===100){
                   a=a+1;
                   // console.log(i,j,k);
               }
           }
       }
   }
   console.log(a);
   ```

   44次

4. 求s=a+aa+aaa+aaaa+aaa aa ( 一共5个数字 )的值，其中a为一个数字，如 s = 1 + 11 + 111 + 1111 + 11111 （5个数字）

   ```js
   var a=3;
   var sum=0;
   var s=0;
   for(var i=1;i<6;i++){
       sum=10*sum+a;
       console.log(sum);
       s+=sum;
   }
   console.log('s=',s);
   ```

   3
   33
   333
   3333
   33333
   s= 37035

5. 孩子吃糖，第一天你给孩子买了一些糖，孩子每天吃糖的一半多一个，到了第10天的时候，发现只剩下一个糖了，问当初第一天买了多少糖？

   ```js
   var num=1;
   for(m=1;m<=9;m++){
       num=(num+1)*2;
   }
   console.log(num);
   ```

   1534颗

6. 最近抖音有对折纸挑战，在不考虑难度的情况下，一张普通的0.0001米厚度的纸，多少次对折后，可以达到最高峰珠穆拉玛峰的高度8848米？

   ```js
   var n=0;
   var h=0.0001;
   for(n=0;h<8848;n++){
       h=h*2;
       //console.log(h);
   }
   console.log(n);
   ```

   27次

7. 

   - 输入一个数字，首先判断是否为质数
   - 如果不是质数，将其分解质因数 如：24 = 2 * 2 * 2 * 3，将分解出的质数打印出来。

```js
var num=36;//要判断的数
var flag=true;//定义标识变量flag，值为true 是质数，值为false则是合数 
for(var i=2;i<num;i++){
    if(num%i==0){//有大于等于二的数可以把num整除，满足这个条件不是质数
    flag=false;//不是质数
    break;
    }
    }
    if(flag&&num!=1){ //标识为true且1不是质数，
    console.log(num+"是质数");
    }else{
        console.log(num+"不是质数");
        //质因数分解
        var a=num;
        var b=a;
        var number=[];//数组number
        console.log(a+"=");
        while(a>1){
            for(var j=2;j<b;j++){
                if(a%j===0){//j为因数
                    a/=j;//因数
                    number.push(j);//向数组的末尾添加一个或多个元素，并返回新的长度。
                    break;
                }
            }
        }
        console.log(number.join("×"));//元素放入字符串
  }
```

