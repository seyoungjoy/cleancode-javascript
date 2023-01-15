console.log(undefined == null); //true
console.log(undefined === null) //false
console.log(!undefined === !null) //true

console.log(!null); //true
console.log(!!null); //false

console.log(null+123); //123

// 변수 선언 후 할당하지 않았을 때 undefined가 나옴.
let varb;

console.log(typeof varb); //undefined

console.log(!undefined); //true
console.log(!!undefined); //false
