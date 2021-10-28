exports.up = async (knex) => {
    await knex.schema
      .createTable('questions', (questions) => {
        questions.increments('question_id')
        questions.integer('class')
        questions.integer('subelement')
        questions.integer('section')
        questions.integer('question_number')
        questions.string('question')
        questions.string('correct_answer')
        questions.string('A')
        questions.string('B')
        questions.string('C')
        questions.string('D')
        questions.string('explanation')
        questions.string('video_url')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('questions')
  }
  