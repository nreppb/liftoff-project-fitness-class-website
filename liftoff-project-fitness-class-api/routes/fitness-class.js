const router = require('express').Router();
let FitnessClass = require('../models/fitness-class.model');
const ObjectID = require('mongodb').ObjectID;

router.route('/').get((req, res) => {
    FitnessClass.find()
    .then(fitnessClass => res.json(fitnessClass))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const userId = req.body.userId;
    const date = req.body.date;
    const time = req.body.time;
    const webinar = req.body.webinar;
    const pictureUrl = req.body.pictureUrl;

    const newFitnessClass = FitnessClass({
        name,
        description,
        userId,
        date,
        time,
        webinar,
        pictureUrl
    });

    newFitnessClass.save()
    .then(() => res.json('Fitness Class added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/filter/:type/:value', (req, res, next) => {
//     const { type, value } = req.params; 
//     req.collection.find({ [type]: value })
//       .toArray()
//       .then(results => res.json(results))
//       .catch(err => res.send(err));
//   });

router.get('/filters', (req, res, next) => {
    const fields = ['name', 'description', 'date'];
    const dbRequests = fields.map(field => 
      req.collection
        .distinct(field)
        .then(data => ({ field, data: data.sort() }))
      );
    
    Promise.all(dbRequests)
      .then(results => {
        const reducedResults = results.reduce((acc, {field, data}) => ({ ...acc, [field]: data }), {})
        res.json(reducedResults);
      })
      .catch(err => res.send(err));
  });
  
  
  router.get('/fitness-class', (req, res, next) => {
    req.collection.find({})
      .toArray()
      .then(results => res.json(results))
      .catch(err => res.send(err));
  });
  
  router.get('/filter/:type/:value', (req, res, next) => {
    const { type, value } = req.params; 
    req.collection.find({ [type]: value })
      .toArray()
      .then(results => res.json(results))
      .catch(err => res.send(err));
  });

// router.get('/:id', (req, res, next) => {
//     const _id = ObjectID(req.params.id);
//     req.collection.findOne({ _id })
//       .then(results => res.json(results))
//       .catch(err => res.send(err));
//   });

  router.route('/:id').get((req, res, next) => {
    const _id = ObjectID(req.params.id);
    FitnessClass.findOne({ _id }) 
    .then(fitnessClass => res.json(fitnessClass))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;