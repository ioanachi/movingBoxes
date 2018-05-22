var 
http = require('http'),//helps with http methods
path = require('path'),//helps with file paths
fs = require('fs');//helps with file system tasks
 
// extensions = {
// 	".html" : "text/html",
// 	".css" : "text/css",
// 	".js" : "application/javascript",
// 	".png" : "image/png",
// 	".gif" : "image/gif",
// 	".jpg" : "image/jpeg"
// };

// function getFile(filePath,res,page404,mimeType){
// 	//does the requested file exist?
// 	fs.exists(filePath,function(exists){
// 		//if it does...
// 		if(exists){
// 			//read the file, run the anonymous function
// 			fs.readFile(filePath,function(err,contents){
// 				if(!err){
// 					//if there was no error
// 					//send the contents with the default 200/ok header
// 					res.writeHead(200,{
// 						"Content-type" : mimeType,
// 						"Content-Length" : contents.length
// 					});
// 					res.end(contents);
// 				} else {
// 					//for our own troubleshooting
// 					console.dir(err);
// 				};
// 			});
// 		} else {
// 			//if the requested file was not found
// 			//serve-up our custom 404 page
// 			fs.readFile(page404,function(err,contents){
// 				//if there was no error
// 				if(!err){
// 					//send the contents with a 404/not found header 
// 					res.writeHead(404, {'Content-Type': 'text/html'});
// 					res.end(contents);
// 				} else {
// 					//for our own troubleshooting
// 					console.dir(err);
// 				};
// 			});
// 		};
// 	});
// };




//a helper function to handle HTTP requests
function requestHandler(req, res) {

  var
content = '',
 fileName = path.basename(req.url),//the file that was requested
localFolder = __dirname ;//where our public files are located
ext = path.extname(fileName);
	//NOTE: __dirname returns the root folder that
	//this javascript file is in.
 
	if(fileName === 'index.html'){//if index.html was requested...
		content = localFolder +"\\"+fileName;//setup the file name to be returned
 
		//reads the file referenced by 'content'
		//and then calls the anonymous function we pass in
		fs.readFile(content,function(err,contents){
			//if the fileRead was successful...
			if(!err){
				//send the contents of index.html
				//and then close the request
				res.end(contents);
			} else {
				//otherwise, let us inspect the eror
				//in the console
				console.dir(err);
			};
		});
	} else {
		//if the file was not found, set a 404 header...
		res.writeHead(404, {'Content-Type': 'text/html'});
		//send a custom 'file not found' message
		//and then close the request
		res.end('<h1>Sorry, the page you are looking for cannot be found.</h1>');
	};
};
 
//step 2) create the server
http.createServer(requestHandler)
 
//step 3) listen for an HTTP request on port 3000
.listen(3000);