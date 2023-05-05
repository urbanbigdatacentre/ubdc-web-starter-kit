// Get All Document Files Utility Function

import * as path from "path";
import * as fs from 'fs';
import 'prismjs/themes/prism-okaidia.css';
import parseMarkdown from "@/utils/parseMarkdown";


export function getAllDocs() {
    const docsDirectory = 'docs';
    const fileNames = fs.readdirSync(docsDirectory);

    return fileNames.map((fileName: string) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getAllDocPaths() {
    const docsDirectory = 'docs';
    const fileNames = fs.readdirSync(docsDirectory);

    console.log(fileNames);

    return fileNames.map((fileName: string) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

const toc = require("@jsdevtools/rehype-toc");

export async function getDocData(id:  string | string[] | undefined) {
    const docsDirectory = 'docs';
    const matter = require('gray-matter');


    const fullPath = path.join(docsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const docsDirectoryContents = fs.readdirSync(docsDirectory);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const contentHtml = await parseMarkdown(matterResult.content);

    // Combine the data
    return {
        id,
        contentHtml,
        fullPath,
        docsDirectoryContents,
        ...matterResult.data,
    };
}