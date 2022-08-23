const express = require("express");
const router = express.Router();
const { createUser, createLogin } = require('../controllers/userController')


router.get('/', function (req, res) {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})



router.post("/user", createUser)
router.post("/login", createLogin)



module.exports = router