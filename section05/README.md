# 분기 다루기

## 값식문
- 단순히 언어를 어떻게 쓰는지에만 집중하지말고 그 문법 또한 중요하다. 
- 값 : 식이 평가되어 생성된 결과
- 식 : 값으로 평가될 수 있는 문
- 문 : 프로그램을 구성하는 기본 단위이자 최소 실행 단위
```jsx
// 변수 선언문
var x;
// 할당문
x=5;
// 함수 선언문
function foo(){}
//조건문
if(x>1){console.log(x)}
//반복문
for(var i=0; i<2; i++){console.log(i)}
```

## 삼항 연산자 다루기
- 삼항 연산자를 쓸 때는 일관성이 필요하다.
- 조건문 ? 참일때의 '식' : 거짓일때의 '식'

### case 1
- 조건이 다양할 때는 스위치문이 더 가독성 좋다.
```jsx
// 삼항
function example(){
    return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
// if문
function example(){
    if(condition1){ return value1; }
    else if(condition2) { return value2;}
    else if(condition3) { return value3;}
    else { return value4;}
}
//switch
switch (condition){
    case condition1:
        value1;
        break;
    case condition2:
        value2;
        break;
    case condition3:
        value3;
        break;
    default:
        value4;
}
```

### case 2
- 사람을 위한 코드 작성을 해라.
- 중첩삼항연산자로 헷갈릴수도 있기 때문에 괄호를 통해 식인것을 강조해주면 가독성을 높일 수 있다.
```jsx
const example = condition1
    ? a===0 ? "zero" : "positive"
    : "negative"

const example = condition1
    ? ((a===0) ? "zero" : "positive")
    : "negative"
```

### case 3
- nullable한 상태값을 표현할때 유용
```jsx
const welcomeMessage = (isLogin) => {
    const name = isLogin ? getName() : "이름없음";
    
    return `안녕하세요 ${name}`;
}
```
### case 4
- 의미없는 숏코딩보다는 값을 반환할 수 있는 코드에 활용하는게 적절해보인다.(변수 또는 return 값으로)
```jsx
// undefined 반환중.
function alertMessage(isAdult){
    isAdult
    ? alert("입장이 가능합니다")
    : alert("입장이 불가능합니다")
}
```


## Truthy & Falsy
- 조건문을 truthy, falsy값으로 간결하게 코드를 짤 수 있음.
### Truthy : 참으로 평가되는 값
```jsx
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```
### falsy : 거짓으로 평가되는 값
```jsx
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

## 단축평가
- 단축평가를 활용해서 불필요한 비교를 줄일 수 있다.
### or 연산자
- 디폴트 값이 있을 때 유용
```jsx
function fetchData(){
    return state.data ? state.data : "Fetching..."

    return state.data || "Fetching..."
}
```

```jsx
function favoriteDog(someDog){
    let favoriteDog;
    if(someDog){
        favoriteDog = dog;
    } else {
        favoriteDog = "냐옹";
    }
    
    return favoriteDog + "입니다" 
    
    // 단축평가로 간단하게 작성 가능
    return (someDog || "냐옹") + "입니다."
}
```

```jsx
function getActiveUserName(user, isLogin){
    if(isLogin && user){
        if(user.name){
            return user.name
        } else {
            return "이름없음"
        }
    }
    
    if(isLogin && user){
        return user.name || "이름없음"
    }
    
}
```

## else if 피하기
- else if로 조건이 많아다진다면 switch로 코드를 짜는 것을 추천.
- 맹목적으로 사용할 필요가 없다.

## else 피하기
