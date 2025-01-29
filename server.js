// const http = require("http")                 //import http
// const fs=require("fs")
// CHAINING METHOD
// http.createServer((req,res)=>{               //req-request, res-response
//     console.log("server called")
// }).listen(3000,()=>console.log("server is running"))


//used variable
/*
const server=http.createServer((req,res)=>{            //req-request, res-response
    // console.log("server called")
    console.log(req.url);
    fs.readFile("indexhtml.html","utf8",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(data)      //i browser it print in the specifi page
    })   
})
server.listen(3000,()=>console.log("server is running"))
//nodemon - automatically restarts the server when code changes are detected during development.    
*/

/*
//destructure3
const url = require('url');
const server = http.createServer((req, res) => {
    const { query } = url.parse(req.url, true); // Parse the URL and extract the query object
    console.log(query.id); // Log the `id` parameter from the query
    const { id, name } = query; // Destructure `id` and `name` from the query object
    console.log(id); // Log the `id`
    console.log(name); // Log the `name`
    res.end("Query parameters logged to the console."); // Respond to the client
});

server.listen(3000, () => console.log("Server is running on port 3000"));
*/






 //                                        23.01.25
 //--------------------------------------Routing in js
/*
 const http = require("http")
 const fs = require("fs")
 
 const jsonData = fs.readFileSync("product.json","utf8") 
 console.log(jsonData)
 
 const server = http.createServer((req,res)=>{
   // res.writeHead(200,{"content-type":"application/json"})
   // res.end(jsonData)
 
 
   let path = req.url                      //routing
   if(path=="/home"|| path=="/"){
    fs.readFile("indexhtml.html", "utf8", (err, data) => {
        res.writeHead(200,{"Content-Type": "text/html" });
        res.end(data);
    })
   }
   else if(path =="/contact"){res.end("contact")}
   else if(path == "/about"){res.end("about")}
   else if(path =="/products"){res.end("products")}
  
   else {res.end("404")}
 })
 server.listen(1416,()=>{console.log("http://127.0.0.1:1416")})
 */





const http = require("http")
const fs = require("fs")
const p = require("path")    //  for join method
const url = require("url")   //to pass url

const data = fs.readFileSync(p.join(__dirname,"templates","template.html"),"utf8")  //read file from another folder
const prodata = fs.readFileSync(p.join(__dirname,"templates","product.html"),"utf8")
// console.log(prodata)

const jsonData = JSON.parse(fs.readFileSync("product.json", "utf-8"))  //JSON.parse - used to convert json file to jsobj file
// console.log(jsonData);
let productHtmlArray = jsonData.map((prod)=>{
  let output = prodata.replace("{{%IMAGE%}}",prod.productImage)
  output = output.replace("{{%NAME%}}",prod.name)
  output = output.replace("{{%MODENAME%}}",prod.modeName)
  output = output.replace("{{%MODENUMBER%}}",prod.modelNumber)
  output = output.replace("{{%SIZE%}}",prod.size)
  output = output.replace("{{%CAMERA%}}",prod.camera)
  output = output.replace("{{%PRICE%}}",prod.price)
  output = output.replace("{{%COLOR%}}",prod.color )
  output = output.replace("{{%ID%}}",prod.id )
  return output;    //must return to get o/p
})


// for single product
function renderProduct(prod){ 
  let output = prodata.replace("{{%IMAGE%}}",prod.productImage)
  output = output.replace("{{%NAME%}}",prod.name)
  output = output.replace("{{%MODENAME%}}",prod.modeName)
  output = output.replace("{{%MODENUMBER%}}",prod.modelNumber)
  output = output.replace("{{%SIZE%}}",prod.size)
  output = output.replace("{{%CAMERA%}}",prod.camera)
  output = output.replace("{{%PRICE%}}",prod.price)
  output = output.replace("{{%COLOR%}}",prod.color )
  output = output.replace("{{%ID%}}",prod.id )
  return output;
 } //to render obj

productHtmlArray = productHtmlArray.join(",")
// console.log(productHtmlArray)
// console.log(typeof(productHtmlArray))

const s = http.createServer((req,res)=>{
  // res.end(data)    //- should comment before routing

  let path = req.url                      //routing  starts from here
  path = path.toLowerCase()         //changing path to lowercase

  let {query,pathname} = url.parse(req.url,true)     //for quering
  pathname=pathname.toLowerCase()

 console.log(query)
 console.log(path)
 console.log(pathname)

  if(path==="/home"){
   res.end(data.replace("{{%CONTENT%}}","You Are At Home"))
  } 
  else if(path === "/contact"){
   res.end(data.replace("{{%CONTENT%}}","You Are At Contact"))
  }
  else if(path === "/about"){
    res.end(data.replace("{{%CONTENT%}}","You Are At About"))
  }
  else if(pathname === "/products"){  
    console.log(path.indexOf("/products"));    //path can be with query so "indexOf" is used

    if(query.id){
      let id = query.id*1     //to convert string to int
      let findone = jsonData.find(item=>item.id===id)
      res.end(data.replace("{{%CONTENT%}}",renderProduct(findone)))
      
      // res.end("Hellooo...")     //use 'Product' as path to print as "Helooo..."
    }else{
    res.end(data.replace("{{%CONTENT%}}",productHtmlArray))
    }

  }
  else{res.end("404")}
  
})
s.listen(89,()=>{console.log("Running in server")})