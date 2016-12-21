/**
 * Created by Ad8888 on 2016/12/21.
 */

// function Hello(num:number):number{
//     return num
// }

// function Hello(str:any):any{
//     return str
// }

/*泛型<T>*/
function Hello<T>(arg:T):T{
    return arg
}

var output=Hello<string>('hello huhuibo');
alert(output)