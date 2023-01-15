function genRandomNumber(min, max){
    console.log(Math.random());
    console.log(max-min+1)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(genRandomNumber(10,20));