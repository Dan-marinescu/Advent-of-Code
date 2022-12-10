let fs = require('fs');
fs.readFile('./input3.txt', 'utf8', function (err, data) {
    let arr = data.split(/\n/);
    let sum=0,firstHalf,secondHalf,wordLength,word;

    for(let i =0;i<arr.length;i++){
        word = arr[i]
        wordLength =word.length 
        firstHalf = word.slice(0,wordLength/2)
        secondHalf = word.slice(wordLength/2,wordLength)
        for(let j=0;j<firstHalf.length;j++){
            if(secondHalf.includes(firstHalf[j])){
                sum+= getCharNumber(firstHalf[j])
                console.log("conitnue?")
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
