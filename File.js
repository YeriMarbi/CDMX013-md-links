import fs from 'fs'

  //Imprimir el contenido de un archivo
  const fileRoute = fs.readFileSync("./README.md", "utf-8");//Leer el contenido de un archivo
  // console.log(fileRoute);


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