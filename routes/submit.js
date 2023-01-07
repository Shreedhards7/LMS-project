const express = require('express')
const routes = express.Router();

const {getallbyreg_id,
    getallbyassignment,
} = require('../controller/submit')


routes.route('/').get(getallbyreg_id)
routes.route('/:id').get(getallbyassignment)


module.exports=routes

