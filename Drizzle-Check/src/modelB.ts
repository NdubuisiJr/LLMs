const userId = 1; // or whatever the user's ID is
const newUsername = "new username";

await db.query.users.update({
  where: { id: userId },
  data: { username: newUsername },
});