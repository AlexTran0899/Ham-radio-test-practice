exports.up = async (knex) => {
    await knex.schema
      .createTable('subelement', (subelement) => {
        subelement.integer('class')
        subelement.string('subelement_Id')
        subelement.string('subelement_Title')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('subelement')
  }
  