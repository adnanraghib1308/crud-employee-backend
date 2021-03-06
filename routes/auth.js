var express = require('express');
var router = express.Router();
const {signout, signup, signin, isSignedIn} = require('../dao/auth')
const { check } = require('express-validator');

router.post('/signup', [
    check("name", "Name should be atleast 3 characters long").isLength({min: 3}),
    check("email", "Invalid Email").isEmail(),
    check("password", "Password should be atleast 3 character long").isLength({min: 3})
], signup)

router.post('/signin', [
    check("email", "Invalid Email").isEmail(),
    check("password", "Password field is required").isLength({min: 3})
], signin)

router.get('/signout', signout);

router.get('/testroute', isSignedIn, (req, res) => {
    res.json(req.auth);
})

module.exports = router;