/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
 
  // The base Class implementation (does nothing)
  //基类构造函数
  //这里的this只的是window，这样Class就巧妙的变成全局作用域了
  this.Class = function(){};
 
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {


    //this 基类构造函数 一开始的时候就是全局的Class构造器，以后就代表基类
    //_super指的是基类的原型
    var _super = this.prototype;
   

    initializing = true;

    
    var prototype = new this();
    initializing = false;
    
    //通过将子类的原型指向父类的一个实例对象来完成继承

    for (var name in prop) {


      //下面的逻辑运算部分
      // 如果父类和子类有同名方法，并且子类中此方法（name）通过_super调用了父类方法
      // -- 则重新定义此方法
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?

        /*可以替换为一个局部函数func 开始*/
        (function(name, fn){
          return function() {
            var tmp = this._super;
            this._super = _super[name];           
            var ret = fn.apply(this, arguments);        
            this._super = tmp;//
            return ret;
          };
        })(name, prop[name])
        /* fn(name, prop[name]); 可以替换为一个局部函数func 结束*/
        :
        prop[name];
    }
   
    //构造器
    function Class() {
      // 初始化操作
      /* 用create方法来实现了
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
      */  
    }
   
    // 实现继承：子类的prototype指向父类的实例，最通用的继承手段
    Class.prototype = prototype;
   
    // 修正constructor指向错误
    Class.prototype.constructor = Class;
 
    // And make this class extendable
    // 子类自动获取extend方法，arguments.callee指向当前正在执行的函数，为下一个继承做准备
    Class.extend = arguments.callee;


    //类实例化统一方法
    Class.create = /*Class.prototype.create =*/ function () {

        var instance = new this();

        if (instance.init) {
            instance.init.apply(instance, arguments);
        }

        return instance;
    }
   
    return Class;
  };

  //AMD模块定义入口
  define("Class",[], function(){

    return Class;
  })

})();


