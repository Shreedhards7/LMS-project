const express = require('express')
const routes = express.Router();

const {seeallassignment,
    addassignment
} = require('../controller/assignment')


routes.route('/').get(seeallassignment)
routes.route('/:id').post(addassignment)


module.exports=routes