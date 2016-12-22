/**
 * Created by Ad8888 on 2016/12/22.
 */
var div=document.createElement("div");
document.body.appendChild(div);
var obj=new Timer.Test(div);
var button=document.createElement("button");
button.innerHTML="start"
button.onclick=function () {
    obj.start();
}
document.body.appendChild(button);

var btns=document.createElement("button");
btns.innerHTML="stop";
btns.onclick=function () {
    obj.stop()
}
document.body.appendChild(btns)