const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'src/data');
const surahFiles = fs.readdirSync(DATA_DIR).filter(f => f.startsWith('surah-') && f.endsWith('-page.js'));

console.log('--- FAQ Length Audit ---');
console.log('Analyzing FAQ answers in Surahs 17-40...');

let issuesCount = 0;
let totalFaqs = 0;

surahFiles.forEach(file => {
    const num = parseInt(file.match(/\d+/)[0]);
    if (num < 17 || num > 40) return; // Only check previous batches

    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
    
    // Find faqs matching { title: '...', content: '...' }
    const faqRegex = /faq:\s*{[^}]*content:\s*['"]([^'"]+)['"]/g;
    let match;
    let fileFaqs = 0;

    while ((match = faqRegex.exec(content)) !== null) {
        totalFaqs++;
        fileFaqs++;
        const answer = match[1];
        const charCount = answer.length;
        const sentenceCount = answer.split(/[.!?]/).filter(s => s.trim().length > 0).length;

        if (charCount < 200 || sentenceCount < 3) {
            console.log(`[Surah ${num}] FAQ Short: "${answer.substring(0, 50)}..." (${charCount} chars, ${sentenceCount} sentences)`);
            issuesCount++;
        }
    }
});

console.log('---------------------------');
console.log(`Total FAQs Checked: ${totalFaqs}`);
console.log(`Short FAQs Found: ${issuesCount}`);
console.log('Recommendation: Elaborate these FAQs to 3-6 sentences with paragraphs.');
