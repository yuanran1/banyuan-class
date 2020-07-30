var taskItems=document.getElementsByClassName("task-item");
var inputEle=document.getElementsByClassName("task-input")[0];
var taskListEle=document.getElementsByClassName("task-list")[0];
var addBtn=document.getElementsByClassName("add-btn")[0];
var close=document.getElementsByClassName("close");

//初始化
init();

bindCloseEvent();

addBtn.onclick=addTask;//点击Add按钮添加任务

//回车键添加任务
inputEle.onkeydown=function(e){
    if(e.keyCode===13){//回车键为13
        addTask();//添加任务
    }
}

//初始化
function init(){
    for(var i=0;i<taskItems.length;i++){
        var span=createCloseSymnol();
        taskItems[i].appendChild(span);
    }
    bindCheckedEvent();//绑定
}

//列表绑定点击后显示为checked类内容
function bindCheckedEvent(){
    for(var i=0;i<taskItems.length;i++){
        taskItems[i].onclick=function(){
            this.classList.toggle('checked');//给DOM元素转换类为checked，实现给单击过的元素添加动态class类，并且每次只能选中一个
        }
    }
}

// 添加任务
function addTask(){
    var li=document.createElement("li");

    li.className='task-item';
    // 添加文本
    var inputValue=inputEle.value;

    // 没有输入任务的话直接返回，不做操作
    if(inputValue===''){
        return;
    }

    //输入文本
    var text=document.createTextNode(inputValue);
    li.appendChild(text);
    taskListEle.appendChild(li);

    //重置输入框中的值
    inputEle.value="";

    var span=createCloseSymnol();
    li.appendChild(span);
    li.onclick=function(){
        this.classList.toggle('checked');
    }
    bindCloseEvent();

}
function createCloseSymnol(){
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);

    return span;
}

function bindCloseEvent(){

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var parentEle = this.parentElement;
            parentEle.remove();
        }
    }
}