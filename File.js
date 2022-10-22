import fs from 'fs'
import axios from 'axios'

//Imprimir el contenido de un archivo
const fileRoute = fs.readFileSync('./README.md', "utf-8");//Leer el contenido de un archivo
console.log(fileRoute);

//Extraer los links del archivo
const extractLinks = () => {
  const stringRoute = fileRoute.toString();
  const regExp = (/\http.*?\)/g);
  let findLinks = [stringRoute.match(regExp)];
  for (let i = 0; i < findLinks.length; i++) {
  }
  console.log(findLinks);
}
extractLinks();

//objeto con únicamente dos propiedades validate false: href, text, file y stats: href, text, file, status, ok
const urlOk = 'https://github.com/YeriMarbi/CDMX013-md-links';
const urlValidate = axios.get(urlOk)
urlValidate.then((result) => { console.log(result.statusText, result.status) });
