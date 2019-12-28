exports.up = function(knex) {
  return Promise.all([
    knex.raw(`
      INSERT INTO profile(id, name, slug, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(1, 'Administrador', 'admin', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profile(id, name, slug, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(2, 'Usuário', 'usuario', '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `), 

    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(1, 'User', 'user managment', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(2, 'User', 'user managment', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(3, 'User', 'user managment', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(4, 'User', 'user managment', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(5, 'User', 'user managment', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),


    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(6, 'Profile', 'profile management', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(7, 'Profile', 'profile management', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(8, 'Profile', 'profile management', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(9, 'Profile', 'profile management', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(10, 'Profile', 'profile management', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),

    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(11, 'Action', 'action management', 'b','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(12, 'Action', 'action management', 'r','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(13, 'Action', 'action management', 'e','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(14, 'Action', 'action management', 'a','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO action(id, name, description, type, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES(15, 'Action', 'action management', 'd','2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),

    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 2, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 3, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 4, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 5, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 6, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 7, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 8, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 9, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 10, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 11, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 12, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 13, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 14, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (1, 15, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
    
    knex.raw(`
      INSERT INTO profileaction(idprofile, idaction, createdat, updatedat, deletedat, createdby, updatedby, deletedby, deleted) VALUES (2, 1, '2019-08-29 11:54:37.000', '2019-08-29 11:54:37.000', NULL, 1, 1, NULL, 0);
    `),
  ])
}

exports.down = function(knex) {
  return Promise.all([
    knex.raw(`
      set foreign_key_checks = 0;
    `),
    knex.raw(`
      TRUNCATE TABLE profileaction;
    `),
    knex.raw(`
      TRUNCATE TABLE action;
    `),
    knex.raw(`
      TRUNCATE TABLE profile;
    `),
    knex.raw(`
      set foreign_key_checks = 1;
    `),
  ])
}