const fs = require('fs')
const matter = require('gray-matter')

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}

function getFiles(path) {
    return fs.readdirSync(path).filter(function (file) {
        return !fs.statSync(path+'/'+file).isDirectory();
    });
}

function getAllDocs() {
    const docsDirectory = 'docs';
    const fileNames = [...getFiles(docsDirectory)];

    const topLevelDirectories = getDirectories(docsDirectory);

    topLevelDirectories.forEach((directory) => {
        const directoryFiles = getFiles(docsDirectory + '/' + directory);
        directoryFiles.forEach((file) => {
            fileNames.push(directory + '/' + file);
        })
        const innerDirectories = getDirectories(docsDirectory + '/' + directory);
        innerDirectories.forEach((innerDirectory) => {
            const innerDirectoryFiles = getFiles(docsDirectory + '/' + directory + '/' + innerDirectory);
            innerDirectoryFiles.forEach((file) => {
                fileNames.push(directory + '/' + innerDirectory + '/' + file);
            })
        });
    });



    return fileNames.map((fileName) => {

        return {
            params: {
                id: [...fileName.replace(/\.md$/, '').split('/')],
            },
        };
    });
}

const cacheDocs = () => {
    const paths = getAllDocs();

    const docs = paths.map(doc => {
        const source = `docs/${doc.params['id'].join('/')}.md`
        const fileContents = fs.readFileSync(source, 'utf8')
        const matterResult = matter(fileContents)
        return {
            ...matterResult,
            id: `/docs/${doc.params['id'].join('/')}`
        }
    })
    return `export const docs = ${JSON.stringify(docs)}`
}

try {
    fs.readdirSync('cache')
} catch (e) {
    console.log("ERROR", e)
    fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', cacheDocs(), function (err) {

    if (err) return console.log(err);
    console.log('Docs cached.');
})