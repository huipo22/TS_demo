/**
 * Created by Ad8888 on 2016/12/22.
 */

/* 类型兼容*/
// interface Named {
//     name: string;
// }
//
// class Person {
//     name: string;
// }
//
// let x: Named;
// /*
// * 如果x要兼容y，那么y至少具有与x相同的属性。比如：
//  * */
// let y = {name: "huhuibo", age: 12};
// x = y;
// console.log(x)


let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});

x = y; // OK
/*error*/
// y = x; // Error because x() lacks a location property