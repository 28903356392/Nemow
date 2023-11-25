//* Mixin 混入
var na = {
    name: 'ASD'
};
var na1 = {
    age: 22
};
var nn = Object.assign(na, na1);
console.log(nn); // { name: 'ASD', age: 22 }
//!  2.类的混入
var A1 = /** @class */ (function () {
    function A1() {
        this.type = false;
    }
    A1.prototype.changeType = function () {
        this.type = !this.type;
    };
    return A1;
}());
var A2 = /** @class */ (function () {
    function A2() {
        this.name = '张三';
    }
    A2.prototype.getName = function () {
        return this.name;
    };
    return A2;
}());
//?1
var C2 = /** @class */ (function () {
    function C2() {
        this.type = false;
        this.name = '张三';
    }
    C2.prototype.changeType = function () { };
    C2.prototype.getName = function () { return this.name; };
    return C2;
}());
console.log(Object.getOwnPropertyNames(Object.create(A2).prototype)); // [ 'constructor', 'getName' ]
//?2
//获取A1,A2的原型到C2上  prototype原型
Mixins(C2, [A1, A2]);
console.log(C2.prototype, [A1.prototype, A2.prototype]);
function Mixins(curCls, itemCls) {
    itemCls.forEach(function (item) {
        //Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，
        Object.getOwnPropertyNames(item.prototype).forEach(function (name) {
            curCls.prototype[name] = item.prototype[name];
        });
    });
}
