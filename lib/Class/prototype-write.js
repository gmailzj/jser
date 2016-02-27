function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
Person.prototype.age = 20;
Person.prototype.ageAdd = function(){
  console.log(this);
  this.age++;//这个写操作会导致实例 添加自己age属性
  console.log(this);
};
Person.prototype.showAge = function(){console.log(this.age);};

Person.prototype.data = ['d1','d2'];
Person.prototype.dataPush = function(item){this.data.push(item);};
Person.prototype.showData = function(){console.log(this.data);};

var zhang1 = new Person("Zhang1", "man");
var zhang2 = new Person("Zhang2", "man");

console.log(zhang1.age);//  20
//zhang1.age=21;
zhang1.ageAdd();//写操作 赋值
console.log(zhang1.age);//  21
console.log(zhang2.age);//  20

delete zhang1.age;
zhang1.showAge();       //  20

zhang1.showData();//  ["d1", "d2"] 
zhang1.dataPush('d3');//写操作 修改数据
zhang1.showData();//  ["d1", "d2", "d3"] 
zhang2.showData();//  ["d1", "d2", "d3"] 

var a = delete zhang1.data;
//var a = delete Person.prototype.data;
zhang1.showData();//    ["d1", "d2", "d3"]      
zhang1.data = [];//实例赋值
zhang2.showData();//    ["d1", "d2", "d3"]