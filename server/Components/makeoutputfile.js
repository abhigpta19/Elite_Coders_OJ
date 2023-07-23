const fs= require('fs');
const path= require('path')
const {v4 : uuid} = require('uuid')

const dirCodes = path.join(__dirname,'outputs');

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive : true});  //not give erroe message if already exist directory
}

const generateoutput = () => {

    const jobid= uuid();
    const filename = `${jobid}.txt`;

    const filePath = path.join(dirCodes,filename);
    return filePath;
}

module.exports = {
    generateoutput,
}