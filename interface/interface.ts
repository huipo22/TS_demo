/**
 * Created by Ad8888 on 2016/12/21.
 */

// function printLabel(lablelObj:{label:string}){
//     console.log(lablelObj.label)
// }
// var myObj={label:'hello'};
// printLabel(myObj)
interface labelValue{
    label:string;
}
function printLabel(labelObj:labelValue){
    console.log(labelObj.label)
}
var myObj={label:"hello--1"}
printLabel(myObj)