const timer = document.getElementById("root");

function countdown() {
    const now = new Date();
    timer.innerHTML = now.toLocaleTimeString()
}

setInterval(countdown, 1000);

timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
