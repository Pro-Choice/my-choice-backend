/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('answers').del()
  await knex('answers').insert([
    {content: `Hello, my name is Erica and I'm advocationg for abortion rights. Here is my email. Please reach out to me, and we'll figure something out`, question_id: 2, user_id:2, votes:5},
    {colName: "I know couple good clinics in Cali and could possibly assist with some part of travel costs", question_id: 1, user_id: 3, votes: 16 },
  ]);
};
