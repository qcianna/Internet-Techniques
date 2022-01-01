const canvas2 = document.getElementById('triangle');
const ctx2 = canvas2.getContext('2d');

function draw() {

    ctx2.beginPath();

    let vecX = [200, 0, 400];
    let vecY = [0, 400, 400];

    for(let j=0; j<vecX.length; j++) {
        ctx2.rect(vecX[j], vecY[j], 1, 1);
    }

    let x = 200;
    let y = 200;
    let i = 0;

    setInterval(pixel, 3);

    function pixel() {

        if(i === 10000) {
            return;
        }

        let rand = Math.floor(Math.random() * 3);
        x = Math.round((vecX[rand] + x) / 2);
        y = Math.round((vecY[rand] + y) / 2);

        ctx2.rect(x, y, 1, 1);
        ctx2.stroke();

        i++;
    }
}

draw();