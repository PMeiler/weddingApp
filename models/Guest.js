var mongoose = require("mongoose");
var expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var guestSchema = new mongoose.Schema({
        name: String,
        number: Number,
        email:{
            type: String,
            validate:{
                validator: function(v){
                    return expr.test(v);
                },
                message: "{VALUE} is not a real URL!"
            }
        },
        tel: Number,
        coming: String,
        guests: String
});

var Guest = mongoose.model("Guest",guestSchema);


module.exports = Guest;