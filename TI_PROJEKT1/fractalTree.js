const canvas = document.getElementById('fractalTree');
const width = canvas.scrollWidth;
const height = canvas.scrollHeight;
const ctx = canvas.getContext('2d');
ctx.shadowColor = 'black';
ctx.shadowBlur = 10;


function branch(beginX, beginY, angle, curve, branchLen, branchWidth, strokeColor, fillColor) {

    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = branchWidth;
    ctx.translate(beginX, beginY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0,0);

    if(angle > 0) {
        ctx.bezierCurveTo(10, -branchLen/2, 10, -branchLen/2, 0, -branchLen);
    } else {
        ctx.bezierCurveTo(10, -branchLen/2, -10, -branchLen/2, 0, -branchLen);
    }

    ctx.stroke();

    if (branchLen < 4) {
        ctx.beginPath();
        ctx.arc(0, -branchLen, 10, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }

    branch(0, -branchLen, angle + curve, curve, branchLen * 0.72, branchWidth * 0.55);
    branch(0, -branchLen, angle - curve, curve, branchLen * 0.72, branchWidth * 0.55);

    ctx.restore();
}

branch(width/2, height, 0, 20, 130, 30, 'brown', 'pink');

function generateTree() {
    ctx.clearRect(0,0, width, height);
    let branchLen = (Math.random() * 20) + 100;
    let angle = 0;
    let curve = (Math.random() * 20) + 10;
    let branchWidth = (Math.random() * 20) + 15;
    let strokeColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    let fillColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    branch(width/2, height, angle, curve, branchLen, branchWidth, strokeColor, fillColor);
}
