

var allitems = document.querySelectorAll('.card-items div')
var content = document.querySelector('.content')
var btn = document.querySelector('.addtochart')
var div2 =document.querySelector('.div2')
var totlalprice = 0;

allitems.forEach( function(item){
    item.onclick = function(){
        totlalprice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent +"/";

        if( content.innerHTML !=""){
            btn.style.display= "block";
            div2.style.display="block";
            
        }
    }
})

btn.onclick =function(){
    div2.innerHTML = totlalprice
}