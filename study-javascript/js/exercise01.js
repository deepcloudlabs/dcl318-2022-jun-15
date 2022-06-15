let numbers = [42, 23, 15, 4, 16, 8];

console.log(numbers.length)
console.log(numbers[0]);
console.log(numbers[5]);

// loop #1
for (let i=0;i<numbers.length;i++){
    let number = numbers[i];
    console.log(`${i}: ${number}`);
}

// loop #2
for (let i in numbers){
    let number = numbers[i];
    console.log(`${i}: ${number}`);
}

// loop #3
for (let number of numbers){
    console.log(`${number}`);
}
// loop #4
numbers.forEach(function(number,index){
    console.log(`${index}: ${number}`);
});
numbers.forEach(console.log);

// functional programming
// higher-order function: forEach
// pure function: function(){}, lambda expression: () => {}
let total =
numbers.reduce((sum,number) => sum + number, 0);
console.log(total);

console.log(numbers.indexOf(15))
console.log(numbers.indexOf(47))
console.log(numbers.includes(15))
console.log(numbers.includes(47))
// [42, 23, 15, 4, 16, 8]
numbers.splice(2,2);
console.log(numbers)
numbers.sort() // dictionary order
console.log(numbers)
numbers.sort((x,y) => x-y) // numeric order
console.log(numbers)
numbers.sort((x,y) => y-x) // numeric order
console.log(numbers)
