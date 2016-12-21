/**
 * Created by Ad8888 on 2016/12/21.
 */
/*不可选参数*/
// interface USB{
//     name:string;
//     age:number;
// }
// function printUSB(pu:USB){
//     console.log(pu.name);
//     console.log(pu.age);
// }
// var my={name:'huhuibo',age:200}
// printUSB(my)


/*可选参数*/
interface USB{
    name?:string;
    age?:number;
}
function printUSB(pu:USB){
    console.log(pu.name);
    console.log(pu.age);
}
var my={name:'huhuibo'}
printUSB(my)