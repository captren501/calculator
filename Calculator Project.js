
function typist(info){
    document.getElementById('main').value += info
}
function answer(){
 let equation  = document.getElementById('main').value
 console.log(equation)
 document.getElementById('main').value = eval(equation)
}