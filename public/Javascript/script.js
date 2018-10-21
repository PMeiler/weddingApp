//alert("test")
//var endDat = new Date("December 15,2018,18:00:00");

window.setInterval(function(){
 var timeObj = getTimes(new Date("December 15,2018,18:00:00"),new Date());
 $(".countdown").text("Countdown " + timeObj.days + ":" + timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds);
 //console.log(timeObj.hours + ":" + timeObj.minutes + ":" + timeObj.seconds );
}, 1000);



function getTimes(endDate, startDate){
	var delta = Math.abs(endDate - startDate) / 1000;
	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400);
	delta -= days * 86400;
	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	// what's left is seconds
	var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

	var timeObj = {
					days:
						days,
					hours: 
						hours,
					minutes:
					   	minutes,
					seconds:
					   	seconds
				   	};
	return timeObj;
}