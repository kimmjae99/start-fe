const $btn = document.querySelector('#btn');
const $num = document.querySelector('#num')
const $result = document.querySelector('#result');

function checkNum(num){
    if(Number(num) && num % 1 === 0){
        return true;
    }else{
        return false;
    }
}

function printmul(){
    let number = $num.value
    if(checkNum(number)){
        let mul = "";
        for(let i = 1; i < 10; i++){
            mul += `<div>${number} x ${i} = ${number * i}`;
        }
        $result.innerHTML = mul;
    }else{
        window.alert("숫자를 입력하시오.");
    }
    
}
$btn.addEventListener('click', printmul);