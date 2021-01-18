const router = require('express').Router();

router.get('/', (_req, res) => {
res.send('<h1>api response<h1>');


});

module.exports = router;