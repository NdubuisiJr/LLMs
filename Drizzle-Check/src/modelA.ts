import { db } from './db'; // Assuming you have your Drizzle instance initialized

async function updateUser(userId: number, newUsername: string) {
  await db.update(db.query.users)
    .set({ username: newUsername })
    .where(eq(db.query.users.id, userId)); 
}

// Example usage
updateUser(1, "new username"); 
