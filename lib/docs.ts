// Get All Document Files Utility Function

import * as fs from "fs";
import * as path from "path";
import html from "remark-html";
import {remark} from "remark";

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

export async function getDocData(id:  string | string[] | undefined) {
    const docsDirectory = 'docs';
    const matter = require('gray-matter');


    const fullPath = path.join(docsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const docsDirectoryContents = fs.readdirSync(docsDirectory);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        fullPath,
        docsDirectoryContents,
        ...matterResult.data,
    };
}