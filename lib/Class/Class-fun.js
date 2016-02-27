// Class.extend的参数为 new 一个匿名构造函数, 也是一个object
// Class.extend(new function(){}) =>Class.extend(obj)


//播放页有用到

//形式1
var KankanObj = Class.extend(new function(){

  //初始化1:外面也可以初始化一些数据或者属性
  this.isIE = ((navigator.appName).indexOf("Microsoft")!=-1);
  //是obj的，最终是拓展到KankanObj类的原型链上面的属性



  this.init = function(){

    //初始化2：  在初始化这里 我们定义要用到的N个属性
    //是kkObj的实例属性   
    this.isIE = ((navigator.appName).indexOf("Microsoft")!=-1);

  };
  this.mStatSend = function(url){
    var img = new Image(1,1);
    img.onerror = function(){};
    img.src = url;
  };

  //等等
});

//实例化
var kkObj = new KankanObj();




//形式2 闭包 私有变量的形式

/**
 * @desc 收藏列表
 * @class kkPageFav
 */
var kkPageFav = Class.extend(new function(){


  /*内部变量和方法*/
  var listLength = 0 ,
    modFav = $('mod_fav'),
    favBody = $('fav_body'),
    fieldDelimiter = '@@',  //字段分割符
    itemDelimiter = '||';   //条记录分隔符


  function init(){  
    self = this;   
    if( noFavTip && favList && favHead && modFav && favBody ){
       clearFav();
       bindEvent();
    }                 
  }
  
  function clearFav(){

  }

  function prepareFav(){ 

  }

  //收藏夹hover后显示，登陆登出重新绘制收藏夹
  function bindEvent(){
    modFav.attachEvent('onmouseover',function(){ show(favBody);});  
  }

  function showFavBody(){ 

  }

  //闭包，返回对外的接口
  return {
    init : init,
    prepareFav:prepareFav,
    clearFav:clearFav
  };

});