import { MemoizedReactMarkdown } from "./Markdown/MemoizedReactMarkdown";
import markdownStyles from "./markdown-styles.module.css";
import { FC, memo } from "react";
import remarkMath from "remark-math";
import emoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import { CodeBlock } from "./Markdown/CodeBlock";

type Props = {
  content: string;
};

const PostBody: FC<Props> = memo(({ content }) => {
  return (
    <div className="max-w-2xl mx-auto prose">
      <MemoizedReactMarkdown
        remarkPlugins={[remarkBreaks, remarkMath, remarkGfm, emoji]}
        rehypePlugins={[rehypeKatex, rehypeStringify]}
        className={markdownStyles["markdown"]}
        components={{
          code({ node, inline, className, children, ...props }) {
            if (children.length) {
              if (children[0] == "▍") {
                return (
                  <span className="mt-1 animate-pulse cursor-default">▍</span>
                );
              }

              children[0] = (children[0] as string).replace("`▍`", "▍");
            }

            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <CodeBlock
                key={Math.random()}
                language={(match && match[1]) || ""}
                value={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code
                className={`${className} p-0 text-zinc-900"
                }`}
                {...props}
              >
                {children}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className="my-4 mr-1 overflow-x-auto">
                <table className="border-collapse border border-zinc-400 px-3 py-1">
                  {children}
                </table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="break-words border border-zinc-400 bg-[#0a1427] px-3 py-1 text-zinc-100">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="break-words border border-zinc-400 px-3 py-1">
                {children}
              </td>
            );
          },
        }}
      >
        {content}
      </MemoizedReactMarkdown>
    </div>
  );
});

export default PostBody;

PostBody.displayName = "PostBody";
