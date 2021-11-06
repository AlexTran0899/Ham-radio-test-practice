const db = require('../data/db-config')


function getAll() {
    return db('questions')
}

async function getByClass(hamClass) {
    const subelement = await db('subelement').where({class:hamClass})
    const questions = await db('questions').where({ class: hamClass }).orderBy('question_id')
    const formatedData = subelement.map(each => {
        each.subelement = [questions.filter(Id => Id.subelement === each.subelement_Id)]
        return each
    })
    return formatedData
}
async function Correct(question_id) {
    const amount = await db('questions').where({ question_id }).select('correct').first()
    amount.correct += 1
    return db('questions').where({ question_id }).update(amount)
}

async function Incorrect(question_id) {
    const amount = await db('questions').where({ question_id }).select('incorrect').first()
    amount.incorrect += 1
    return db('questions').where({ question_id }).update(amount)
}


module.exports = {
    getAll,
    getByClass,
    Correct,
    Incorrect
}
