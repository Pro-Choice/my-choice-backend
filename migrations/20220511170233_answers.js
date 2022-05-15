/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("answers", function (table) {
    table.increments("id").primary();
    table.string("content", 255).notNullable();
    table.integer("question_id").references("id").inTable("questions");
    table.integer("user_id").references("id").inTable("users");
    table.integer("votes");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("answers");
};
