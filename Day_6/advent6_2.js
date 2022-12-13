const fs = require('fs');

fs.readFile('./input6.txt','utf8',(err,data)=>{
    
    let arr = [];
    arr.push(...data.slice(0,14));
    for(let i =4;i<data.length;i++){
        if(noDupes(arr)){
            console.log(i);
            break;
        }
        else{
            arr.shift()
            arr.push(data[i]);
        }
    }
})

function noDupes(arr){
    let tempSet = new Set();
    for(let i=0;i<arr.length;i++){
        tempSet.add(arr[i])
    }
    return tempSet.size===14
}