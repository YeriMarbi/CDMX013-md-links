import path from 'node:path'
import fs from 'fs'

const routes = './links.md';

const isAbsolutePath = (routes) => {
    fs.existsSync(routes);
    if (fs.existsSync(routes) === true) {
        console.log(fs.existsSync(routes));
    }
    if (path.isAbsolute(routes) === false) {
        console.log(path.resolve(routes));
    } else {
        console.log('Es una ruta absoluta');
    }
};

function readFileOrFolder = (routes) =>{ //leer una carpeta dentro de otra 
fs.readdir('./', (error, files) => {
    if (error) {
      throw error;
    }
    console.log(files);
    files.forEach(filemd => {
      if (path.extname(filemd) === '.md') {
      }
    });
  });
}
  isAbsolutePath(routes)
