/**
 * Created by Ad8888 on 2016/12/22.
 */
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tell() {
        return this.name + "--" + this.age;
    }
}
class Student extends Person {
    school: string;
    constructor(school: string) {
        // this.school=school;
        /*父类方法*/
        super("huhuibo",56);
    }

    tell() {
        return this.name + "--" + this.age + "--" + this.school;
    }
}
var s = new Student("baiyis");
// s.name="asdf";
// s.age=450;
// s.school="baiyi";
console.log(s.tell())