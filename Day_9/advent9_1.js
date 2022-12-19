const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    data = data.replace(/\r/g, "").split(/\n/)
    // console.log(data)
    let set = new Set();
    
    let [headX,headY,tailX,tailY] = [0,0,0,0];
    set.add(`${tailX},${tailY}`)
    for (let i = 0; i < data.length; i++) {
        let [direction, amount] = data[i].split(" ");
        // console.log(direction, amount)
        for (let j = 0; j < amount; j++) {
            let previousX = headX;
            let previousY = headY;
            if (direction === "R") {
                headX++;
            } else if (direction === "L") {
                headX--;
            } else if (direction === "U") {
                headY++;
            } else {
                headY--
            }
            if(needToMove(headX,headY,tailX,tailY)){
                tailX=previousX;
                tailY=previousY;
                set.add(`${tailX},${tailY}`)
            }
            console.log(headX,headY,tailX,tailY)
        }
    }
    console.log(set.size)

})


function needToMove(headX,headY,tailX,tailY) {
    return Math.abs(headX - tailX) >=2 || Math.abs(headY - tailY) >= 2
}