const express = require('express')
const routes = express.Router();

const {getallstudent,
    registerstudent,
    getstudentbyreg,
    getstudentbyalpha,
    loginstudent,
} = require('../controller/student')


routes.route('/').get(getallstudent).post(registerstudent)
routes.route('/:id').post(loginstudent)


module.exports=routes

