function run(num) {
    amount = 0
    amount = num
    document.getElementById('maindiv').style.paddingTop = ((window.innerHeight / 2) - amount) + "px";
}
setInterval(() => {
    document.getElementById('maindiv').style.paddingTop = ((window.innerHeight / 2) - amount) + "px";
}, 0)
