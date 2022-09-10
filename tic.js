x=0
button1_num=0
button2_num=0
button3_num=0
button4_num=0
button5_num=0
button6_num=0
button7_num=0
button8_num=0
button9_num=0
button1_col=''
button2_col=''
button3_col=''
button4_col=''
button5_col=''
button6_col=''
button7_col=''
button8_col=''
button9_col=''

function myFunction2(){
    if (button1_col == 'blue' && button2_col == 'blue' && button3_col == 'blue' || button4_col == 'blue' && button5_col == 'blue' && button6_col == 'blue' || button7_col == 'blue' && button8_col == 'blue' && button9_col == 'blue'|| button1_col == 'blue' && button4_col == 'blue' && button7_col == 'blue' || button2_col == 'blue' && button5_col == 'blue' && button8_col == 'blue' || button3_col == 'blue' && button6_col == 'blue' && button9_col == 'blue' || button1_col == 'blue' && button5_col == 'blue' && button9_col == 'blue' || button3_col == 'blue' && button5_col == 'blue' && button7_col == 'blue'){
      document.getElementById('button1').style.background = "#347FCA";
      document.getElementById('button2').style.background = "#347FCA";
      document.getElementById('button3').style.background = "#347FCA";
      document.getElementById('button4').style.background = "#347FCA";
      document.getElementById('button5').style.background = "#347FCA";
      document.getElementById('button6').style.background = "#347FCA";
      document.getElementById('button7').style.background = "#347FCA";
      document.getElementById('button8').style.background = "#347FCA";
      document.getElementById('button9').style.background = "#347FCA";
      setTimeout(function(){
        window.location.reload();
    }, 1000);
    }
    else if (button1_col == 'red' && button2_col == 'red' && button3_col == 'red' || button4_col == 'red' && button5_col == 'red' && button6_col == 'red' || button7_col == 'red' && button8_col == 'red' && button9_col == 'red'|| button1_col == 'red' && button4_col == 'red' && button7_col == 'red' || button2_col == 'red' && button5_col == 'red' && button8_col == 'red' || button3_col == 'red' && button6_col == 'red' && button9_col == 'red' || button1_col == 'red' && button5_col == 'red' && button9_col == 'red' || button3_col == 'red' && button5_col == 'red' && button7_col == 'red'){
      document.getElementById('button1').style.background = "#B83232";
      document.getElementById('button2').style.background = "#B83232";
      document.getElementById('button3').style.background = "#B83232";
      document.getElementById('button4').style.background = "#B83232";
      document.getElementById('button5').style.background = "#B83232";
      document.getElementById('button6').style.background = "#B83232";
      document.getElementById('button7').style.background = "#B83232";
      document.getElementById('button8').style.background = "#B83232";
      document.getElementById('button9').style.background = "#B83232";
      setTimeout(function(){
        window.location.reload();
    }, 1000);
    }
}

function myFunction(button_number){
  if (button_number == 1){
    if (button1_num == 0){
      if (x%2==0){
        document.getElementById('button1').style.background = "#347FCA";
        x+=1
        button1_col='blue'
      }
      else{
        document.getElementById('button1').style.background = "#B83232";
        x-=1
        button1_col='red'
      }
      button1_num+=1
    }
  }

  else if (button_number == 2){
    if (button2_num == 0){
      if (x%2==0){
        document.getElementById('button2').style.background = "#347FCA";
        x+=1
        button2_col='blue'
      }
      else{
        document.getElementById('button2').style.background = "#B83232";
        x-=1
        button2_col='red'
      }
    }
    button2_num+=1
  }

  else if (button_number == 3){
    if (button3_num == 0){
      if (x%2==0){
        document.getElementById('button3').style.background = "#347FCA";
        x+=1
        button3_col='blue'
      }
      else{
        document.getElementById('button3').style.background = "#B83232";
        x-=1
        button3_col='red'
      }
    }
    button3_num+=1
  }

  else if (button_number == 4){
    if (button4_num == 0){
      if (x%2==0){
        document.getElementById('button4').style.background = "#347FCA";
        x+=1
        button4_col='blue'
      }
      else{
        document.getElementById('button4').style.background = "#B83232";
        x-=1
        button4_col='red'
      }
    }
    button4_num+=1
  }

  else if (button_number == 5){
    if (button5_num == 0){
      if (x%2==0){
        document.getElementById('button5').style.background = "#347FCA";
        x+=1
        button5_col='blue'
      }
      else{
        document.getElementById('button5').style.background = "#B83232";
        x-=1
        button5_col='red'
      }
    }
    button5_num+=1
  }

  else if (button_number == 6){
    if (button6_num == 0){
      if (x%2==0){
        document.getElementById('button6').style.background = "#347FCA";
        x+=1
        button6_col='blue'
      }
      else{
        document.getElementById('button6').style.background = "#B83232";
        x-=1
        button6_col='red'
      }
    }
    button6_num+=1
  }

  else if (button_number == 7){
    if (button7_num == 0){
      if (x%2==0){
        document.getElementById('button7').style.background = "#347FCA";
        x+=1
        button7_col='blue'
      }
      else{
        document.getElementById('button7').style.background = "#B83232";
        x-=1
        button7_col='red'
      }
    }
    button7_num+=1
  }

  else if (button_number == 8){
    if (button8_num == 0){
      if (x%2==0){
        document.getElementById('button8').style.background = "#347FCA";
        x+=1
        button8_col='blue'
      }
      else{
        document.getElementById('button8').style.background = "#B83232";
        x-=1
        button8_col='red'
      }
    }
    button8_num+=1
  }

  else if (button_number == 9){
    if (button9_num == 0){
      if (x%2==0){
        document.getElementById('button9').style.background = "#347FCA";
        x+=1
        button9_col='blue'
      }
      else{
        document.getElementById('button9').style.background = "#B83232";
        x-=1
        button9_col='red'
      }
    }
    button9_num+=1
  }
}