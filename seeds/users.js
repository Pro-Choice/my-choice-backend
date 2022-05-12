/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {email: 'mariagonzalez@gmail.com', username:"mariag92", password: "yjk78Ask"},
    {email: 'erikajones21@gmail.com', username:"erikaJones", password: "9bj3k21", first_name: "Erika", last_name: "Jones", bio: "Abortion rights activist"},
  ]);
};
