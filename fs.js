// -------------------------- fs  MODULE ---------------------------------
const { log } = require("console")
const fs = require("fs")

// -----------------1.write file

// fs.writeFile("sample.txt","create a file using fs",(err)=>{})
// fs.writeFile("sample.txt","hello ",(err)=>{})  // it overwrite on the file
// fs.appendFile("sample.txt","\nappend new content in  a file using fs",(err)=>{})  // \n for next line 

// -----------------2.READ FILE

// fs.readFile("sample.txt","utf8",(err,data)=>{
//     console.log(data)                      //buffer data outputed here
// })

// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data.toString())                      //actual data outputed here
// })

//---------------------3.delete the file 
// fs.unlink("sample.txt",()=>{})   



// ------------------------------------------ERROR HANDLING IN FS --------------------
// fs.writeFile("sample1.txt","error handling",(err)=>{})

// fs.readFile("sample1.txt","utf8",(err,data)=>{
//     console.log(data)
// })

// try{
//     fs.readFile("sample1.tt","utf8",(err,data)=>{
//         if(err){
//             throw err
//         }
//         console.log(data)
//     })
// }catch(error){
//     console.log(error.message)
// }


// fs.readFile("sample1.txt",(err,data)=>{
//     console.log(data.toString())
// })
// process.on("uncaughtException",(err)=>{
//     console.log(err.message);
// })



//------------------------Folder Create / Delete -----------------------
// fs.mkdir("folder",(err)=>{})   // create the folder
// fs.rmdir("folder",(err)=>{})   // remove the folder

/*
fs.readFile("thread.txt","utf8",(err,data)=>{
    console.log(data)
})
console.log("Hii everyone")   //o/p Hii everyone  
                              //    hello world
*/
/*
  // to prevent this
const filedata=fs.readFileSync("thread.txt","utf8")
console.log(filedata)
console.log("Hii everyone")  //o/p hello world   
                             //    Hii everyone 
*/



//------------------------Task-------------------(1.create file,append,read)
//      WITHOUT SYNC METHOD
/*
fs.writeFile("FirstFile.txt","FirstFile data",(err)=>{
    fs.appendFile("FirstFile.txt","\nappend data",(err)=>{
        fs.readFile("FirstFile.txt","utf8",(err,data)=>{
            console.log(data)                    
    })
    })
})
*/

//      WITH SYNC METHOD
fs.writeFileSync("FirstFile.txt","FirstFile data")
fs.appendFileSync("FirstFile.txt","\nappend data")
const data=fs.readFileSync("FirstFile.txt","utf8")
console.log(data) ;                  

