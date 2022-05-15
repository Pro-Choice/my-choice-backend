/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("questions").del();
  await knex("questions").insert([
    {
      content:
        "Hello, I'm from Texas and need to get an abortion. What state will be the easiest to go to for the procedure in my case?",
      votes: 5,
      answers: 1,
      user_id: 1,
    },
    {
      content:
        "Help!! I'm from Alabama and need to get an abortion. My partner is abusing me and I have no money. I'm feeling really desperate.",
      votes: 5,
      answers: 1,
      user_id: 3,
    },
  ]);
};
