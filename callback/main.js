require(['countDown'],function(CountDown){

		var data = [2,4,6,8];
		function callback_list(){
			for(var item in data){
				console.log(data[item]);
			}
		}
		function getList(fn){
			var data = [1,3,5,7];
			fn();
		}
		getList(function(){
			
			var countDown = new CountDown;
			var expire = new Date().getTime()+3600*1000;
			var abc =1;
			var $wrapper = $("#countDown");

			countDown.run({
				timestampEnd:(expire),
				callback:function(ret){
                    ret.h = parseInt(ret.h,10);
                    if(ret.h>0){
                        ret.m = ret.h*60+parseInt(ret.m,10);
                    }
					var html = ret.m+":"+ret.s;
					$wrapper.html(html+abc);
				}
			});
			
		});

})