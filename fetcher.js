const args = process.argv.slice(2);
console.log(args);

let bodyHTML = "";
const request = require('request');
request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  bodyHTML = body; // Print the HTML for the Google homepage.
  // console.log(bodyHTML);
  const fs = require('fs');
  
  fs.writeFile(`/vagrant/w2/d3/page-fetcher/${args[1]}`, bodyHTML, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully

  });

  const size = bodyHTML.length;
  console.log(size);
  console.log(`Downloaded and saved ${size} bytes to ${args[1]}`);

});





