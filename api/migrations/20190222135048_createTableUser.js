exports.up = function(knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS user (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      idprofile INT UNSIGNED NOT NULL,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(100) NOT NULL,
      username VARCHAR(64) NOT NULL,
      password VARCHAR(64) NOT NULL,
      createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updatedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deletedat DATETIME NULL DEFAULT NULL,
      createdby INT UNSIGNED NOT NULL,
      updatedby INT UNSIGNED NOT NULL,
      deletedby INT UNSIGNED DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      enabled TINYINT(1) NOT NULL DEFAULT 1,
      PRIMARY KEY (id),
      CONSTRAINT fk_users_profile_user
        FOREIGN KEY (idprofile)
        REFERENCES profile (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    )
    ENGINE = InnoDB;
  `)
    .then(()=>{
      return knex.raw(`CREATE UNIQUE INDEX email_UNIQUE ON user (email ASC, deleted ASC);`)
        .then(()=>{
          return knex.raw(`CREATE INDEX login ON user (deleted ASC, email ASC, password ASC);`)
            .then(()=>{
              return knex.raw(`CREATE INDEX deleted ON user (deleted ASC);`)
                .then(()=>{
                  return knex.raw(`CREATE INDEX fk_users_profile_user_idx ON user (idprofile ASC);`)
                })
            })
        })
    })
}
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user')
  }