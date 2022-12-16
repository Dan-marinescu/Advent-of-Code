const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    data = data.replace(/\r/g, "").split(/\n/)
    for (let i = 0; i < data.length; i++)
        data[i] = data[i].split("")
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (canLookUp(data[i][j], data, i, j)||canLookDown(data[i][j], data, i, j) ||canLookLeft(data[i][j], data, i, j) ||canLookRight(data[i][j], data, i, j)) {
                counter++;
            }
        }
    }
    console.log(counter)


})
function canLookUp(val, arr, orignalI, orignalJ) {
    for (i = orignalI - 1; i >= 0; i--) {
        if (arr[i][orignalJ] >= val)
            return false;
    }
    return true;
}

function canLookDown(val, arr, orignalI, orignalJ) {
    for (let i = orignalI + 1; i < arr.length; i++) {
        if (arr[i][orignalJ] >= val)
            return false;
    }
    return true;
}

function canLookLeft(val, arr, orignalI, orignalJ) {
    for (let j = orignalJ - 1; j >=0; j--) {
        if (arr[orignalI][j] >= val)
            return false;
    }
    return true;
}

function canLookRight(val, arr, orignalI, orignalJ) {
    for (let j = orignalJ + 1; j<arr.length; j++) {
        if (arr[orignalI][j] >= val)
            return false;
    }
    return true;
}