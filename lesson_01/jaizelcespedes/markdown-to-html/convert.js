const fs = require('fs'); // Node's built-in file system module — lets us read/write files.
const MarkdownIt = require('markdown-it'); // Main Markdown-to-HTML converter.
const taskLists = require('markdown-it-task-lists'); // Plugin for [ ] task list support.
const deflist = require('markdown-it-deflist'); // Plugin for definition list support.
const footnote = require('markdown-it-footnote'); // Plugin for footnotes.
const mark = require('markdown-it-mark'); // Plugin for ==highlighting== text.

// Create a MarkdownIt instance and use the extra plugins
const md = new MarkdownIt()
  .use(taskLists)
  .use(deflist)
  .use(footnote)
  .use(mark);

// Grab the input and output file names from command line arguments
const [,, inputFile, outputFile] = process.argv;

// If either file name is missing, show the user how to run the program
if (!inputFile || !outputFile) {
  console.error('Usage: node convert.js <input.md> <output.html>');
  process.exit(1); // Stop the program
}

// Read the input Markdown file
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading Markdown file:", err);
    return;
  }

  // Convert Markdown content to HTML
  const htmlContent = md.render(data);

  // Wrap the converted content inside a full HTML page structure
  const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Markdown to HTML</title>
  <link rel="stylesheet" href="style.css"> <!-- Optional CSS -->
</head>
<body>
${htmlContent}
</body>
</html>
  `;

  // Write the final HTML to the output file
  fs.writeFile(outputFile, fullHtml, 'utf8', (err) => {
    if (err) {
      console.error('Error writing HTML file:', err);
      return;
    }
    console.log('✅ Markdown converted to HTML successfully!');
  });
});
