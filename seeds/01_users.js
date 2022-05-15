/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex("users").insert([
    {
      email: "mariagonzalez@gmail.com",
      username: "mariag92",
      password: "yjk78Ask",
    },
    {
      email: "erikajones21@gmail.com",
      username: "erikaJones",
      password: "9bj3k21",
      first_name: "Erika",
      last_name: "Jones",
      bio: "Abortion rights activist",
    },
    {
      email: "svetlanabriggs@gmail.com",
      username: "svetlana11",
      password: "157sa2xgy8",
    },
  ]);
};
