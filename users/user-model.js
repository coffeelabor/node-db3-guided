const db = require("../data/db-config.js");

module.exports = {
  getUsers,
  getById,
  add,
  getUserPosts
};

function getUsers() {
  return db("users");
}

function getById(id) {
  return db("users").where({ id });
}

function add(user) {
  return db("users").where({ id });
}

function getUserPosts(id) {
  return db("posts as p")
    .innerJoin("users as u", "p.user_id", "u.id")
    .select("p.id", "p.contents", "u.username as postedBy")
    .where({ user_id: id });
}
