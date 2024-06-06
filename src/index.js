// const message = 'Hello Pasdssss';
// console.log(message);
import fs from 'node:fs/promises';
import path from 'node:path';
// --------------------Sync-------------------
// console.log(content);
// console.log(content.toString('utf-8'));

// const workdir = path.join(process.cwd());

// // // const somePath = path.join(workdir, 'src', 'index.js');
// // // console.log(somePath);
// const filePath = path.join(workdir, 'text.txt');
// // const content = fs.readFileSync(filePath);
// // console.log(content.toString());

// // ------------------------Callback------------------
// // fs.readFile(filePath, (error, data) => {
// //   fs.writeFile('src/output.txt', 'Panda', (er) => {
// //     console.log('write');
// //   });
// //   console.log('data', data.toString());
// // });

// // --------------------------Asyn----------------------
// const content = await fs.readFile(filePath);
// console.log(content.toString());

// const somePath = path.join('src', 'output.txt');
// const secondPath = path.join(process.cwd());
// const thirdPath = path.join(secondPath, 'text.txt');
// const fourthPath = path.parse('text.txt');

// const workid = path.join(process.cwd());
// const parh = path.join(workid, 'text.txt');
// const someRead = fs.readFileSync(parh, 'utf-8');
// // console.log(someRead);
// // const write = fs.writeFile('probe.txt', 'Hello worls', 'utf-8');
// const oldFile = path.join(workid, 'text.txt');
// console.log(oldFile);
// const newFile = path.join(workid, 'NewText.txt');
// fs.rename(oldFile, newFile);
