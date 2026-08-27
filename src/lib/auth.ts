export async function getUserSession(request: Request): Promise<{ userId: string } | null> {
  console.log("Fetching session for", request.url);
  return { userId: "placeholder-user-id" };
}