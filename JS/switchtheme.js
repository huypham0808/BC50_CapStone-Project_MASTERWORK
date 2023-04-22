var btnSwitchMoon = document.getElementById('btnSwitchMoon').onclick = function () {
    document.getElementById('body').className = "dark__header";

    document.getElementById('btnSwitchSun').style.display = "inline-block";
    document.getElementById('btnSwitchMoon').style.display = "none";
}
var btnSwitchSun = document.getElementById('btnSwitchSun').onclick = function () {
    document.getElementById('body').classList.remove("dark__header");
    document.getElementById('btnSwitchMoon').style.display = "inline-block";
    document.getElementById('btnSwitchSun').style.display = "none";


}