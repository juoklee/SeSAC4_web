function Ex62() {
    return (
      <div>
  
      </div>
    );
  }

export default Ex62;

class Student {
    constructor(name, college, age, id) {
        this.name = name;
        this.college = college;
        this.age = age;
        this.id = id;
    }
    getInfo() {
        console.log("이름: ", this.name);
        console.log("학교: ", this.college);
        console.log("나이: ", this.age);
        console.log("학번: ", this.id);
    }
}

class Kim extends Student {
    constructor(name, college, age, id, gender) {
        super(name, college, age, id);
        this.gender = gender;
    }
}

class Lee extends Student{
    constructor(name, college, age, id, gender) {
        super(name, college, age, id);
        this.gender = gender;
    }
    getInfo() {
        super.getInfo();
        console.log("성별: ", this.gender);
    }
}

let student1 = new Lee("주옥","새싹대","25","175959","여");
student1.getInfo();