function plotFunction() {
    let selected = document.getElementById("functionSelect").value;

    let x = [];
    let y = [];

    // Generate x values (-10 to +10, step 0.1)
    for (let i = -100; i <= 100; i++) {
        let val = i / 10;
        x.push(val);

        if (selected === "sin") y.push(Math.sin(val));
        if (selected === "cos") y.push(Math.cos(val));
        if (selected === "exp") y.push(Math.exp(val / 3)); // scaled to avoid overflow
    }

    let canvas = document.getElementById("plotCanvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "#888";
    ctx.stroke();

    // Plot the selected function
    ctx.beginPath();
    ctx.strokeStyle = "blue";

    for (let i = 0; i < x.length; i++) {
        let px = (i / x.length) * canvas.width;
        let py = canvas.height / 2 - (y[i] * 40);

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }

    ctx.stroke();

    // Title
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";

    let title = selected === "sin" ? "Sine Wave" :
                selected === "cos" ? "Cosine Wave" : "Exponential Curve";

    ctx.fillText(title, 10, 30);
}
