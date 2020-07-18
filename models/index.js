var mongoose=require("mongoose");
mongoose.set('debug',true);

mongoose.connect("mongodb+srv://sanyika:Nem99@cluster0.hg5xp.mongodb.net/orders?retryWrites=true&w=majority")


mongoose.Promise=Promise;
module.exports.Todo=require("./todo")