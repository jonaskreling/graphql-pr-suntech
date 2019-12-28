exports.up = function(knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS profileaction (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      idprofile INT UNSIGNED NOT NULL,
      idaction INT UNSIGNED NOT NULL,
      createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updatedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      deletedat DATETIME NULL DEFAULT NULL,
      createdby INT UNSIGNED NOT NULL,
      updatedby INT UNSIGNED NOT NULL,
      deletedby INT UNSIGNED DEFAULT NULL,
      deleted TINYINT(1) NOT NULL DEFAULT 0,
      PRIMARY KEY (id),
      CONSTRAINT fk_profile_action_profile1
        FOREIGN KEY (idprofile)
        REFERENCES profile (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT fk_profile_action_action1
        FOREIGN KEY (idaction)
        REFERENCES action (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    )
    ENGINE = InnoDB;
  `)
    .then(() => {
      return knex.raw(`CREATE INDEX deleted ON profileaction (deleted ASC);`)
        .then(() => {
          return knex.raw(`CREATE INDEX fk_profileaction_profile_1_idx ON profileaction (idprofile ASC);`)
            .then(() => {
              return knex.raw(`CREATE INDEX fk_profile_action_action_1_idx ON profileaction (idaction ASC);`)
                .then(() => {
                  return knex.raw(`CREATE UNIQUE INDEX id_user_profile_UNIQUE ON profileaction (deleted ASC, idprofile ASC, idaction ASC);`)
                })          
            })          
        })
    })
}
  
exports.down = function(knex) {
  return knex.schema.dropTable('profileaction')
}