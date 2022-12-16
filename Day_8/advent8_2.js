const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    data = data.replace(/\r/g, "").split(/\n/)
    for (let i = 0; i < data.length; i++)
        data[i] = data[i].split("")
    let max = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let currentTreeScenicScore = canLookUp(data[i][j], data, i, j) * canLookDown(data[i][j], data, i, j) * canLookLeft(data[i][j], data, i, j) * canLookRight(data[i][j], data, i, j);
            if (max < currentTreeScenicScore) {
                max = currentTreeScenicScore
            }
        }
    }
    console.log(max)


})
function canLookUp(val, arr, orignalI, orignalJ) {
    let counter = 0;
    for (i = orignalI - 1; i >= 0; i--) {
        counter++;
        if (arr[i][orignalJ] >= val)
            return counter;
    }
    return counter;
}

function canLookDown(val, arr, orignalI, orignalJ) {
    let counter = 0;
    for (let i = orignalI + 1; i < arr.length; i++) {
        counter++;
        if (arr[i][orignalJ] >= val)
        return counter;
    }
    return counter;
}

function canLookLeft(val, arr, orignalI, orignalJ) {
    let counter = 0;
    for (let j = orignalJ - 1; j >= 0; j--) {
        counter++;
        if (arr[orignalI][j] >= val)
        return counter;
    }
    return counter;
}

function canLookRight(val, arr, orignalI, orignalJ) {
    let counter = 0;
    for (let j = orignalJ + 1; j < arr.length; j++) {
        counter++;
        if (arr[orignalI][j] >= val)
            return counter;
    }
    return counter;
}