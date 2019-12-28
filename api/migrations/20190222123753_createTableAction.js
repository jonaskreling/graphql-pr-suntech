exports.up = function(knex) {
  console.log({ knex })
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS action (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(64) NOT NULL,
      description VARCHAR(256) NULL,
      type varchar(1) NOT NULL,
      createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updatedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deletedat DATETIME NULL DEFAULT NULL,
      createdby INT UNSIGNED NOT NULL,
      updatedby INT UNSIGNED NOT NULL,
      deletedby INT UNSIGNED DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      PRIMARY KEY (id),
      INDEX deleted (deleted ASC) ,
      UNIQUE INDEX name_UNIQUE (deleted ASC, name ASC, type ASC)
    )
    ENGINE = InnoDB;
  `)
}
  
exports.down = function(knex) {
  return knex.schema.dropTable('action')
}