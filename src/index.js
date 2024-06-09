// const message = 'Hello Pasdssss';
// console.log(message);
// import fs from 'node:fs/promises';
// import path from 'node:path';
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

// ==================Lesson 2====================
// import { readFileAsync } from './scripts/readFileAsync.js';
// import { readFileCallback } from './scripts/readFileCallback.js';
// import { readFileSync } from './scripts/readFileSync.js';
import path from 'path';
import fs from 'fs/promises';
// readFileAsync();
// readFileCallback();
// readFileSync();

// const workdir = path.join(process.cwd());

// const filePath = path.join(workdir, 'src', 'text.txt');
// const fileOperation = async ({ action }) => {
//   switch (action) {
//     case 'read': {
//       const result = await fs.readFile(filePath, 'utf-8');
//       console.log(result);
//       break;
//     }
//     case 'add': {
//       const append = await fs.appendFile(filePath, 'PandaTrumpet');
//       console.log(append);
//       break;
//     }
//     case 'replace': {
//       const replace = await fs.writeFile(filePath, 'New Contacts');
//       console.log(replace);
//       break;
//     }

//     case 'rename': {
//       const rename = await fs.rename(
//         filePath,
//         path.join(process.cwd(), 'src', 'db', 'text.txt'),
//       );
//       console.log(rename);
//       break;
//     }
//     case 'delete': {
//       fs.unlink(filePath);

//       break;
//     }
//     case 'canAccess': {
//       try {
//         await fs.access(filePath);
//       } catch (error) {
//         if (error.code === 'ENOENT') {
//           console.log('File dont exist');
//         } else {
//           console.log('Domth happen');
//         }
//         console.log(error);
//       }

//       break;
//     }
//     case 'readDir': {
//       const files = await fs.readdir(process.cwd());
//       console.log('Files in directory', files);
//       break;
//     }
//     default:
//       console.log('Unknown operation');
//       break;
//   }
// };

// fileOperation({ action: 'readDir' });
// fileOperation({ action: 'add' });
// fileOperation({ action: 'rename' });

const student = {
  id: 123,
  name: 'Panda',
  age: 26,
  cource: ['cs', 'Ht'],
  gender: 'male',
};
console.log(student);
