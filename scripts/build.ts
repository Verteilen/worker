import Chalk from 'chalk';
import * as pkg from 'pkg';
import Path from 'path';
import { existsSync } from 'fs';
import { rmdir } from 'fs/promises';

async function PKG_Program(platform:string, arch?:string){
    const exeDir = Path.join(__dirname, "..", "bin")
    if(existsSync(exeDir)) await rmdir(exeDir, {recursive: true})
    const exePath = Path.join(exeDir, platform == "win" ? 'worker.exe' : 'worker');
    const programPath = Path.join(__dirname, '..', 'dist', 'index.js');
    return pkg.exec(["-d", "-t", `node16-${platform}-${arch || 'x64'}`, "-o", exePath, "--public-packages", "*", programPath])
}

async function main(){
    let platform = ""
    process.argv.forEach(element => {
        if(element == "win") platform = "-win"
        else if(element == "mac") platform = "-mac"
        else if(element == "linux") platform = "-linux"
    });
    await PKG_Program(platform).catch(err => console.error(err))
    console.log(Chalk.greenBright('Program successfully transpiled!'));
}

if (require.main === module) {
    main();
}