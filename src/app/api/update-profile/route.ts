import { saveToDatabase } from "@/lib/database";
import { invalidateCache } from "@/lib/cache";

interface ProfileUpdate {
  userId: string;
  displayName: string;
  bio: string;
}

export async function POST(request: Request) {
  const update: ProfileUpdate = await request.json();

  saveToDatabase("users", update.userId, update);
  invalidateCache(`user:${update.userId}`);

  return Response.json({ success: true });
}