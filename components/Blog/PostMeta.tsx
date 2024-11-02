import { Calendar, User } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface PostMetaProps {
  date: string;
  author: string;
}

export function PostMeta({ date, author }: PostMetaProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
      <time dateTime={date} className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {formatDate(date)}
      </time>
      <span className="flex items-center">
        <User className="w-4 h-4 mr-1" />
        {author}
      </span>
    </div>
  );
}
