/**
 * Created by Ad8888 on 2016/12/21.
 */

// function Hello<T>(num:T):T{
//     alert(num.length)
//     return num;
// }

/*数组有length属性*/
function Hello<T>(num:T[]):T[]{
    alert(num.length)
    return num;
}
var List:Array<string>=Hello<string>(["1","2","3"])
for(var i=0;i<List.length;i++){
    alert(List[i])
}