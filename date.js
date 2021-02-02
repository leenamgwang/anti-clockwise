let hour, min, sec;
// let styles = document.styleform.styleSelect;
window.onload = () => {
    window.setInterval(redraw, 1000);
    // document.body.classList.add(styles.options[styles.selectedIndex].value);
}
let redraw = function () {
    hour = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    document.getElementById("hour").style.transform = "rotate(-" + 30 * hour + "deg)";
    document.getElementById("min").style.transform = "rotate(-" + 6 * min + "deg)";
    document.getElementById("sec").style.transform = "rotate(-" + 6 * sec + "deg)";

}