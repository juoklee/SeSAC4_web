class Cat {
    constructor(name) {
        this.name = name;
    }
    mew(){
        console.log(this.name + "야옹");
    }
}

//객체생성
var cat1 = new Cat("나비");
var cat2 = new Cat("냥이");

console.log( cat1 );
cat1.mew();
cat2.mew();