let mongoose = require("../mongooseInit")

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


//Add Servces
User.FindUserById = async (id) => {
    let userData =await User.findOne({_id:id});
    return userData

}

module.exports = User;

