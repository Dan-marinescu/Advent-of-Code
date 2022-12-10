let fs = require('fs');
let opp, me;
fs.readFile('./input2.txt', 'utf8', function (err, data) {
    let arr = data.split(/\r\n/);
    opp, me;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        [opp, result] = arr[i].split(" ")
        sum += getScore2( result,decideAndSetPick(opp, result))
    }
    console.log(sum);
});

const choicePointObj = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const resultPointObj = {
    "WIN": 6,
    "LOSE": 0,
    "TIE": 3
}

const resultObj = {
    'X': "LOSE",
    'Y': "TIE",
    'Z': "WIN"
}
const mirroredObj = {
    'A':'X',
    'B':'Y',
    'C':'Z'
}
function getScore(result, me) {
    return choicePointObj[me] + resultPointObj[result];
}

function getScore2(result,me){
    console.log(result,me)
    console.log(`${choicePointObj[me]} and ${resultObj[result]} and ${resultPointObj[resultObj[result]]}`)
    return choicePointObj[me]+resultPointObj[resultObj[result]]
}
function decide(opponent, me) {
    if (opponent === "A") {
        if (me === "X")
            return "TIE";
        else if (me === "Y")
            return "WIN";
        return "LOSE";

    } else if (opponent === "B") {
        if (me === "X")
            return "LOSE"
        else if (me === "Y")
            return "TIE"
        else
            return "WIN"
    }
    else {
        if (me === "X")
            return "WIN"
        else if (me === "Y")
            return "LOSE"
        else
            return "TIE"
    }

}

function decideAndSetPick(opponent, result) {
    if (result === "Y") //TIE
        me = mirroredObj[opponent]
    else if (result === "Z") { //WIN
        if (opponent === "A") {
            me = "Y"
        }
        else if (opponent === "B") {
            me = "Z"
        }
        else {
            me = "X"
        }
    } else { //LOSE
        if (opponent === "A") {
            me = "Z"
        }
        else if (opponent === "B") {
            me = "X"
        }
        else {
            me = "Y"
        }
    }
    return me
}
//A,X - ROCK | B,Y - PAPER | C,Z - Scissors
//X - LOSE | Y - DRAW | Z - WIN