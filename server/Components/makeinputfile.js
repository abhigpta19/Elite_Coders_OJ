const fs= require('fs');
const path= require('path')
const {v4 : uuid} = require('uuid')

const dirCodes = path.join(__dirname,'inputs');

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive : true});  //not give erroe message if already exist directory
}

const generateinput = (input) => {

    const jobid= uuid();
    const filename = `${jobid}.txt`;

    const filePath = path.join(dirCodes,filename);
    fs.writeFileSync(filePath,input);
    return filePath;
}

module.exports = {
    generateinput,
}