# 作业



1. 只有一个，分别使用promise的方式和async/await的方式完成。

2. 往1.txt文件写入'这是第一个文件'

3. 往2.txt文件写入‘这是第二个文件’

4. 读取1.txt与2.txt的内容

5. 连接两者的内容，使得1.txt的内容在第一行，2.txt的内容在第二行

   ```txt
   这是第一个文件
   这是第二个文件
   ```

6. 然后把这个内容，写入3.txt文件，成功后返回'success'

#### promise

```js

const path=require('path');
const fs=require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

function readFile(address){
    return new Promise((resolve,rejects)=>{
        fs.readFile((address),(error,content)=>{
            if(error){
                rejects(error);
            }
            else{
                resolve(content.toString());
            }
        });
    });
};

function writeFile(address,content){
    return new Promise((resolve,rejects)=>{
    fs.writeFile((address),content,(error)=>{
        if(error){
            rejects(error);
        }
        else{
            resolve(content.toString());
        }
    })
});

}
let content='';
writeFile(path.join(__dirname,'./1.txt'),"这是第一个文件")
readFile(path.join(__dirname,'./1.txt'))
.then((data)=>{
    
    console.log('1===>',data);
    content+=data+'\x0d';
    return writeFile(path.join(__dirname,'./2.txt'),"这是第二个文件")
})
.then((data)=>{
    console.log('2===>',data);
    content+=data;
    return writeFile(path.join(__dirname,'./3.txt'),content)
})
.then((data)=>{
    console.log('Success');
})
.catch((e)=>{
    console.log(e);
})
```

#### async/await

```js
const path=require('path');
const fs=require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

function readFile(address){
    return new Promise((resolve,rejects)=>{
        fs.readFile((address),(error,content)=>{
            if(error){
                rejects(error);
            }
            else{
                resolve(content.toString());
            }
        });
    });
};

function writeFile(address,content){
    return new Promise((resolve,rejects)=>{
    fs.writeFile((address),content,(error)=>{
        if(error){
            rejects(error);
        }
        else{
            resolve(content.toString());
        }
    })
});

}
let content='';
async function main(){
    try{
        await writeFile(path.join(__dirname,'./1.txt'),"这是第一个文件")
        let data1=await readFile(path.join(__dirname,'./1.txt'))
        console.log(data1);

        await writeFile(path.join(__dirname,'./2.txt'),"这是第二个文件")
        let data2=await readFile(path.join(__dirname,'./2.txt'))
        console.log(data2);
        
        await writeFile(path.join(__dirname,'./3.txt'),data1+'\n'+data2)
        console.log('success');
    }catch(error){
        console.log('Error===>',error)
    }
}
main()
```

