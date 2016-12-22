/**
 * Created by Ad8888 on 2016/12/22.
 */
var isBoolean: boolean;
function tell() {
    alert(isBoolean)
}
// tell()

var num: number = 10;

var list1: number[] = [1, 2, 3, 4];
var list2: Array<string> = ['q', 'w', 'e', 'r'];

enum Color{red = 1, green = 3, blue = 8}
var colorName: string = Color[8];
// alert(colorName)
var c: Color = Color.blue
// console.log(c)

/*类型检查   结果的值是：最后一次的赋值*/
var is: number = 123;
var notSure: any = 10;
notSure = "hello";
// notSure=true;
// console.log(notSure)

var list: any[] = [1, 'q', false];
console.log(list[2])


/*void 声明函数
      不需要有返回值
 string number boolean any
      需要有返回值
*/
function tells(): string {
    return "hello";
}
function tells1():number{
    return 123;
}
function hell():void{

}