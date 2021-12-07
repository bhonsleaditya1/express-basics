const http = require('http')
const {readFileSync} = require('fs')

//const homePage = readFileSync('./index.html')
const homePage = readFileSync('./navbar-app/index.html')
const style = readFileSync('./navbar-app/styles.css')
const image = readFileSync('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    console.log(req.method,req.url);
    const url = req.url
    console.log(url);
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        //res.write('<h1>Home Page</h1>')
        res.write(homePage)
        res.end()
    }
    // about 
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(style)
        res.end()
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(image)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(logic)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5000)