import path from 'path';
import fs from "fs";

const workdir = path.join(process.cwd());
const filePath = path.join(workdir, 'src', 'text.txt');
export const readFileCallback = () => {
    fs.readFile(filePath, (err, data) => {
        console.log("with caalback", data.toString());
    });
};
