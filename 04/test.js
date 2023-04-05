// const title = 'jeju';
// const url = 'https://daum.net/' + title;
// const url2 = `https://daum.net/${title}`;

// console.log(url,url2);


// function sum(x, y = 0){
//     // if(!y) y = 0;    
//     return x + y;
// }

// console.log(sum(10))

// const result = [1, 2, 3].map(function(item){
//     return item + 1;
// });

//const result = [1,2,3].map(item=>item+1);

// console.log(result);


// const items = [1, 2, 3, 4];
// console.log(...items);

// function sum(x, y, z){
//     return x + y + z;
// }

// const numbers = [1, 2, 3];
// // const [x, y, z] = [...numbers];
// const[, y] = [...numbers];
// console.log(y);
// console.log(x, y, z);


// function func(...param){
//     console.log(param);
// }

// func(1, 2, 3);

// const obj = {team:1, area:2};
// const team = obj.team;
// const area = obj.area;

// const {team1, area1} = obj;

// const number = 1;
// const obj1 = {
//     number: number,
// };






// Quiz1
// const year = 2022;
// const month = 11;
// const day = 3;

// function dateString(){
//     return `${year}-${month}-${day}`;
// }
// console.log(dateString());

// Quiz2
// const dateString = "2022-12-12";

// let date = dateString.split("-");
// console.log(date);

// Quiz3
// const text = "나는 XX를 좋아해";
// const item = "JS";

// let str = text.replace('XX', item);
// console.log(str);

// Quiz4
// const text = "안녕하세요. 나는 사람입니다.";
// const searchText = "사람";

// let answer = text.includes(searchText);
// console.log(answer);

// Quiz5
// const point1 = [12, 34, 80, 72];
// const point2 = [1, 80, 94];

// const arr = point1.concat(point2);
// let sum = 0;
// arr.forEach(function(value){
//     sum += value;
// })
// console.log(sum);

// Quiz6
// const a = 1.2;
// const b = 3.4;

// let sum = a + b;

// let answer = Math.floor(sum);
// console.log(answer);

// Quiz7
// const min = 1;
// const max = 10;

// let answer = (Math.random() * (max-min)) + min;
// answer = Math.floor(answer);
// console.log(answer);

// Quiz8
// const target = 10;
// const num = 3;

// function func(){
//     if(target % num == 0){
//     return console.log(true);
//     } else {
//         return console.log(false);
//     }
// };

// func();

// Quiz9
// const nick = "kakao";

// answer = nick.toUpperCase();
// console.log(answer);

// Quiz10
// const items = [1, "a", true, ["a"], { n: 1 }];
// let result = [];
// function func(){
//     for(let i = 0; i < items.length; i++){
//         if(typeof items[i] !== 'object'){
//             result.push(items[i]);
//         }
//     }
//     return result;
// }
// func();

// Quiz11
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;
// let result = [];
// let num = Math.floor(items.length / pageSize) + Math.floor(items.length % pageSize > 0 ? 1 : 0)
// for(let i = 0; i < num; i ++) {
//     result.push(items.splice(0, pageSize));
//     if(i + 1 !== num){
//         result.push("---");
//     }
// }
// result = result.join();
// console.log(result);

// Quiz12
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 2;
// let result = [];
// let num = Math.floor(items.length / pageSize) + Math.floor(items.length % pageSize > 0 ? 1 : 0)
// for(let i = 0; i < num; i ++) {
//     result.push(items.splice(0, pageSize));
// }
// console.log(result);

// Quiz13
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;

// const getStartIndexByPage = function (page) {
//   return (page - 1) * pageSize;
// };
// Quiz14
// const phoneNumber = `010-1234-1234`;
// const pattern = /\d{3}-\d{4}-\d{4}/; // \d -> 뒤에 숫자만 올 수 있게

// console.log(pattern.test(phoneNumber));

//Quiz15
// const user = { nick: "nio", age: 20, location: "제주" };

// user.age = 21;
// user.name = "부산";
// delete user.location;
// console.log(user);

// Quiz16
// const text = '{"a":1, "b":2}';
// let result = JSON.stringify(text);
// result = JSON.parse(result);
// console.log(result.replace(/\"/g, ''));

// Quiz17

// Quiz18
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = [];
// for(let i = 0; i < items.length; i++){
//     if(items[i] % 2 === 0){
//         result.push(items[i]);
//     }
// }

// console.log(result);

// Quiz19
// const list = [
//     {
//       id: 1,
//       title: "JS",
//       isPublic: true,
//     },
//     {
//       id: 2,
//       title: "기본",
//       isPublic: true,
//     },
//     {
//       id: 3,
//       title: "ecma",
//       isPublic: true,
//     },
//     {
//       id: 4,
//       title: "dom",
//       isPublic: false,
//     },
//   ];
// let result = [];
// for(let i = 0; i < list.length; i++){
//     if(list[i].isPublic == true){
//         result.push(list[i].title);
//     }
// }
// console.log(result);

// Quiz20
// const dday = "2022-02-02";
// let today = new Date(dday);
// today.setDate(today.getDate() + 1);
// let tomorrow = today.toLocaleString();
// console.log(tomorrow.slice(0,10));
