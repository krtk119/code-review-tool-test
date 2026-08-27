import { db } from "@/lib/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? "";

  const query = `SELECT * FROM products WHERE category = '${category}' AND active = true`;
  const results = await db.query(query);

  return Response.json(results);
}
