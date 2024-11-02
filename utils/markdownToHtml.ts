import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function markdownToHtml(filePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, "utf8");
  const { content: html } = matter(content);
  return html;
}
