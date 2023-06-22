import { FC, memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { generateRandomString, programmingLanguages } from "@/utils/codeblock";
import {
  ArrowDownTrayIcon,
  CheckIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

interface Props {
  language: string;
  value: string;
}

export const CodeBlock: FC<Props> = memo(({ language, value }) => {
  const [isCopied, setIsCopied] = useState<Boolean>(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };
  const downloadAsFile = () => {
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(
      3,
      true
    )}${fileExtension}`;
    const fileName = window.prompt("Enter file name" || "", suggestedFileName);

    if (!fileName) {
      // user pressed cancel on prompt
      return;
    }

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="codeblock relative mb-4 font-sans text-sm">
      <div className="flex items-center justify-between rounded-t-xl bg-[#010203] px-4 py-1.5">
        <span className="text-xs lowercase text-zinc-100">{language}</span>

        <div className="flex items-center">
          <button
            className="flex items-center gap-1.5 rounded bg-none p-1 text-xs text-zinc-100"
            onClick={copyToClipboard}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ClipboardIcon className="h-5 w-5" aria-hidden="true" />
            )}
            {isCopied ? "Copied" : "Copy code"}
          </button>
          <button
            className="flex items-center rounded bg-none p-1 text-xs text-zinc-100"
            onClick={downloadAsFile}
          >
            <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        wrapLines={true}
        customStyle={{
          margin: 0,
          // border radius only left bottom and right bottom corners 0.75rem
          borderRadius: "0 0 0.75rem 0.75rem",
          backgroundColor: "#0a1427",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";
