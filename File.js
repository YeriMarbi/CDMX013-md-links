import fs from 'fs'
import path from 'node:path'


//Leer un archivo con una ruta 
fs.readdir('./', (error, files)=>{
  if(error){
    throw error;
  }
  console.log(files);
  files.forEach(element => {
    if( path.extname(element) === '.md') {
      console.log(element);
    }
  });
  const fileRoute = fs.readFileSync("./links.md", "utf-8");//Leer el contenido de un archivo
  console.log(fileRoute);
});



