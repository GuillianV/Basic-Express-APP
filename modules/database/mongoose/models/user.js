let mongoose = require("../mongooseInit")
var sanitize = require('mongo-sanitize');

//Schema
const UserSchema = new mongoose.Schema({
    name: String,
    creation : Date
});

//Schema methods
UserSchema.methods.GetCreation = function () {
    const creationAwnser = this.name ? `${this.name} was created at ${this.creation}` : "Invalid";
    console.log(creationAwnser);
};

UserSchema.methods.UpdateName = async function (_name) {
    this.name = _name;
    await this.save()
};

//Create Model
const User = mongoose.model('user', UserSchema);


//Add Queries
User.FindUserById = async (id) => {
    let userData =await User.findOne({_id:sanitize(id)});
    return userData

}

User.CreateUser = async (_name) => {

    let searchUser =  await User.findOne({name:_name}).catch(error => {
        console.log(error)
        return null
    });

    if (searchUser == null){

        let newUser = new User({name: _name, creation: Date.now()})
        await newUser.save()
        return newUser;

    } else {
        console.log("User " + searchUser.name + " Already exist")
        return null
    }




}


module.exports = User;

