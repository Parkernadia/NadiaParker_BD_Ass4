const fs = require('fs');
const https = require('https');

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    const fileStream = fs.createWriteStream('./public/output.txt'); // Specify the file path and name

    response.on('data', (data) => {
        fileStream.write(data); // Write the data to the file
        process.stdout.write(data);
    });

    response.on('end', () => {
        fileStream.end(); // Close the file stream when the response ends
    });
}).on('error', (error) => {
    console.log(error);
});
response.on('complete', () => {
    console.log('Request complete!');
});

response.on('close', () => {
    console.log('Connection closed!');
});
const os = require('os');

const arch = os.arch();
const uptime = os.uptime();
const homedir = os.homedir();

const markdownContent = `# OS Information
- Architecture: ${arch}
- Uptime: ${uptime} seconds
- Home Directory: ${homedir}`;

fs.writeFile('./public/os-info.md', markdownContent, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('OS information saved to os-info.md!');
    }
});

