document.getElementById("scheme1").addEventListener("click",function(){
    document.body.className = "light";
    localStorage.setItem("colorScheme", "light");
    console.log("light")
});
document.getElementById("scheme2").addEventListener("click",function(){
    document.body.className = "dark";
    localStorage.setItem("colorScheme", "dark");
    console.log("dark")
});
document.getElementById("scheme0").addEventListener("click",function(){
    document.body.className = "default";
    localStorage.setItem("colorScheme", "default");
    console.log("default")
});
function applyTheme(){
    const saved = localStorage.getItem("colorScheme");
    if (saved) {
        document.body.className = saved;
    }
}
document.addEventListener("DOMContentLoaded", applyTheme);
