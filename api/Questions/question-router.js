const router = require('express').Router()
const Questions = require('./question-model')


router.get('/', (req, res, next) => {
    Questions.getAll()
        .then(data => res.json(data))
        .catch(next)
})

router.get('/:subelement', (req, res, next) => {
    Questions.getBySubelement(req.params.subelement)
        .then(data => res.json(data))
        .catch(next)
})

router.put('/correct/:question_id', (req, res, next) => {
    Questions.Correct(req.params.question_id)
        .then(() => res.json('sucess update for correct'))
        .catch(next)
})

router.put('/incorrect/:question_id', (req, res, next) => {
    Questions.Incorrect(req.params.question_id)
        .then(() => res.json('sucess update for incorrect'))
        .catch(next)
})

module.exports = router;
