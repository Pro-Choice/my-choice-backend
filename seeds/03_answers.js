/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    // await knex('users').del()
    await knex('answers').insert([
      { content: "Hey, my name is Erica and I can help, here is my email. Please reach out to me and we'll figure something out", question_id:1, user_id: 2, votes: 20},
      { content: "You should call 911 immediatly, you may be in serious danger. Please reach out to me once you're in safety! Here is my email", question_id:2, user_id: 2, votes: 27}
    ]);
  };
  