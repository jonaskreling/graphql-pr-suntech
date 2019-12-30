exports.up = function(knex) {
  return Promise.all([
    knex.raw(`
      INSERT INTO user(
        name,
        surname,
        email,
        phone,
        username,
        password
      ) 
      VALUES (
        'jonas', 
        'franco kreling', 
        'jonasfrancokreling@gmail.com',
        '4898486652', 
        'jonaskreling',
        '123'
      );
    `),
  ])
}

exports.down = function(knex) {
  return Promise.all([
    knex.raw(`
      set foreign_key_checks = 0;
    `),
    knex.raw(`
      TRUNCATE TABLE user;
    `),
    knex.raw(`
      set foreign_key_checks = 1;
    `),
  ])
}