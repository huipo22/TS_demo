/**
 * Created by Ad8888 on 2016/12/22.
 */
/*函数类型  返回值类型*/
/* error 写法 */
// function add(x: number, y: number): string {
//     return x+y
// }


/* 正确写法 */
function add(x: number, y: number): number {
    return x+y
}


/*箭头函数*/
let tell:(x:number,y:number)=>number=function (x:number,y:number):number {
    return x+y
}


/*剩余参数*/
function tells(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let m = tells("Joseph", "Samuel", "Lucas", "MacKinzie");

