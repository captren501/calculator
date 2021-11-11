function add(x,y){
    return(x+y)
}

function subtract(x,y){
    return(x-y)
}

function divsion(x,y){
    return(X/Y)
}

function mutply(x,y){
    return(x*y)
}

// temp_1 =""  
// temp_2 =""
// // temp_1 = document.getElementById(main).valueS
// temp_2 =
function typist(info){
    document.getElementById('main').value += info
}
function answer(){
 let equation  = document.getElementById('main').value
 console.log(equation)
 document.getElementById('main').value = eval(equation)
}