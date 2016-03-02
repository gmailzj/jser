/**
 *倒计时模块
 */

define(['Class','jquery', 'template'],function(Class, $, TPL) {

	function CountDown(){
	}

	var days = 24*60*60, hours = 60*60, minutes = 60;
	CountDown.prototype={
		run:function(prop){

			//默认参数
			var options = $.extend({
				callback:function(){},
				timeoutCallback:function(){},
				timestampEnd:0
			}, prop)
			

			~function tick(){

				var timeStampBegin = (new Date()).getTime();

				var timestampEnd = options.timestampEnd;
				console.log(timeStampBegin, timestampEnd);
				var leftTime = Math.floor((timestampEnd - timeStampBegin)/1000);
				if(leftTime<0){
					leftTime = 0;
				}
				var d,h,m,s;
				d = Math.floor(leftTime / days);
				leftTime -= d*days;


				h = Math.floor(leftTime / hours);
				leftTime -= h*hours;

				m = Math.floor(leftTime / minutes);
				leftTime -= m*minutes;

				s = leftTime;
				console.log(d,h,m,s);

				var dString = d,hString=h,mString=m,sString=s;
				if(d<10){
					dString="0"+d;
				}
				if(h<10){
					hString="0"+h;
				}
				if(m<10){
					mString="0"+m;
				}
				if(s<10){
					sString="0"+s;
				}
				options.callback({d:dString,h:hString,m:mString,s:sString});
				if(d==0 && h==0 && m==0 && s==0){
					
					options.timeoutCallback({d:d,h:h,m:m,s:s});
				} else {
					setTimeout(tick, 1000)
				}
			}()

		}
	}

    return CountDown ;
});