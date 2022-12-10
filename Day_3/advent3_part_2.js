let fs = require('fs');
fs.readFile('./input3.txt', 'utf8', function (err, data) {
    let arr = data.split(/\n/);
    let sum=0,lineLength,line1,line2,line3;

    for(let i =0;i<arr.length;i+=3){
        line1 = arr[i]
        line2 = arr[i+1]
        line3 = arr[i+2]
        lineLength =line1.length 
        for(let j=0;j<line1.length;j++){
            if(line2.includes(line1[j])&&line3.includes(line1[j])){
                sum+= getCharNumber(line1[j])
                break;
            }
        }
        console.log(`${sum}`)
    }
});

function getCharNumber(char){
    if(char.match(/[a-z]/g)){
        return char.charCodeAt()-96  
    }
    return char.charCodeAt()-64+26;
}
