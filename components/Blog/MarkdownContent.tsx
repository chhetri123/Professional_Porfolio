import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";
import React from "react";

interface MarkdownContentProps {
  content: string;
  path: string[];
}

export default function MarkdownContent({
  content,
  path,
}: MarkdownContentProps) {
  // Default styles for common HTML elements
  const defaultStyles: Record<string, string> = {
    div: "my-4",
    span: "",
    section: "my-6",
    article: "my-8",
    aside: "my-4",
    header: "mb-6",
    footer: "mt-6",
    nav: "my-4",
    main: "my-8",
    figure: "my-4",
    figcaption: "text-sm text-gray-600 mt-2",
    details: "my-4",
    summary: "cursor-pointer",
    mark: "bg-yellow-100 dark:bg-yellow-900/30 px-1",
    time: "text-gray-600 dark:text-gray-400",
    address: "italic",
    cite: "italic",
    abbr: "cursor-help border-dotted border-b-2",
    sup: "text-xs top-[-0.5em] relative",
    sub: "text-xs bottom-[-0.25em] relative",
    small: "text-sm",
    kbd: "px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700",
    var: "italic",
    samp: "font-mono",
    ruby: "text-center",
    rt: "text-xs text-gray-600 dark:text-gray-400",
    bdi: "",
    bdo: "",
    wbr: "",
    center: "text-center",
    video: "max-w-full my-4",
    audio: "my-4",
    canvas: "my-4",
    embed: "my-4",
    iframe: "max-w-full my-4",
    img: "max-w-full h-auto my-4",
    picture: "my-4",
    portal: "my-4",
    svg: "my-4",
    math: "my-4",
    symbol: "",
    data: "",
    meter: "my-4",
    progress: "my-4",
    output: "my-4",
    button: "px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",
    form: "my-4",
    input: "px-3 py-2 border rounded",
    textarea: "px-3 py-2 border rounded",
    select: "px-3 py-2 border rounded",
    option: "",
    label: "text-sm font-medium",
    fieldset: "border rounded p-4 my-4",
    legend: "px-2 font-medium",
    table: "min-w-full divide-y divide-gray-300 dark:divide-gray-700 my-4",
    caption: "text-sm text-gray-600 mb-2",
    col: "",
    colgroup: "",
    tbody: "divide-y divide-gray-200 dark:divide-gray-800",
    thead: "bg-gray-50 dark:bg-gray-800",
    tfoot: "bg-gray-50 dark:bg-gray-800",
    tr: "",
    th: "px-4 py-3 text-left text-sm font-semibold",
    td: "px-4 py-3 text-sm",
  };

  // Create a component renderer that handles any HTML element
  const createComponent = (tag: keyof JSX.IntrinsicElements) => {
    return ({ node, className, children, ...props }: any) => {
      // Get default style for this tag
      const defaultStyle = defaultStyles[tag] || "";

      // Special handling for specific attributes
      const finalProps = { ...props };
      if (tag === "a") {
        finalProps.target = props.href?.startsWith("http")
          ? "_blank"
          : undefined;
        finalProps.rel = props.href?.startsWith("http")
          ? "noopener noreferrer"
          : undefined;
      }

      if (tag === "img" && props.src && !props.src.startsWith("http")) {
        finalProps.src = `/public/content/${path[0]}/${props.src}`;
      }
      // Create the element with merged classes
      return React.createElement(
        tag,
        {
          className: cn(defaultStyle, className),
          ...finalProps,
        },
        children
      );
    };
  };

  // Create components object with handlers for all HTML elements
  const components = Object.keys(defaultStyles).reduce((acc, tag) => {
    acc[tag] = createComponent(tag as keyof JSX.IntrinsicElements);
    return acc;
  }, {} as Record<string, any>);

  return (
    <div className="prose dark:prose-invert max-w-none [&>*]:leading-snug mb-10">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeKatex, rehypeRaw]}
        className="markdown-content [&>p]:leading-snug [&>ul]:leading-snug [&>ol]:leading-snug"
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
