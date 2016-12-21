/**
 * Created by Ad8888 on 2016/12/21.
 */
/*原始写法*/
// function printLabel(lablelObj:{label:string}){
//     console.log(lablelObj.label)
// }
// var myObj={label:'hello'};
// printLabel(myObj)



/*现在的习惯写法*/
interface labelValue{
    label:string;
}
function printLabel(labelObj:labelValue){
    console.log(labelObj.label)
}
var myObj={label:"hello--1"}
printLabel(myObj)