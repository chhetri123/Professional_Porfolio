import { NextRequest } from "next/server";
import { join } from "path";
import { createReadStream } from "fs";
import { stat } from "fs/promises";

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const filePath = join(process.cwd(), "content", ...params.path);

  const fileExtension = filePath.toLowerCase().split(".").pop();
  if (!fileExtension || !ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const stats = await stat(filePath);

    if (!stats.isFile()) {
      return new Response("Not found", { status: 404 });
    }

    const stream = createReadStream(filePath);
    return new Response(stream as any);
  } catch (e) {
    return new Response("Not found", { status: 404 });
  }
}
