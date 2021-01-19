const router = require('express').Router();
const path = require('path');

router.get('/', (_req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/exercise', (_req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../public/exercise.html'));
});

router.get('/stats', (_req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../public/stats.html'));
});

module.exports = router;
