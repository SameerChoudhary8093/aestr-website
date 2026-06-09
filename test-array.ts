import fs from 'fs';
const content = `
const partners = [
  { name: "Cambridge", logo: "/Herosection/University of cambridge.webp" },
  { name: "INDIAai", logo: "/Herosection/India-ai.png" },
];
`;
const newContent = content.replace(/(logo:\s*)"([^"]+)"/g, '$1require("../../public$2")');
console.log(newContent);
