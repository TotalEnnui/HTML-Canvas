
function myFunc(){
        const canvas = document.getElementById('myCanvas');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        
        var ctx = canvas.getContext("2d");
        // ctx.beginPath();
        //ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.fillRect(50, 50, 100, 100);

        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.lineTo(250, 250);
        ctx.stroke();
}
