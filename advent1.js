var fs = require('fs');
let minMax
let maxArr

fs.readFile('./input1.txt', 'utf8', function (err, data) {
    let arr = data.split(/\r\n/);
    let sum = 0;
    minMax = arr[0];
    maxArr = new Array(3)
    maxArr[0] = minMax;
    maxArr[1] = minMax;
    maxArr[2] = minMax;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            sum += parseInt(arr[i]);
        }
        else {
            if (minMax < sum) {
                minMax = handleMax(minMax, sum);
            }
            sum = 0;
        }
        console.log(maxArr)
    }
    console.log(maxArr.reduce((partialSum, num) => partialSum + num, 0))

});

function handleMax(minMax, num) {
    maxArr[maxArr.indexOf(minMax)] = num;
    minMax = maxArr[0];
    for (let i = 0; i < maxArr.length; i++) {
        if (minMax > maxArr[i]) {
            minMax = maxArr[i]
        }
    }
    return minMax;
}