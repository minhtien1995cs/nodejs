'use strict';

const express = require('express');

const router = express.Router();

// router.get('', (req, res, next) => {
//     return res.json({
//         message: 'Hello',
//     });
// });

router.use('/v1/api', require('./access'));

module.exports = router;
