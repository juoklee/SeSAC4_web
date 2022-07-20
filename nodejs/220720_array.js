//배열 구조 분해
let list = ['apple', 'banana'];

[item1, item2 = 'peach', item3 = 'melon'] = list;

console.log( "item1: ", item1 );
console.log( "item2: ", item2 );
console.log( "item3: ", item3 );


//두 수 바꾸기
let x=1, y=3;
[y, x] = [x, y];

