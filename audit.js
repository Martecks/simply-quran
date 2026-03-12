import fs from 'fs';
const data = fs.readFileSync('./src/data/surah-9-page.js', 'utf8');
const regex = /verseRange:\s*'(\d+)[–-](\d+)'/g;
let match;
let total = 0;
while ((match = regex.exec(data)) !== null) {
  // Only count if it's inside a subsection (simple check: usually preceded by heading)
  const start = parseInt(match[1]);
  const end = parseInt(match[2]);
  total += (end - start + 1);
}
console.log('Total verses matched by ranges:', total);
// This is a naive regex, let's just do a proper import and check.
