const express = require('express')
const routes = express.Router();

const {getallteacher,
    registerteacher,
    loginteacher,
} = require('../controller/teacher')


routes.route('/').get(getallteacher).post(registerteacher)
routes.route('/:id').post(loginteacher)


module.exports=routes