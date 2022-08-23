const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },

        lname: {
            type: String,
            required: true,

        },

        email: {
            type: String,
            required: true,

        },

        password: {
            type: String,
            required: true,

        },


    },
    { timeStamps: true }

)


module.exports = mongoose.model('user', userSchema)