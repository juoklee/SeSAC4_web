let obj = {
    key1: "value1",
    key2: "value2",
    key3: function() {
        console.log("a");
    }
};

//key1값을 가져와서, 변수명을 key00으로 바꾸겠다.
const { key1: key00, key2, key3, key4="b" } = obj;

console.log("key1:", key00);
console.log("key2:", key2);
key3();
console.log("key4:", key4);



//...은 나머지 객체를 다 가져온다.
let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2;

console.log(rest);