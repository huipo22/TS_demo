/**
 * Created by Ad8888 on 2016/12/22.
 */
/*
 * Symbols是不可改变且唯一的。
 * */
let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.log(sym2 === sym3); // false, symbols是唯一的