const CircleWidth = 10;
const CircleHeight = 10;

function GetCursorPosition() {
    document.addEventListener("mousemove", (e) => {
        MoveCircle(e.clientX, e.clientY);
    });
}

/**
 *
 */
function MoveCircle(x, y) {
    const circle = document.getElementById("circle");
    if (x <= 0 || y <= 0) {
        circle.style.width = 0;
        circle.style.height = 0;
        return;
    } else {
        circle.style.width = `${CircleWidth}px`;
        circle.style.height = `${CircleHeight}px`;
    }
    circle.style.transform = `translate(${x - CircleWidth / 2}px, ${y - CircleHeight / 2}px)`;
}

document.addEventListener("DOMContentLoaded", (e) => {
    GetCursorPosition();
});
