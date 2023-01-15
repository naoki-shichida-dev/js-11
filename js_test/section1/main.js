'use strict';

const globalVariable = 'グローバル';

function checkScope(){
  const localVariable = 'ローカル'; //グローバル

  //console.log(localVariable);
  console.log(globalVariable);
}

//console.log(globalVariable);

checkScope();

// console.log(localVariable);

const array = [1,2,3];
const array_2 = [
    [1,2,3],
    [4,5,6]
];
console.log(array_2[1][0])

const member = {
  'name': 'honda',
  'height': 170,
  'hobby': 'soccer'
}
console.log(member)
console.log(member.name)

const member_2 = {
  'honda': {
    'height': 170,
    'hobby': 'soccer'
  },
  'kagawa': {
    'height': 165,
    'hobby': 'soccer'
  }
}
console.log(member_2.kagawa.height)

const height = '90';
if (height === 90) {
  console.log('true')
} else {
  console.log('false')
}
/*
== eq
=== type & eq 型も一致させるため＝＝＝を使おう
<=, !== && ||
? true : false
* */

const scores = [1,2,3];
// for( score of scores ){
//   console.log(score);
// }

//組み込み関数、ユーザー定義関数がある
function test(){
  console.log('test');
}
test()

const myMap = new Map();
myMap.set('id', 3)
myMap.set('name', 'honda')
console.log(myMap)
console.log(myMap.get('name'))
const valueList = myMap.values();
let value;
for(value of valueList) {
  console.log(value)
}

const fruits = ['banana', 'apple']
console.log(fruits)
fruits.push('orange')
console.log(fruits)
// callback
fruits.forEach(function (input){
  console.log(input)
});
// =>
fruits.forEach(input => console.log(input))

const point = [1,2,3,4]
const filterPoint = point.filter((value) => {
  return value >= 3;
});
console.log(filterPoint)
const findPoint = point.find(value => value === 1)
console.log(findPoint)

const userList = [1,2,3,4]
const userIdList = userList.map(value => `user_${value}`)
console.log(userIdList)
console.table(userIdList)

const obj = {
  test1: 10,
  test2: 20
}
console.log(Object.values(obj))

const person = {
  name: 'honda',
  age: 30,

  getName() {
    console.log( this.name );
    return this;
  },
  getAge() {
    console.log( this.age );
    return this;
  }
};

person.getName().getAge();