/**
 * Created by Ad8888 on 2016/12/21.
 */

/*
 * Module模式：
 * 1.模块化、可重用
 * 2.封装变量和函数
 */

// interface StringValidator {
//     isAcceptable(s: string): boolean
// }
// var letterRegexp = /^[A-Za-z]+$/;
// var numberRegexp = /^[0-9+]$/;
// class LettersOnValidator implements StringValidator {
//     isAcceptable(s: string): boolean {
//         return undefined;
//     }
// }
//
// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string): boolean {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

module Validator {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    var letterRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9+]$/;
    export class LettersOnValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return undefined;
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
module Timer{
    export class Test{
        element:HTMLElement;
        span:HTMLElement;
        timer:number;
        constructor(e:HTMLElement){
            this.element=e;
            this.element.innerHTML="现在时间是：";
            this.span=document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML=new Date().toTimeString();
        }
        start(){
            this.timer=setInterval(()=>this.span.innerHTML=new Date().toTimeString())
        }
        stop(){
            clearInterval(this.timer)
        }
    }
}