/**
 * Created by Ad8888 on 2016/12/21.
 */

// function Hello<T>(num:T):T{
//     alert(num.length)
//     return num;
// }

/*数组有length属性*/
// function Hello<T>(num:T[]):T[]{
//     alert(num.length)
//     return num;
// }
// var List:Array<string>=Hello<string>(["1","2","3"])
// for(var i=0;i<List.length;i++){
//     alert(List[i])
// }

// function Hello<T>(arg: T): T {
//     return arg;
// }
// // var myHello: <K>(arg: K)=>K = Hello;
// // alert(myHello("hello"))
//
// var myHello: {<T>(arg: T): T} = Hello;
// alert(myHello('hello'))

//
// interface Hello {
//     <T>(arg: T): T;
// }
// function myHello<T>(arg: T): T {
//     return arg;
// }
// var MH:Hello=myHello;
// alert(MH("hello"))

//
// interface Hello<T> {
//     (arg: T): T;
// }
// function myHello<T>(arg: T): T {
//     return arg;
// }
// var mh: Hello<number> = myHello;
// alert(mh(100))

class HelloNumber<T> {
    Ten: T;
    add: (x: T, y: T)=>T;
}
var myHelloNumber = new HelloNumber<number>();
myHelloNumber.Ten = 10;
myHelloNumber.add = function (x, y) {
    return x + y;
}
alert(myHelloNumber.Ten)
alert(myHelloNumber.add(10, 20))