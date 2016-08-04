module.exports = {

	direct: function(request,response){
		var fs = require('fs');

		if(request.url === '/'){
			fs.readFile('./views/index.html', 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-type': 'text/html'});
				response.write(contents);
				response.end();
			})
		}
		else if((request.url).substr(0,6) === '/main/'){
			var fileurl = (request.url).substr(6)
			fs.readFile('./views/'+fileurl+'.html', 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-type': 'text/html'});
				response.write(contents);
				response.end();
			})
		}
		else if((request.url).substr(0,8) === '/images/'){
			var fileurl = (request.url).substr(8)
			fs.readFile('./images/'+fileurl, function(errors, contents){
				response.writeHead(200, {'Content-type': 'image/jpg'});
				response.write(contents);
				response.end();
			})
	
		}
		else if((request.url).substr(0,13) === '/stylesheets/'){
			var fileurl = (request.url).substr(13)
			fs.readFile('./stylesheets/'+fileurl+'.css' , 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-type': 'text/css'});
				response.write(contents);
				response.end();
			})
		}
			else if((request.url).substr(0,9) === '/scripts/'){
			var fileurl = (request.url).substr(9)
			fs.readFile('./scripts/'+fileurl+'.js' , 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-type': 'text/javascript '});
				response.write(contents);
				response.end();
			})
		}
		else{
			response.writeHead(404);
        	response.end('THIS URL IS NOT AVALIABLE GO AWAY');

		}
	}
};

function runpage(request, response, fs, content, url, utfbool){
		if(utfbool){
			fs.readFile(url, 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-type': content});
				response.write(contents);
				response.end();
			})
		}
		else{
				fs.readFile(url, function(errors, contents){
				response.writeHead(200, {'Content-type': content});
				response.write(contents);
				response.end();
		}

}