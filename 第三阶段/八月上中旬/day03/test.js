const path=require('path');
const fs=require('fs');
const { rejects } = require('assert');
const { relative } = require('path');


// console.log(path.join('Users','edz','/第三阶段','day03','1.js'));

// const path=require('path');
// console.log(path.relative('/Users/edz/第三阶段/day03/1.js','/Users/edz/第三阶段/day03/test.js'));


//写入
// function writeFile(filepath,content){
//     fs.writeFile(path.join(__dirname,filepath),content,function(error){
//         if(error){console.log(error);}
//         console.log('success');
//     })
// }
// writeFile('./1.txt','44444');

//写入文件并读出
// let address=path.join(__dirname,'./1.txt')
// fs.writeFile(address,'444444',function(error){
//     if(error){console.log(error);}
//     console.log('success');
//     fs.readFile(address,function(error,data){
//         if(error){
//             console.log(error);
//         }else{
//              console.log(data.toString());
//         }
//     })
// });




// fs.writeFile(path.join(__dirname,'./2.txt'),'123',function(error){
//     if(error){console.log(error)}
//     else{
//         fs.writeFile(path.join(__dirname,'./3.txt'),'456',function(error){
//             error ? console.log(error) : fs.readFile(path.join(__dirname,'./2.txt'),function(error,content2){
//                     error ? console.log(error) : fs.readFile(path.join(__dirname,'./3.txt'),function(error,content3){
//                         error ? console.log(error) : fs.writeFile(path.join(__dirname,'./4.txt'),`${content2.toString()}${content3.toString()}`,function(error){
//                             error ? console.log(error) : console.log('All success');
//                         })
//                     })
//             })
//         })
//     }
// })



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

let content = '';
///1111111111111111111111
readFile(path.join(__dirname,'./1.txt'))
.then((data)=>{
    console.log('1.txt====>',data);
    content+=data;
    return readFile(path.join(__dirname,'./2.txt'));
})
.then((data)=>{
    console.log('2.txt====>',data);
    content+=data;
    return writeFile(path.join(__dirname,'./3.txt'),content);
})
.then((data)=>{

    console.log('3.txt====>',data);
    console.log('All Success');
    
})
.catch((e)=>{
    console.log(e);
})
//2222222222222222222

//前提：已经包成promise
// async function main(){
//     try{
//     let data1=await readFile(path.join(__dirname,'./1.txt'));//等待这句结束执行下一行
//     console.log(data1);
//     let data2=await readFile(path.join(__dirname,'./2.txt'));
//     console.log(data2)
//     await writeFile(path.join(__dirname,'./3.txt'),data1+data2);
//     let data3=await readFile(path.join(__dirname,'./3.txt'));
//     console.log(data3)
// }catch(error){

//     //直接console.log('Error===>',error)或者
//     throw error; //抛出,到test
// }
// }
// main()
// async function test(){
//     try{
//         await main();
//     }catch(error){
//         console.log('Error===>',error);
//     }
// }