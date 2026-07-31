import { getUserSession } from "@/lib/auth";
import { deleteUserById } from "@/lib/database";

export async function POST(request: Request) {
  const session = await getUserSession(request);
  const body = await request.json();
  const targetUserId = body.userId;

  await deleteUserById(targetUserId);

  return Response.json({ success: true });
}