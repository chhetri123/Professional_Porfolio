import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/** Shared section header: small label, serif title, short intro. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-8 md:mb-12 px-4", className)}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mt-3" />
      {description && (
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
