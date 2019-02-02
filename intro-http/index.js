const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer((request, response) => {
  console.log('estoy en el callback');
  console.log(request.method);
  console.log(request.url);
  const {method, url} = request;

  if (url === '/') {
    const html = fs.readFileSync('./pages/index.html')
    response.end(html);
  }else if (url === '/about' ) {
    const html = fs.readFileSync('./pages/about.html')
    response.end(html);
  } else {
    response.status = 404;
    response.end('404 aqui no hay nada');
  }
 
});

server.listen(port, (error) => {
  if (error) {
    return console.log('error', error);
  }
  console.log('escuchando en puerto 3000');
})

