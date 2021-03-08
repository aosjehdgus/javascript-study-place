var http = require('http');
var fs = require('fs');
// url이라는 모듈을 url이라는 변수로 사용할 것이다.
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    

    if(pathname === '/'){

      if(queryData.id === undefined){      

        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
    
          <!DOCTYPE html>
          <html>
          
          <head>
            <title>${title}</title>
            <meta charset="utf-8" />
          </head>
          
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=Javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>
              ${description}
            </p>
          </body>
          
          </html>
    
        `;
        response.writeHead(200);
        response.end(template);
    
        });


      }else{

        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!DOCTYPE html>
          <html>
          
          <head>
            <title>${title}</title>
            <meta charset="utf-8" />
          </head>
          
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=Javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>
              ${description}
            </p>
          </body>
          
          </html>
    
        `;
        response.writeHead(200);
        response.end(template);
    
        });

      }

    }else{
      
      response.writeHead(404);
      response.end('Not found');

    }
 
});
app.listen(3000);

// 사용자에게 전송할 데이터를 생성한다 (nodejs가 가지고 있는 힘)