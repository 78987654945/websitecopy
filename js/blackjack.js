var standcheck = 0
var round = 0
var dealervalue = 0
var playervalue = 0
var playerwin = 0
var dealerloss = 0
imageURLs = [
    ["../pictures/queen_of_clubs.png",10], ["../pictures/king_of_clubs.png",10], ["../pictures/jack_of_clubs.png",10], ["../pictures/9_of_clubs.png",9], ["../pictures/8_of_clubs.png",8], ["../pictures/7_of_clubs.png",7], ["../pictures/6_of_clubs.png",6], ["../pictures/5_of_clubs.png",5], ["../pictures/4_of_clubs.png",4], ["../pictures/3_of_clubs.png",3], ["../pictures/2_of_clubs.png",2], ["../pictures/10_of_clubs.png",10],
    ["../pictures/queen_of_diamonds.png",10], ["../pictures/king_of_diamonds.png",10] , ["../pictures/jack_of_diamonds.png",10], ["../pictures/9_of_diamonds.png",9], ["../pictures/8_of_diamonds.png",8], ["../pictures/7_of_diamonds.png",7], ["../pictures/6_of_diamonds.png",6], ["../pictures/5_of_diamonds.png",5], ["../pictures/4_of_diamonds.png",4], ["../pictures/3_of_diamonds.png",3], ["../pictures/2_of_diamonds.png",2], ["../pictures/10_of_diamonds.png",10],
    ["../pictures/queen_of_spades.png",10], ["../pictures/king_of_spades.png",10] , ["../pictures/jack_of_spades.png",10], ["../pictures/9_of_spades.png",9], ["../pictures/8_of_spades.png",8], ["../pictures/7_of_spades.png",7], ["../pictures/6_of_spades.png",6], ["../pictures/5_of_spades.png",5], ["../pictures/4_of_spades.png",4], ["../pictures/3_of_spades.png",3], ["../pictures/2_of_spades.png",2], ["../pictures/10_of_spades.png",10],
    ["../pictures/queen_of_hearts.png",10], ["../pictures/king_of_hearts.png",10] , ["../pictures/jack_of_hearts.png",10], ["../pictures/9_of_hearts.png",9], ["../pictures/8_of_hearts.png",8], ["../pictures/7_of_hearts.png",7], ["../pictures/6_of_hearts.png",6], ["../pictures/5_of_hearts.png",5], ["../pictures/4_of_hearts.png",4], ["../pictures/3_of_hearts.png",3], ["../pictures/2_of_hearts.png",2], ["../pictures/10_of_hearts.png",10]
]
function change(num){
    if (num == 0 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        dealervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card1')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 'stand') {
        standcheck += 1;
        if (standcheck==1){
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card2')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        if (dealervalue < 17) {
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card_1')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        if (dealervalue < 17) {
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card_2')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        if (dealervalue < 17) {
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card_3')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        if (dealervalue < 17) {
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card_4')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        if (dealervalue < 17) {
            img = '';
            randomIndex = Math.floor(Math.random() * imageURLs.length);
            img += imageURLs[randomIndex][0];
            dealervalue += imageURLs[randomIndex][1];
            image = document.getElementById('card_5')
            image.src = img;
            document.getElementById("check").innerHTML = dealervalue;
            document.getElementById("check2").innerHTML = playervalue;
        }    
        }                 
        }           
        }     
        }
        }
    }   
    if (num == 0 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card3')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 0 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card4')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 1 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card5')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 2 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card6')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 3 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card7')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 4 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card8')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    if (num == 5 && standcheck==0) {
        img = '';
        randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex][0];
        playervalue += imageURLs[randomIndex][1];
        image = document.getElementById('card9')
        image.src = img;
        document.getElementById("check").innerHTML = dealervalue;
        document.getElementById("check2").innerHTML = playervalue;
    }
    }
function stand() {
    if (playerwin == 0) {
    change('stand')
    if (dealervalue > 21) {
        dealerloss += 1
        document.getElementById('div_player').style.background = "white";
        setTimeout(function(){
        window.location.reload();
    }, 2000);
    }
    if (dealervalue > playervalue && dealerloss == 0) {
        document.getElementById('div_dealer').style.background = "white";
        setTimeout(function(){
        window.location.reload();
    }, 2000);
    }
    if (dealervalue < playervalue && dealerloss == 0) {
        document.getElementById('div_player').style.background = "white";
        setTimeout(function(){
        window.location.reload();
    }, 2000);
    }
    if (playervalue == dealervalue) {
        document.getElementById('div_dealer').style.background = "white";
        document.getElementById('div_player').style.background = "white";
        setTimeout(function(){
            window.location.reload();
        }, 2000);
    }
    }
}
function wincheck() {
    if (playervalue == 21) {
        playerwin += 1;
        document.getElementById('div_player').style.background = "white";
        setTimeout(function(){
        window.location.reload();
    }, 2000);
    } 
    if (playervalue > 21) {
        document.getElementById('div_dealer').style.background = "white";
        setTimeout(function(){
        window.location.reload();
    }, 2000);
    }
}
function deal() {
    round += 1
    if (round == 1) {
        change(1);
    }

    if (round == 2) {
        change(2);
    }

    if (round == 3) {
        change(3);
    }
    
    if (round == 4) {
        change(4);
    }

    if (round == 5) {
        change(5);
    }

    if (round == 6) {2
        change(6);
    }
    wincheck();
}
function run() {
    change(0);
}
function check() {
    document.getElementById("check2").innerHTML = playervalue;
}
function check2() {
    document.getElementById("check").innerHTML = dealervalue;
}