// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력 
const id = "hello";
const pw = "world";

const $id = document.querySelector('input[name="id"]');
const $pw = document.querySelector('input[name="pw"]');
const $form = document.querySelector('form');
const $result = document.querySelector('#result');

let result = '';


$form.addEventListener('submit', function(evnet){
    evnet.preventDefault();

    if($id.value === id && $pw.value === pw){
      result = 'success';
    } else {
      result = 'error';
    }
    
    $result.className = result;
    $result.innerHTML = result;
});
