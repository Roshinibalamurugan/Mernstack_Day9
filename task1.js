const f = require("fs")

f.writeFile("TASK1_text.txt","date & time : ",(e)=>{})

const cdate=new Date().toString();
f.appendFile("TASK1_text.txt",cdate + '\n',(e)=>{
    if(e) throw e;
    console.log("Updated DATE & TIME")
})
f.readFile("TASK1_text.txt","utf8",(e,d)=>{
    if(e) throw e;
    console.log(d)
})