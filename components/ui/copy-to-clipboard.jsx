"use client";

import { useState } from "react";
import ButtonCopy from "./button-copy";
import { copyToClipboard } from "@/utils/copy-clipboard";

export default function CopyToClipboard({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(text, setCopied);
  };

  return (
    <ButtonCopy
      className={className}
      onClick={handleCopy}
    />
  );
}