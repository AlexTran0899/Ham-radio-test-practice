exports.up = async (knex) => {
    await knex.schema
      .createTable('questions', (users) => {
        users.integer('class')
        users.integer('subelement')
        users.integer('section')
        users.integer('question_number')
        users.string('question')
        users.string('correct_answer')
        users.string('A')
        users.string('B')
        users.string('C')
        users.string('D')
        users.string('explanation')
        users.string('video_url')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('questions')
  }
  