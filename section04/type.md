# 경계 다루기
## min-max
- 최소값과 최대값을 다룰 때 상수인 값을 변수로 선언하여 명시적인 코드로 만들 수 있다.
- 해당 값의 포함 여부(이상-초과/이하-미만)를 결정하거나 네이밍을 통해 표현한다.
- 의식적으로 파악하기 쉬운 코드를 짜기 위해 노력해야한다.
```jsx

function genRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);

const MAX_AGE = 20;
function isAdult(Age){
    if(age>MAX_AGE){
        return true;
    } else {
        return false;
    }
}
```

## begin-end
- 예약 날짜를 지정하는 함수와 같이 begin, end를 통해 표현하면 흐름을 파악하기 쉬운 함수가 된다.
```jsx
function reservationDate(beginDate, endData){
    //...
}
reservationDate("YYYY-MM-DD","YYYY-MM-DD");
```

## first-last
- 시작과 끝이 있다는 경계를 명시적으로 알려줄 수 있는 네이밍

```jsx
const students = ["young", "joy", "june"];
function getStudents(first, last){
    //...
}
getStudents(students[0],students[students.length-1])
```

## prefix-suffix(접두사, 접미사)
- prefix, suffix에 대해 팀 또는 본인만의 규칙을 가지고 네이밍해라.
- 일관성을 가질수있다.

## 매개변수의 순서가 경계다
- 매개변수의 개수는 2개가 넘지않도록 만든다.
- arguments, rest parameter
- 매개변수를 객체에 담아서 넘긴다.
- 랩핑하는 함수