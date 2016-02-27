
// Class.extend的参数为对象字面量object
// Class.extend({key:value})

var Person = Class.extend({
    // init是构造函数
    init: function(name) {

        //  在初始化这里 我们定义要用到的N个属性
        this.name = name;
    },
    getName: function() {
        return this.name;
    }
});

// Employee类从Person类继承
var Employee = Person.extend({
    // init是构造函数
    init: function(name, employeeID) {
        //  在构造函数中调用父类的构造函数
        this._super(name);

        //  在初始化这里 我们定义要用到的N个属性
        this.employeeID = employeeID;
    },
    getEmployeeID: function() {
        return this.employeeID;
    },
    getName: function() {
        //  调用父类的方法
        return "Employee name: " + this._super();
    }
});

var zhangsan = new Person("zhangsan");
console.log(zhangsan.getName()); 


var lisi = new Employee("lisi", "0001");
console.log(lisi.getName());  

/*总结



*/ 