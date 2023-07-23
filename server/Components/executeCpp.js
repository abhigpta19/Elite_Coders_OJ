const {exec} =require('child_process');
const fs= require('fs');
const path= require('path')
const {stderr, stdout} = require('process');
const {v4 : uuid} = require('uuid')
const {generateinput} =require('./makeinputfile')
const {generateoutput} =require('./makeoutputfile')

const outputPath = path.join(__dirname,'executables');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive : true});  //not give erroe message if already exist directory
}


function executeCpp (filePath,inputFile){
   const outputFile=generateoutput()


const lang=path.basename(filePath).split('.')[1];

    const jobid= path.basename(filePath).split('.')[0];
    const outP =path.join(outputPath,`${jobid}.out`);
    console.log("chankidori",outputFile)

    let cmd;
    if(lang==="cpp")
    cmd=`g++ ${filePath} -o ${outP} && cd ${outputPath} && .//${jobid}.out < ${inputFile} > ${outputFile}`;
    if(lang==="py")
    cmd=`python3 ${filePath} < ${inputFile} > ${outputFile}`
    if(lang==="java")
    cmd=`java ${filePath} < ${inputFile} > ${outputFile}`


    return new Promise((resolve,reject) => {
        exec(
            cmd,
            
            (error,stdout,stderr) =>{
                console.log(stdout)
                if(error){
                    console.log("error hai bc",error);
                    reject({error,stderr});
                }
                if(stderr){
                    console.log("stderr hai bc",stderr);
                    reject(stderr);
                }


    //             if (error)
    //     return reject({
    //       fullmessage: stderr,
    //       //   .split("." + language)[1]
    //       //   .replace("<module>", "current code"),
    //     });
    //   if (stderr) return reject({ message: stderr, err, k: "hre1" });
    //   console.log(stdout);

                
                resolve(outputFile);
            }
        )
    })

 }

module.exports = {
    executeCpp,
}