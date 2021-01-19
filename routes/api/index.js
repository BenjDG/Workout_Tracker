const router = require('express').Router();
const db = require('../../models');

// GET /workouts
router.get('/workouts', (_req, res) => {
  db.Workout.find({}).then(r => {
    res.status(200).json(r);
  });
});

// PUT /workouts:id
router.put('/workouts/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  db.Workout.findById(id, function (err, doc) {
    if (err) console.error(err);
    doc.exercises.push(data);
    doc.save();
  })
    .then(r => {
      res.status(200).json(r);
    })
    .catch(err => console.error(err));
});

// POST /workouts
router.post('/workouts', (req, res) => {
  db.Workout.create(req.body).then(r => {
    console.log('new record created');
    res.status(200).json(r);
  });
});

// GET /workouts/range
router.get('/workouts/range', (_req, res) => {
  db.Workout.find({}).then(r => {
    res.status(200).json(r);
  });
});

module.exports = router;
