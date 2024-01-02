function readMore(){
    let dots = document.getElementById("dots")
    let more = document.getElementById("more")
    let btn = document.getElementById("btn")

    if(dots.style.display === "none"){
      dots.style.display="inline"
      more.style.display="none"
      btn.innerHTML="►"
    } else{
        dots.style.display="none"
        more.style.display="inline"
        btn.innerHTML="▼"
    }
}
function readMore1(){
  let dots1 = document.getElementById("dots1")
  let more1 = document.getElementById("more1")
  let btn1 = document.getElementById("btn1")

  if(dots1.style.display === "none"){
    dots1.style.display="inline"
    more1.style.display="none"
    btn1.innerHTML="►"
  } else{
      dots1.style.display="none"
      more1.style.display="inline"
      btn1.innerHTML="▼"
  }
}
function readMore2(){
let dots2 = document.getElementById("dots2")
let more2 = document.getElementById("more2")
let btn2 = document.getElementById("btn2")

if(dots2.style.display === "none"){
  dots2.style.display="inline"
  more2.style.display="none"
  btn2.innerHTML="►"
} else{
    dots2.style.display="none"
    more2.style.display="inline"
    btn2.innerHTML="▼"
}
}
function readMore3(){
let dots3 = document.getElementById("dots3")
let more3 = document.getElementById("more3")
let btn3 = document.getElementById("btn3")

if(dots3.style.display === "none"){
  dots3.style.display="inline"
  more3.style.display="none"
  btn3.innerHTML="►"
} else{
    dots3.style.display="none"
    more3.style.display="inline"
    btn3.innerHTML="▼"
}
}
function readMore4(){
let dots4 = document.getElementById("dots4")
let more4 = document.getElementById("more4")
let btn4 = document.getElementById("btn4")

if(dots4.style.display === "none"){
  dots4.style.display="inline"
  more4.style.display="none"
  btn4.innerHTML="►"
} else{
    dots4.style.display="none"
    more4.style.display="inline"
    btn4.innerHTML="▼"
}
}
function readMore5(){
let dots5 = document.getElementById("dots5")
let more5 = document.getElementById("more5")
let btn5 = document.getElementById("btn5")

if(dots5.style.display === "none"){
  dots5.style.display="inline"
  more5.style.display="none"
  btn5.innerHTML="►"
} else{
    dots5.style.display="none"
    more5.style.display="inline"
    btn5.innerHTML="▼"
}
}
function readMore6(){
let dots6 = document.getElementById("dots6")
let more6 = document.getElementById("more6")
let btn6 = document.getElementById("btn6")

if(dots6.style.display === "none"){
  dots6.style.display="inline"
  more6.style.display="none"
  btn6.innerHTML="►"
} else{
    dots6.style.display="none"
    more6.style.display="inline"
    btn6.innerHTML="►"
}
}
function readMore7(){
let dots7 = document.getElementById("dots7")
let more7 = document.getElementById("more7")
let btn7 = document.getElementById("btn7")

if(dots7.style.display === "none"){
  dots7.style.display="inline"
  more7.style.display="none"
  btn7.innerHTML="►"
} else{
    dots7.style.display="none"
    more7.style.display="inline"
    btn7.innerHTML="►"
}
}
function readMore8(){
let dots8 = document.getElementById("dots8")
let more8 = document.getElementById("more8")
let btn8 = document.getElementById("btn8")

if(dots8.style.display === "none"){
  dots8.style.display="inline"
  more8.style.display="none"
  btn8.innerHTML="►"
} else{
    dots8.style.display="none"
    more8.style.display="inline"
    btn8.innerHTML="►"
}
}
function readMore9(){
    let dots9 = document.getElementById("dots9")
    let more9 = document.getElementById("more9")
    
    if(dots9.style.display === "none"){
      dots9.style.display="inline"
      more9.style.display="none"
    } else{
        dots9.style.display="none"
        more9.style.display="inline"
    }
    }
    function readMore10(){
    let dots10 = document.getElementById("dots10")
    let more10 = document.getElementById("more10")
    
    if(dots10.style.display === "none"){
      dots10.style.display="inline"
      more10.style.display="none"
    } else{
        dots10.style.display="none"
        more10.style.display="inline"
    }
    }

let text='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> </body> </html><body> <h1>Простая домашняя страница</h1> <h2>Раздел 1</h2> <p id="intro">Hello World!</p> <p class="sub-paragraph">Как твои дела?</p> <p class="sub-paragraph">Очень хорошо.</p> <h2>Раздел 2</h2> </body><body> <h1>Простая домашняя страница</h1> <h2>Раздел 1</h2> <p id="intro">Hello World!</p> <p class="sub-paragraph">Как твои дела?</p> <p class="sub-paragraph">Очень хорошо.</p> <h2>Раздел 2</h2> </body>'
let p=document.querySelector('#text')
let cursor = document.createElement('span')
cursor.textContent='|'
let text1=''
let input=(i)=>{
    setTimeout(()=>{
        text1+=text[i]
        p.textContent=text1
        p.append(cursor)
    },50*i)
}

for (let i=0; i< text.length-1; i++){
    input(i)
}