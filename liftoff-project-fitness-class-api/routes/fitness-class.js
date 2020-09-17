const router = require('express').Router();
let FitnessClass = require('../models/fitness-class.model');


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

module.exports = router;