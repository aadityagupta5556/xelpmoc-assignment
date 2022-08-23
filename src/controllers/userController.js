const userModel = require('../Models/userModel')

const createUser = async function (req, res) {

    const data = req.body
    let saveData = await userModel.create(data)
    return res.redirect('login.html')


}


//login part for user model

const createLogin = async function (req, res) {

    const data = req.body
    const email = data.email
    const password = data.password

    const checkingUserDb = await userModel.findOne({ email: email, password: password })
    if (!checkingUserDb){
        return res.redirect('message.html')
    }

        else{
    return res.redirect('fibonacci.html')
        }

}

module.exports = {
    createUser, createLogin
}