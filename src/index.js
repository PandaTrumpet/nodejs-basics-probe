// const message = 'Hello Pasdssss';
// console.log(message);
import fs from 'node:fs/promises';
import path from 'node:path';
// --------------------Sync-------------------
// console.log(content);
// console.log(content.toString('utf-8'));

const workdir = path.join(process.cwd());

// // const somePath = path.join(workdir, 'src', 'index.js');
// // console.log(somePath);
const filePath = path.join(workdir, 'text.txt');
// const content = fs.readFileSync(filePath);
// console.log(content.toString());

// ------------------------Callback------------------
// fs.readFile(filePath, (error, data) => {
//   fs.writeFile('src/output.txt', 'Panda', (er) => {
//     console.log('write');
//   });
//   console.log('data', data.toString());
// });

// --------------------------Asyn----------------------
const content = await fs.readFile(filePath);
console.log(content.toString());
