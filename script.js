const num = Number (prompt("введите число"))
if(num === "" || isNaN (num)){
    alert("введите число") 
} else if( num % 2 === 0){
    alert("Чотная")
} else {
    alert(" Не Чотная")
}