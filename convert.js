const fs = require('fs');
const markdownIt = require('markdown-it');
const taskLists = require('markdown-it-task-lists');
const deflist = require('markdown-it-deflist');
const footnote = require('markdown-it-footnote');
const mark = require('markdown-it-mark');

const md = markdownIt()
  .use(taskLists)
  .use(deflist)
  .use(footnote)
  .use(mark);

const markdownFilePath = process.argv[2];
const htmlFilePath = process.argv[3];

if (!markdownFilePath || !htmlFilePath) {
    console.error('Usage: node convert.js <input.md> <output.html>');
    process.exit(1);
}

fs.readFile(markdownFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading Markdown file:', err);
        return;
    }
    const htmlContent = md.render(data);
    fs.writeFile(htmlFilePath, htmlContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log('Markdown converted to HTML successfully!');
    });
});