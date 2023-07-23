const fs=require('fs');


async function getFileBase64Encoding(fileLocation) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileLocation, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const base64Data = Buffer.from(data).toString("base64");
            resolve(base64Data);
        });
    });
}

async function decodeBase64ToFile(base64Encoding, outputFile) {
    return new Promise((resolve, reject) => {
        const buffer = Buffer.from(base64Encoding, "base64");
        fs.writeFile(outputFile, buffer, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

module.exports={
    getFileBase64Encoding,decodeBase64ToFile,
}