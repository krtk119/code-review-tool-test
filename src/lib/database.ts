export const db = {
  query: async (sql: string): Promise<unknown[]> => {
    console.log("Query:", sql);
    return [];
  },
};

export async function saveToDatabase(table: string, id: string, data: unknown): Promise<void> {
  console.log("Saving to", table, id, data);
}

export async function deleteUserById(userId: string): Promise<void> {
  console.log("Deleting user", userId);
}