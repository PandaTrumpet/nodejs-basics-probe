import path from 'path';
import fs from 'fs';

const workdir = path.join(process.cwd());
const pathFile = path.join(workdir, 'src', 'text.txt');
export const readFileSync = () => {
    const content = fs.readFileSync(pathFile, 'utf-8');
    console.log("read sync", content);
};
