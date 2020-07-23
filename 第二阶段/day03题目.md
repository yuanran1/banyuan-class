# 题目

使用函数的方式进行解答。

1. 编写函数，完成取余运算，使其结果和%的结果一致。

   ```javascript
   function mod(x,y){
           a = x - y * Math.floor(x/y);//返回小于或等于一个给定数字a的最大整数。
           console.log(x+'➗ '+y);
           return a;
       }
       mod(32,7);
       console.log("余数="+a);
   ```

   32➗ 7
    余数=4

2. 检查字符串是否含有大写字母，小写字母以及_,$,如果有，则返回时缺少了哪些字符。

   ```js
   function text(str){
       console.log(str);
           var a=0;
           var b=0;
           var c=0;
           var d=0;
           for(var i=0;i<str.length;i++){
               
               if(str.charAt(i)>='A'&& str.charAt(i)<='Z'){
                   a++;
               }
               if(str.charAt(i)>='a'&&str.charAt(i)<='z'){
                   b++;
               }
               if(str.charAt(i)==='_'){
                   c++;
               }
               if(str.charAt(i)==='$'){
                   d++;
               }
           }
           if(a!==0){
               console.log("有大写字母,共"+a+"个");
           }else{
               console.log("没有大写字母");
           }
           if(b!==0){
               console.log("有小写字母,共"+b+"个");
           }else{
               console.log("没有小写字母");
           }
           if(c!==0){
               console.log("有下划线_,共"+c+"个");
           }else{
               console.log("没有下划线_");
           }
           if(d!==0){
               console.log("有$,共"+d+"个");
           }else{
               console.log("没有$");
           }
       }
       text("dlsfkqkf-1_$");
   ```

   dlsfkqkf-1_$
   没有大写字母
   有小写字母,共8个
   有下划线_,共1个
   有$,共1个

3. 模拟一个场景，isen老师批改你们16个人的github作业的场景。假设第一次提交就通过的概率是1/8，第二次提交通过的概率为85%，第三次都通过了。问，可爱的isen老师可能会批改多少次你们作业。

   ```js
   function posibility(num){
       var a=num*(1-1/8);
       var b=num*(1-0.85);
       var sum=num+a+b;
       console.log(sum);
   }
   posibility(16);
   ```

   33次（32.4）

