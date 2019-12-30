exports.up = function(knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS user (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      surname VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(100) NOT NULL,
      username VARCHAR(64) NOT NULL,
      password VARCHAR(64) NOT NULL,
      createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updatedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deletedat DATETIME NULL DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      enabled TINYINT(1) NOT NULL DEFAULT 1,
      PRIMARY KEY (id)
    )
    ENGINE = InnoDB;
  `)
    .then(()=>{
      return knex.raw(`CREATE UNIQUE INDEX email_UNIQUE ON user (email ASC, deleted ASC);`)
        .then(()=>{
          return knex.raw(`CREATE INDEX login ON user (deleted ASC, email ASC, password ASC);`)
            .then(()=>{
              return knex.raw(`CREATE INDEX deleted ON user (deleted ASC);`)
            })
        })
    })
}
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user')
  }