'use strict';

const express = require('express');
const accessController = require('../../controllers/access.controller');

const router = express.Router();

// router.get('', (req, res, next) => {
//     return res.json({
//         message: 'Hello',
//     });
// });

// signUp
router.post('/shop/signup', accessController.signUp);

module.exports = router;
