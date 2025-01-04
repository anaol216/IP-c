/* var options="options";

console.log (typeof options);
console.log (Infinity);
console.log (NaN);
let str="hello"
console.log (str.replace("hello","world"));
console.log (str);
console.log (str.length);
console.log (str.toUpperCase());
console.log (str.toLowerCase());
console.log (str.charAt(0));
console.log (str.charAt(1));
console.log (str.charCodeAt(0));
console.log (str.charCodeAt(1));
console.log ("%c"+str.concat("world"),"color:blue; font-size: 20px; font-weight: bold;");
console.log (str.slice(0));
console.log (str.slice(-1));
console.log (str.slice(0,1));
console.log (str.trim().slice(1));//
var str1=" hello world ";
console.log (str1.trim());
console.log (str1.trimStart());
console.log (str1.trimEnd()); 
let symbol=Symbol("hello");
console.log (symbol.description);*/
let obj = new Object();
obj.name = "fuad";
obj.age = 25;
console.log(obj); // Output: { name: 'fuad', age: 25 }
console.log("name" in obj); // Output: true
console.log(Object.entries(obj)); // Output: [ ['name', 'fuad'], ['age', 25] ]
console.log(Object.keys(obj)); // Output: ['name', 'age']
console.log(Object.values(obj)); // Output: ['fuad', 25]
obj.city = "Dhaka";

console.log(obj); // Output: { name: 'fuad', age: 25, city: 'Dhaka' }
/* (if(NaN){
    console.log(true); // Output:
}
else{ // Output
    console.log(false);
}) */
if(Infinity){ // Output:
    console.log(true);
}

outerloop:for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 5; j++) {
        if(i * j >= 3) {
            //console.log('i=' + i + ', j=' + j);
            break outerloop;
        }
        console.log('i=' + i + ', j=' + j);
    }
}