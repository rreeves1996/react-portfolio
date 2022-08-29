document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {
        var movingValue = move.getAttribute("data-value");

        var x = (e.clientX * movingValue) / 250;
        var y = (e.clientY * movingValue) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}