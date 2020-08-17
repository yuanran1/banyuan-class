const path=require('path');
const fs=require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');


function writeFile(address,content){
    return new Promise((resolve,rejects)=>{
        fs.writeFile((address),content,(error)=>{
            if(error){rejects(error);}
        })
    })
}

function readFile(address){
    return new Promise((resolve,reject)=>{
        fs.readFile((address),(error,content)=>{
            if(error){reject(error);}
            else{
                resolve(content.toString())
            }
        })
    })
}
let content='';
writeFile(path.join(__dirname,'./11.txt'),'111111')
readFile(path.join(__dirname,'./11.txt'))
.then((data)=>{
    console.log('11.txt==>',data);
    content+=data;
    return writeFile(path.join(__dirname,'22.txt'),'2222222')
})
.then((data)=>{
    console.log('22.txt==>',data);
    content+=data;
    return writeFile(path.join(__dirname,'33.txt'),content)
})
.then((data)=>{
    console.log('success')
})