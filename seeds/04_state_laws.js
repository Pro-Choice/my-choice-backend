/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex("state_laws").insert([
    {
      state_name: "Texas",
      state_law:
        "As of September 1, 2021, abortion is illegal in Texas once a fetal heartbeat can be detected.",
    },
    {
      state_name: "Alabama",
      state_law:
        "Under the Human Life Protection Act, a doctor who performs a banned abortion in the state of Alabama would be guilty of a Class A felony, and could be sentenced to life imprisonment.",
    },
  ]);
};
