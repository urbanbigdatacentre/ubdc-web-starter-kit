// Util to parse markdown content

import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";


const parseMarkdown = async (content: string) => {
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkPrism, { plugins: ["line-numbers"], transformInlineCode: true })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(content)

    return processedContent.toString();
}

export default parseMarkdown;