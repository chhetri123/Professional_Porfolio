"use client";

import { Twitter, Linkedin, Facebook, Link, Check } from "lucide-react";
import { useState } from "react";

interface ShareLinksProps {
  title: string;
  url: string;
}

export default function ShareLinks({ title, url }: ShareLinksProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-500 text-sm">Share:</span>
      <div className="flex gap-3 items-center">
        {shareLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label={`Share on ${link.platform}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors relative"
          aria-label="Copy link"
        >
          {copySuccess ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Link className="w-5 h-5" />
          )}
          {copySuccess && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
