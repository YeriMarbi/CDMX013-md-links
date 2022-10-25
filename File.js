import fs from 'fs'
import axios from 'axios'



//Imprimir el contenido de un archivo
const fileRoute = fs.readFileSync('./README.md', "utf-8");//Leer el contenido de un archivo
console.log(fileRoute);

//Extraer los links del archivo
const extractLinks = () => {
  const stringRoute = fileRoute.toString();
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  let findLinks = [stringRoute.match(regExp)];
  for (let i = 0; i < findLinks.length; i++) {
  }
  console.log(findLinks);
}
extractLinks();

const urlOk = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
const urlValidate = axios.get(urlOk)
urlValidate.then((result) => {
  if (result.status >= 200 && result.status < 300) {
    console.log({
      href: urlOk,
      stats: result.status,
      message: result.statusText,
    });
  } else {
    console.log({
      stats: result.status,
      message: 'fail',
    });
  }
}, (error) => {
  console.log({
    href: urlOk,
    stats: error.response.status,
    message: 'fail',
  });
}
);
