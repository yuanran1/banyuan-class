
const path=require('path');
const fs=require('fs');


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