const router = require('express').Router();
const db = require('../../models');



router.post('/workouts', (req, res) => {
console.log(req.body);
// res.send('<h1>api response<h1>');

});

// GET /workouts
router.get('/workouts', (_req, res) => {

  db.Workout.find({})
  .then(r => {
    console.log(r);
    console.log(r[0]);
    console.log(r[0].exercises[0].duration);
  res.status(400).json(r);
  })
});

// PUT /workouts:id

// POST /workouts

// GET /workouts/range



module.exports = router;