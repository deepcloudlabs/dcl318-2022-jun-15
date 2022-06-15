// Object-based
// Object syntax
let jack = {
    fullname: "jack shephard",
    identity: "11111111110",
    email: "jack@example.com",
    gsm: "+90 555 5555",
    sayHello: function(){
        console.log(`Hello, ${this.fullname}!`);
    }
};
jack.sayHello();
// Class Syntax
let Employee = function(fullname,identity,email,gsm="+90 555 1111"){
    this.fullname = fullname;
    this.identity = identity;
    this.email = email;
    this.gsm = gsm;
    this.sayHello = function(){
        console.log(`Hello, ${this.fullname}!`);
    }
};
let kate = new Employee("kate austen", "123456789101", "kate@example.com", "+90 555 4444");
let james = new Employee("james sawyer", "123456789121", "james@example.com", "+90 555 3333");
let jin = new Employee("jin kwon", "123456789131", "jin@example.com");
kate.sayHello();
james.sayHello();
console.log(jin.gsm);
class Customer { // ES6 -- syntactic sugar --> let Customer = function(...){ ... }
    constructor(fullname,identity,email,gsm="+90 555 1111") {
        this.fullname = fullname;
        this.identity = identity;
        this.email = email;
        this.gsm = gsm;
        // this.sayHello = this.sayHello.bind(this);
    }
    sayHello = () => {
        console.log(`Hello, ${this.fullname}!`);
    }
};
let sun = new Customer("sun kwon", "123456789131", "sun@example.com");
sun.sayHello();
window.fullname = "binnur kurt";
window.setTimeout(sun.sayHello, 3000);