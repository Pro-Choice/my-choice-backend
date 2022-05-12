/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {content: `Hello everyone. I live in Texas and need to find closest abortion clinic in anohter state. Can anyone help, please?`, votes: 3, answers: 1, user_id :1},
    {content: `Found a clinic, but I'm struggling with covering travel costs. Feeling desperate and need help.`, votes: 5, answers: 0, user_id : 1}
  ]);
};
