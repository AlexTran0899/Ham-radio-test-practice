const db = require('../data/db-config')


function getAll() {
    return db('questions')
}

function getBySubelement(subelement) {
    return db('questions').where({subelement})
}
async function Correct(question_id) {
    const amount = await db('questions').where({question_id}).select('correct').first()
    amount.correct += 1
    return db('questions').where({question_id}).update(amount)
}

async function Incorrect(question_id) {
    const amount = await db('questions').where({question_id}).select('incorrect').first()
    amount.incorrect += 1
    return db('questions').where({question_id}).update(amount)
}


module.exports = {
    getAll,
    getBySubelement,
    Correct,
    Incorrect
}
