const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    data = data.replace(/\r/g, "").split(/\n/)
    let currentFolder = "";
    let structureObj = {
        
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i][0]==="$"){
            let commands = data[i].split(" ")
            if(commands[1] ==="cd")
                handleCD();
            if(commands[1]==="ls")
                handleLS()
        }else{

        }
    }
})

function handleCD(){

}
function handleLS(){

}
