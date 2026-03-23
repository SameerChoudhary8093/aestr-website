const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const fixNumbers = (file, content) => {
    let original = content;

    // Dark Background logic (text-accent border-accent/30 bg-accent/5 or border-accent/20)
    content = content.replace(
        /<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent\/\d+ flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-accent bg-accent\/5">/g,
        '<div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D7F601] flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-black bg-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.5)]">'
    );
    // Dark background for ProgramFeatures
    content = content.replace(
        /<div className="flex-shrink-0 w-16 h-16 rounded-full border border-accent\/\d+ flex items-center justify-center text-3xl font-orbitron font-bold text-accent bg-accent\/5">/g,
        '<div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D7F601] flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-black bg-[#D7F601] shadow-[0_0_20px_rgba(215,246,1,0.5)]">'
    );

    // Light Background logic (text-black border-black/30 bg-black/5)
    content = content.replace(
        /<div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black\/30 flex items-center justify-center text-2xl md:text-3xl font-orbitron font-bold text-black bg-black\/5">/g,
        '<div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black flex items-center justify-center text-3xl md:text-4xl font-orbitron font-black text-[#D7F601] bg-black shadow-xl">'
    );

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated number circle in ${path.basename(file)}`);
    } else {
        // Just in case there is some other variation
        if (content.indexOf('border-black/30') !== -1 && content.indexOf('w-12 h-12') !== -1) {
            console.log(`MISSED in ${path.basename(file)}`);
        }
    }
};

const files = fs.readdirSync(componentsDir);
files.forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(componentsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        fixNumbers(filePath, content);
    }
});
