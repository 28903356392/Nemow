var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dom = /** @class */ (function () {
    function Dom() {
    }
    //创建dom
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    //设置dom的text
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    //生成dom元素
    Dom.prototype.render = function (createElement) {
        var _this = this;
        var _a;
        //原生渲染dom， 挂载到id app上
        var el = this.createElement(createElement.tag);
        el.innerText = createElement.text;
        if (createElement.children && Array.isArray(createElement.children)) {
            createElement.children.forEach(function (item) {
                var _a;
                var child = _this.render(item);
                _this.setText(child, (_a = item.text) !== null && _a !== void 0 ? _a : null);
                el.appendChild(child);
            });
        }
        else {
            this.setText(el, (_a = createElement.text) !== null && _a !== void 0 ? _a : null);
        }
        return el;
    };
    return Dom;
}());
//继承Dom派生类
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(option) {
        var _this = _super.call(this) || this;
        _this.option = option;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        var app = typeof this.option.el == 'string' ? document.querySelector(this.option.el) : this.option.el;
        var data = {
            tag: 'div',
            text: "asd",
            children: [{
                    tag: 'div',
                    text: "子"
                }]
        };
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
        this.mount(app);
    };
    Vue.prototype.mount = function (app) {
        return document.body.append(app);
    };
    return Vue;
}(Dom));
//调用方法
Vue;
