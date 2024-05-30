var a = function () {
    var flag = true;
    var num = 1;
    var str = '1';
    var obj = {};
    var arr = [];
    var any = 2;
    var un = undefined;
    var n = null;
    var n1 = 100;
    // n1 = '200'
    //*1 联合类型 定义多种类型
    var id = 1;
    id = '200';
    // 任意类型
    var x1 = 100;
    x1 = '200';
    x1 = true;
    //*2 数字类型的定义 类型+[] number[]
    var arr1 = [1, 2];
    var arr2 = ['1'];
    var arr3 = ['1', 2];
    // 数组泛型
    var arr4 = ['1', 2];
    //*3 object 对象的类型定义
    var o1 = {
        id: 1,
        user: 'o1',
        age: 18
    };
    var o2 = {
        age: 1,
        id: '2',
        action: function (e) {
            return e;
        }
    };
    // 函数 function 输入类型 输出类型
    function sun(n1, n2) {
        return n1 + n2;
    }
    sun(1, 2); // 3
    function fn(n1, n2) {
        if (n1 > n2) {
            console.log('ok');
        }
    }
    fn(2, 1); // 'ok'
};
a();
