var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Guest = require("./models/Guest.js")
var app = express();
var PORT = process.env.PORT || 3000;

const CONN_STRING3 = "mongodb://pmeiler:Axion912@ds237373.mlab.com:37373/weddingapp"
const CONN_STRING2 = "mongodb+srv://daedalus87:3LGrFX2olvYwoDLz!A1A2A3@cluster0-ms8bj.mongodb.net/test?retryWrites=true"
const CONN_STRING = "mongodb://daedalus87:3LGrFX2olvYwoDLz!A1A2A3@cluster0-shard-00-00-ms8bj.mongodb.net:27017,cluster0-shard-00-01-ms8bj.mongodb.net:27017,cluster0-shard-00-02-ms8bj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
app.set("view engine","ejs");
mongoose.connect(CONN_STRING3);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: false}));

//GET-INDEX
app.get("/",function(req,res){
	res.render("./public/index")
});

//GET-ROUTE to find Form
app.get("/form",function(req,res){
	res.render("./public/form");
});

//POST-ROUTE for saving the rsvp Data
app.post("/form",function(req,res){

	var name = req.body.name;
	var numb = req.body.numb;
	var email = req.body.email;
	var tel = req.body.tel;
	var coming = req.body.coming;
	var guests = "";
	for(var i=0;i<=numb-2;i++){
		guests = guests + req.body["gname" + i] + "  // ";
	}
	Guest.create({
				name:name,
			    number: numb,
			    email: email,
			    tel:tel,
			    coming:coming,
			    guests:guests
				},function(err,guest){
					if(err){
						console.log(err);
						res.render("/form",{message:"Fehler"})
					}else{
						console.log(guest);
						res.redirect("/thanks");
					}
				});
	console.log(req.body);
	console.log(name+ " " + numb + " " + email +" " + tel + " " + coming);

});

//Contact
app.get("/hotelinfo",function(req,res){
	res.render("./public/contact");
});

//admin
app.get("/pasjimasjiadmin",function(req,res){
	Guest.find({coming:"coming"}, function(err,guest){
		if(err){
			res.status(404).send(err);
		}else{
			res.render("./public/admin",{guest:guest});	
		}
	});
	
});

//galery
app.get("/galery",function(req,res){
	res.render("./public/galery");
});

//galery
app.get("/thanks",function(req,res){
	res.render("./public/thanks");
});


//invitation
app.get("/invitation",function(req,res){
	res.render("./public/invitation");
});


//location
app.get("/location",function(req,res){
	res.render("./public/location");
});

//

app.listen(PORT, function(){
	console.log("Server is listening on " + PORT);
	console.log(__dirname);
});