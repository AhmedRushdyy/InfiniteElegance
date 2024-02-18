product=document.getElementsByClassName('feat-product')
for(let i = 0; i<product.length;i++){
product[i].onclick=function(){
    window.location.href='product.html'
    }
}

let cartb = document.getElementById('cart-but')
let cartv = document.getElementById('cart-view')
let add = document.getElementById('add')
cartb.onclick=function(){
    if (cartv.style.right === "-5vw") {
        cartv.style.right = "-120vw";
        cartb.style.color = 'black';
      } else {
        cartv.style.right = "-5vw";
        cartb.style.color = '#088178';
      }
}

let close = document.getElementsByClassName('close')
let cartp = document.getElementsByClassName('cart-pro')
for(let c = 0; c<cartp.length;c++)
for(let c = 0; c<close.length;c++)
close[c].onclick=function(){
    cartp[c].style.display='none'
}
add.onclick=function(){
    if (cartv.style.right === "-5vw") {
        cartv.style.right = "-120vw";
      } else {
        cartv.style.right = "-5vw";
      }
}

let main = document.getElementById('mainimg');
let photo = document.getElementsByClassName('image');
let pname = document.getElementById('pname')
let cost = document.getElementById('cost')

  photo[0].onclick=function(){
    pname.innerHTML='<h4>Black Pants</h4>'
    cost.innerHTML='<h2>90$</h2>'
    main.src=photo[0].src
  }
  photo[1].onclick=function(){
    pname.innerHTML='<h4>Black Shirt</h4>'
    cost.innerHTML='<h2>107$</h2>'
    main.src=photo[1].src
  }
  photo[2].onclick=function(){
    pname.innerHTML='<h4>White Shoe</h4>'
    cost.innerHTML='<h2>110$</h2>'
    main.src=photo[2].src
  }
  photo[3].onclick=function(){
    pname.innerHTML='<h4>Brown Shirt</h4>'
    cost.innerHTML='<h2>115$</h2>'
    main.src=photo[3].src
  }
  photo[4].onclick=function(){
    pname.innerHTML='<h4>Black & Green Shirt</h4>'
    cost.innerHTML='<h2>150$</h2>'
    main.src=photo[4].src
  }

