let fs = require('fs')

let counter = 0;
fs.readFile("./input4.txt", 'utf8', (err, data) => {
    if (err)
        throw err;
    let elf1,elf2,elf1Lower,elf1Upper,elf2Lower,elf2Upper;
    data = data.split(/\r\n/)
    for (let i = 0; i < data.length; i++) {
        [elf1,elf2] = data[i].split(",");
        [elf1Lower,elf1Upper] = elf1.split("-");
        [elf2Lower,elf2Upper] = elf2.split("-");
        elf1Lower = parseInt(elf1Lower)
        elf1Upper = parseInt(elf1Upper)
        elf2Lower = parseInt(elf2Lower)
        elf2Upper = parseInt(elf2Upper)
        if((between(elf1Lower,elf1Upper,elf2Lower,elf2Upper))){
            counter++;
        }
        
    }
    console.log(counter);

})

function between(lowerRange1,upperRange1,lowerRange2,upperRange2){
    return (lowerRange1 <= lowerRange2 && upperRange1 >= upperRange2) || (lowerRange2 <= lowerRange1 && upperRange2>= upperRange1)
}