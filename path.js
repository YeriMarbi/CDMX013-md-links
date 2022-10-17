import path from 'node:path'

if (path.isAbsolute('./README.md') === false){
    console.log(path.resolve('./README.md'));
}else{
    console.log('Nooo');
}
