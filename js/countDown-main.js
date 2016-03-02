require(["countDown","jquery"],function(CountDown,$){

	var a = 1;
	//文档加载完
	$(document).ready(function(){
		console.log('load');

		var countDown = new CountDown;
		countDown.run({
			timestampEnd:1456673908909,
			callback:function(ret){
				console.log(ret)
				var html = ret.m+":"+ret.s;
				$("#countTimer").html(html);
			}
		});

		countDown.run({
			timestampEnd:(new Date).getTime()+1233600,
			callback:function(ret){
				console.log(ret)
				var html = ret.m+":"+ret.s;
				$("#countTimer2").html(html);
				//console.log(a);
			}
		});
		a++;
	})
})
