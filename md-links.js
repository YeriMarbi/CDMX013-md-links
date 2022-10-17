import fs from 'fs'
import path from 'path'

export const pathExists =()=> {
const route = fs.existsSync('C:/Users/iron_/Documents/Projects/CDMX013-md-links/md-links.js');
if(route === true){
  console.log(route);
}
}

export const isAbsoluteRoute =()=> {
  const absoluteroute = path.isAbsolute('/CDMX013-md-links/md-links.js');
  console.log(absoluteroute, ('es una ruta absoluta'));
}

export const resolveAbsolute =()=> {
  if (path.isAbsolute('/CDMX013-md-links/md-links.js')){
 console.log('/CDMX013-md-links/md-links.js');
}else{
  console(path.resolve('/CDMX013-md-links/md-links.js'));
}
}

//Leer un archivo con una ruta 
  fs.readdir('./', (error, files)=>{
    if(error){
      throw error;
    }
    console.log(files);
  });

//Leer el contenido de un archivo
export const readFile =()=>{
  const fileRoute = fs.readFileSync("./links.md", "utf-8");
  console.log(fileRoute);
}

//Identificar los links
