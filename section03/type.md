 # 타입 다루기

 ## 타입검사
- 자바스크립트는 동적인 타입을 갖기 떄문에 정확한 타입검사를 위해서는 주의할 부분들이 있다.
```jsx
typeof null; //object

const arr = [];
arr instanceof Object //true

Object.prototype.toString.call("hi") //[object String]
```

## undefined, null
- 이 둘은 값이 없거나 정의되지 않았다는 의미로 쓰이는데 함께 사용할 시 혼란을 야기할 수 있다. 그렇기 때문에 값이 없다는 것을 표현할 때 어떤 값으로 표현할지 컨벤션을 정해서 사용해야 협업시 혼란을 줄일 수 있다.
```jsx
undefined == null //true
undefined === null //false
!undefined === !null //true

!null; //true
!!null; //false

null+123; //123

// 변수 선언 후 할당하지 않았을 때 undefined가 나옴.
let varb;

typeof varb; //undefined

!undefined; //true
!!undefined; //false
```
- undefined : NaN, type undefined
- null : 0, type object

## eqeq 줄이기(동등 연산자)
- eqeq 사용시 형변환이 일어나면서 두 값을 비교하기 때문에 예상치 못한 상황이 발생할 수도 있다. 협업시 eqeq 사용은 지양해야한다.

### `==`
- 형변환이 일어나면서 비교.
```jsx
1 == "1" // true
1 == true // true
```

### `===`
- 형변환 없이 엄격하게 비교
```jsx
1 === "1" // false
1 === true // false
```

## 형변환 주의하기
- 암묵적인 형변환보다는 예측하기 쉬운 명시적인 형변환 사용을 추천
```jsx
// 암묵적인 변환
!!"hihi"; //true
!!""; //false

// 명시적인 변환
Boolean("hihi");
Boolean("");
Number("11");
```

## isNaN
- NaN인지 판변해주는 함수인데 혼란스러운 케이스가 몇몇 있기 떄문에
- Number.isNaN()로 사용하는걸 추천.
```jsx
isNaN(123 + "테스트") //true
// 기존의 isNaN은 파라미터값을 형변환시켜버려서 해당값을 NaN이라고 판별해버린다.
Number.isNaN(123+"테스트") //false
// Number.isNaN() 을 사용하면 파라미터값을 형변환하지 않기때문에 정확한 NaN 값을 판변할 수 있다.
```