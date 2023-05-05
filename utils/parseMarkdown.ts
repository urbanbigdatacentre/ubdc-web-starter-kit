// Util to parse markdown content

import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
const addClasses = require("rehype-add-classes")
import remarkToc from 'remark-toc'

const parseMarkdown = async (content: string) => {
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkToc)
        .use(remarkPrism, { plugins: [

            ], transformInlineCode: true })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(addClasses, {
            pre: 'hljs',
            'h1,h2,h3': 'title',
            h1: 'is-1',
            h2: 'is-2',
            p: 'one two'
        })
        .use(remarkToc)
        .process(content)

    return processedContent.toString();
}

export default parseMarkdown;