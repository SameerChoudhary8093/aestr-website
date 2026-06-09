import fs from 'fs';
const content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
const newContent = content.replace('alt="Gyan Vihar"', 'alt="Gyan Vihar" src={require("../../public/Herosection/Nirf white.png")}');
fs.writeFileSync('src/components/Navbar.tsx', newContent);
