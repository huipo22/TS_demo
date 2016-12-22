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

    print() {
        return this.name + "==" + this.age;
    }
}

var p =new Person("huhuibo",200);
console.log(p.print())