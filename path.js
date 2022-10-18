import path from 'node:path'
import fs from 'fs'

const routes = './links.md';
const AbsolutePath = () => {
    fs.existsSync(routes);
    if (fs.existsSync(routes) === true) {
        console.log(fs.existsSync(routes));
    }
    if (path.isAbsolute(routes) === false) {
        console.log(path.resolve(routes));
    } else {
        console.log('Es una ruta absoluta');
    }
}
AbsolutePath(routes)
