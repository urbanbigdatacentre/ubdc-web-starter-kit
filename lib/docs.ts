// Get All Document Files Utility Function

import * as path from "path";
import * as fs from 'fs';
import parseMarkdown from "@/utils/parseMarkdown";


export function getFileStructure() {
    const dirTree = require("directory-tree");
    return dirTree("docs");
}

export function getAllDocs() {
    const docsDirectory = 'docs';
    const fileNames = [...getFiles(docsDirectory)];

    const topLevelDirectories = getDirectories(docsDirectory);

    topLevelDirectories.forEach((directory: string) => {
        const directoryFiles = getFiles(docsDirectory + '/' + directory);
        directoryFiles.forEach((file: string) => {
            fileNames.push(directory + '/' + file);
        })
        const innerDirectories = getDirectories(docsDirectory + '/' + directory);
        innerDirectories.forEach((innerDirectory: string) => {
            const innerDirectoryFiles = getFiles(docsDirectory + '/' + directory + '/' + innerDirectory);
            innerDirectoryFiles.forEach((file: string) => {
                fileNames.push(directory + '/' + innerDirectory + '/' + file);
            })
        });
    });



    return fileNames.map((fileName: string) => {

        return {
            params: {
                id: [...fileName.replace(/\.md$/, '').split('/')],
            },
        };
    });
}

function getDirectories(path: string) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}

function getFiles(path: string) {
    return fs.readdirSync(path).filter(function (file) {
        return !fs.statSync(path+'/'+file).isDirectory();
    });
}

export function getAllDocPaths() {
    const docsDirectory = 'docs';
    const fileNames = fs.readdirSync(docsDirectory);


    return fileNames.map((fileName: string) => {

        return {
            params: {
                id: [fileName.replace(/\.md$/, '')],
            },
        };
    });
}

export async function getDocData(id:  Array<string> | undefined) {
    const docsDirectory = 'docs';
    const matter = require('gray-matter');

    const fullPath = path.join(docsDirectory, `${id?.join('/') }.md`);
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