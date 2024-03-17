const fs = require('fs');
// reading files
fs.readFile('./docs/blog.txt',(err, data) => {
    if(err){
        console.log(err)
    }
    //printing buffer data
    //console.log(data)
     //printing string format 
     console.log(data.toString())
})


//writing files

fs.writeFile('./docs/blog_1.txt',"This is created and written by write file", () => {
    console.log("File was written and updated")
})


//directories 

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
        if(err){
            console.log(`Unable to create directory due to ${err}`)
        }
        console.log("New Directory is created !")
    })
} else {
    console.log("Folder already exist!")
}


fs.rmdir('./assets',(err) =>{
    if(err){
        console.log(`Unable to delete directory due to ${err}`)
    }
    console.log("Directory is now deleted !")
})


//deleting files
if(fs.existsSync('./docs/blog_1.txt')) {
    fs.unlink('./docs/blog_1.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log("file is deleted!")
    })
}