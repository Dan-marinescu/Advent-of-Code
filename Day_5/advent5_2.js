const fs = require('fs');
const { exit } = require('process');
let arr = [];

fs.readFile("./input5.txt", 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split(/\r\n/);
    let breakLoop = false;
    for (var i = 0; i < data.length && !breakLoop; i++) {
        for (let j = 1; j < data[i].length; j += 4) {
            if (data[i][j] === '1') {
                breakLoop = true;
                break;
            }
            if (data[i][j] !== ' ') {
                let tempIndex = Math.round(j / 4);
                arr[tempIndex] ? arr[tempIndex].unshift(data[i][j]) : arr[tempIndex] = [data[i][j]]
            }

        }
    }
    for (i = i + 1; i < data.length; i++) {
        let [amount, from, to] = data[i].replace(/\D/g, " ").replace(/ +/g, " ").trim().split(" ")
        changeOrder(amount, from, to)
    }
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += arr[i][arr[i].length - 1] ? arr[i][arr[i].length - 1] : ''

    }
    console.log(str);
})

function changeOrder(amount, from, to) {
    console.log(amount, from, to);
    arr[to - 1].push(...arr[from - 1].splice(arr[from - 1].length - amount, amount));
}
