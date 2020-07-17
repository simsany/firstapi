mongoose=require("mongoose");

var toDoSchema= new mongoose.Schema(
{
	
	name:{type: String,
	required:"give name"},
	
	completed:{type: Boolean, 
	default: false},
	
	date:{type: Date, default: Date.now}
	
	
	
}




)

var Todo=mongoose.model('Todo',toDoSchema);

module.exports=Todo;