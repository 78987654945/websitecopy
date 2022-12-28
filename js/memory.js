function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
function run() {
    round = 0
    clear = 0
    mylist2 = []
    mylist = []
    setTimeout(run2,1000);
}
function run2() {
    round += 1
    createlist(round);
    show(round);
    setTimeout(check,1800);
}
function clicked(num) {
    if (clear == 1) {
        green(num);
        createlist2(num);
        setTimeout(check,1800);
    }
}
function red(check) {
    document.getElementById(mylist[check]).style.backgroundColor = "#B83232";
    setTimeout(white,500,check);
}
function white(yup) {
    document.getElementById(mylist[yup]).style.backgroundColor = "#808080";
    round_check += 1
    if (round==round_check) {
        clear += 1
    }
}
function green(idd) {
    if (window.innerWidth > 768) {
        document.getElementById("_" + idd.toString()).style.border = "solid 5px black";
    }
    if (window.innerWidth < 768) {
        document.getElementById("_" + idd.toString()).style.backgroundColor = "#fff"
    }
    setTimeout(noborder,100,idd);
}
function noborder(yuppp) {
    if (window.innerWidth > 768) {
        document.getElementById("_" + yuppp.toString()).style.border = "none";
    }
    if (window.innerWidth < 768) {
        document.getElementById("_" + yuppp.toString()).style.backgroundColor = "#808080"
    }
}
function show(num2) {
    delay = 0
    round = 0
    round_check = 0
    for (let s = 0; s < mylist.length; s++) {
        round += 1
        document.getElementById('number').innerHTML = "round: " + round;
        clear = 0
        setTimeout(red,delay,s);
        delay += 1000   
    }
}
function createlist(num2) {
    mylist = []
    for (let i = 0; i < num2; i++) {
        mylist.push("_" + getRandomInt(24).toString());
    }
}
function createlist2(num3) {
    mylist2.push("_" + num3);
}
function check() {
    if (mylist.toString() == mylist2.toString()) {
        mylist2 = []
        run2();
    }
    if (mylist.length == mylist2.length) {
        if (mylist.toString() != mylist2.toString()) {
            window.location.reload();
        }
    }
}
function mouseover(input) {
    if (window.innerWidth > 768) {
        document.getElementById("_" + input.toString()).style.border = "solid 5px white";
    }
}
function mouseleave(input) {
    if (window.innerWidth > 768) {
        document.getElementById("_" + input.toString()).style.border = "none";
    }
}