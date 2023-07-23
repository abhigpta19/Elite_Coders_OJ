const fs = require('fs');

function deletefile(filepath) {
	fs.rm(filepath, { recursive:true }, (err) => {
        if(err){
            console.error(err.message);
            return;
        }
        console.log("File deleted successfully");
    })
}
 module.exports= {
    deletefile,
 }