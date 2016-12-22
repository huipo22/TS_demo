/**
 * Created by Ad8888 on 2016/12/22.
 */

// class Person{
//     /*static 静态   类名调用 Person.name*/
//     static name:string;
//     tell() {
//         alert("name:"+Person.name)
//     }
// }
// var p=new Person();
// Person.name="huipo";
// p.tell();

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet(){
        return "Hello,"+this.greeting;
    }
}
// var green:Greeter;
// green=new Greeter("huipo22");
// alert(green.greet())
var green:Greeter=new Greeter("huipo22");
alert(green.greet())