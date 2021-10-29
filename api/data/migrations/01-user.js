exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('password', 200).notNullable()
      users.string('email', 200).notNullable()
      users.string('img', 200)
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
