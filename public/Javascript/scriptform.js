//alert("test")
//var endDat = new Date("December 15,2018,18:00:00");


$("#numb").change(function(){
	$(".addedItem").remove();
	var numbVal = $("#numb").val();	
	if(numbVal>1){
		numbVal-=1;
		var content = "";
		console.log("Loop begins:")
		for(var i=0;i<=numbVal-1;i++){
			content = "<div class='form-group'> ";
			content = content + "<input class='form-control addedItem' type='text' name='gname" + i + "' placeholder='First Name and Last Name' required>";
			content=content + " </div>";
			$("#numbGroup").before(content);
		}
	}
	
});
