// Get All Document Files Utility Function
import * as fs from 'fs';


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


