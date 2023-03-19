// // const a = "a";
// // console.log(a);
// // a = '1';
// // console.log(a);


// //array create

// const todos = ['운동'];

// const todo = '공부';
// todos.push(todo);
// console.log(todos);

// //array read

// todos.forEach(function(todo){
//     console.log(todo);
// })

// //array update

// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function(todo){
//     return todo ===updateTodo;
// });

// // todos[updateIndex] = '게임';

// // console.log(todos);


// const newTodos = todos.map(function(todo){
//     if(todo === updateTodo){
//         return '게임';
//     }
//     return todo;
// });

// console.log(newTodos);

// //array delete


// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);


// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);

// const a = {a:1, b:1};
// a.c = 1; // 가능
// a = {c:1}; // 불가능 

// console.log(a);

// isNaN(1);
// isNaN("가나");

// parseInt('11', 10);

// function test(){
//     console.log('test()');
// }

// var id = setInterval(test, 1000);


// var nick = 'aiden'; // 전역변수
// function test() {
//     var age = 30;
//     console.log(nick, age);
// }

// test()
// console.log(age);

// var name = 'global';
// function test() {
//     console.log(name);
//     var name = 'local';
//     console.log(name);
// }
// test();


// function test2(){
//     console.log(test);
// }

// var car = {
//     year: '2023',
//     starting: function(){
//         console.log('starting...');
//     },
// };
// car.starting();

let sum = 0;
while (true) {
  let input = window.prompt("숫자를 입력하세요.");
  let value = Number(input);
  if (input !== null && !(isNaN(value))) {
    sum += value;
    console.log(sum);
  } else {
    console.log(sum);
    break;
  };
}