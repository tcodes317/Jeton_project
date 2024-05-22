let mongoose=require("mongoose");

let UserSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"]
    }
});

let User=mongoose.Model("save", UserSchema);

module.exports=User;