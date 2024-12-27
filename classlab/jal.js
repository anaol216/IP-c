let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.indexOf(4);
console.log(arr.length);

let trarr = ["apple", "banana", "cherry"];
let upperCaseArr = trarr.map(function (item) {
    return item.toUpperCase();
});
console.log(upperCaseArr);

let filteredArr = trarr.filter(function (item) {
    return item.trim().charAt(0).toUpperCase() === 'A';
});
console.log(filteredArr);

const person = [
    {
        name: "John",
        age: 30,
        job: "teacher"
    },
    {
        name: "Alice",
        age: 25,
        job: "engineer"
    },
    {
        name: "Bob",
        job: "unemployed"
    }
];

console.log(person[0].name);
console.log(person[1].age);
console.log(person[2].job);

let displayValues = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

displayValues(person);

let ob1 = {
    name: "John",
    age: 30,
    job: "teacher"
}

let ob2 = {
    name: "John",
    age: 30,
    job: "teacher"
}

console.log(ob1 === ob2);
function jal () {
    let lbl1 = document.getElementById("lbl1");
    do {
        
     return   lbl1.innerHTML = "Please enter a number greater than ten";

    } while (document.getElementById("un").value <= 10);
      
    return   lbl1.innerHTML = "YO u entered "+document.getElementById("un").value;  
};
let count = 0;

dec = () => {
    document.getElementById("count").innerHTML = --count; // Decrement first
};

inc = () => {
    document.getElementById("count").innerHTML = ++count; // Increment first
};
function changeColor() {
    document.getElementById("color").style.color = "red";
}