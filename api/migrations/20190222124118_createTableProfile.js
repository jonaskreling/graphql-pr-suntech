exports.up = function(knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS profile (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      slug VARCHAR(100) NOT NULL,
      createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updatedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deletedat DATETIME NULL DEFAULT NULL,
      createdby INT UNSIGNED NOT NULL,
      updatedby INT UNSIGNED NOT NULL,
      deletedby INT UNSIGNED DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      PRIMARY KEY (id)
    )
    ENGINE = InnoDB;
  `)
    .then(() => {
      return knex.raw(`CREATE INDEX deleted ON profile (deleted ASC);`)
        .then(() => {
          return knex.raw(`CREATE UNIQUE INDEX name_UNIQUE ON profile (deleted ASC, name ASC);`)
        })
    })
}
  
exports.down = function(knex) {
  return knex.schema.dropTable('profile')
}