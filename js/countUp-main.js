require(['countUp'],function(CountUp){
	var options = {
	  useEasing : true, 
	  useGrouping : true, 
	  separator : ',', 
	  decimal : '.', 
	  prefix : '', 
	  suffix : '' 
	};
	var demo = new CountUp("myTargetElement", 0, 2797, 1, 2.5, options);
	demo.start();
})