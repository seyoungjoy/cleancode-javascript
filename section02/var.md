# 2. 변수다루기
## 5. var를 지양하자 
- var를 사용하면 재선언, 선언하기 전에 해당 함수를 호출해도 undefined가 출력되면서 에러가 나지 않는다.
- let, const를 사용하면 재선언, 선언전에 호출시 에러가 나기때문에 안전하게 변수선언이 가능해진다.
- var는 전역변수로 
## 6. function scope & block scope
- var는 함수스코프를 가지기 때문에 
- let, const 는 블록 스코프를 가진다.


### 깊은 복사, 얕은 복사
- 얕은 복사는 객체의 참조값을 복사하고
- 깊은 복사는 객체의 실제 데이터를 복사

## 7. 전역 공간 사용 최소화
- 전역으로 변수를 선언해두었을때 다른 함수로 인해 해당 값이 바뀌거나 영향을 끼칠수 있기 때문에 의도치않은 에러를 발생시킬 수 있다.

- 전연 공간이란 무엇인가?
모든 스코프에서 다 접근이 가능한 공간 ,최상위 스코프

- 전역공간 사용을 하지 않기 위한 방법
  - IIFE(즉시실행함수)
  - module
  - closure
  - const, let

## 8. 임시변수 제거하기
- 함수 안에 임시변수가 있으면 해당 스코프 안에서 전역변수처럼 활용되어버린다.
- 그래서 임시변수없이 딱 하나의 역할만 하도록 함수를 만들어야한다.
- 임시변수가 있으면 명령형으로 가득한 로직이 나온다.
- 어디서 어떻게 디버깅이 힘들어진다.
- 추가적으로 코드를 작성할 수 있는 유혹에 빠지게된다.
- 그러면 점점 코드의 유지보수가 어렵게 된다.
- 이 해결책은 함수를 나누거나 바로 반환 또는 고차함수를 활용할 수 있다.
- 선언형 프로그래밍으로하는 연습을 해야한다.
```jsx
// 임시변수인 result에 대한 CRUD 기회가 많아진다.
function getObject(){
    const result = {}; // 임시 객체
    result.title = document.querySelector(".title");
    result.text = document.querySelector(".text");
    result.value = document.querySelector(".value");
    
    return result;
}

// 객체 자체를 바로 리턴해버리면 역할이 더 명확하고 사이드이펙트를 줄일 수 있다.
function getElements(){
    return {
        title : document.querySelector(".title"),
        text : document.querySelector(".text"),
        value : document.querySelector(".value")
    };
}
```

## 9. 호이스팅 주의하기
- 호이스팅이란? 변수 선언이 최상단으로 끌어올려진것처럼 동작하는 것.
- 그래서 var로 변수를 선언하면 선언하기 전에 호출하면 런타임 이전에 변수 선언이 일어나기 때문에 undefiend를 반환하게 된다.
- 함수도 호이스팅된다.(function)
- 그래서 const를 통해 함수를 만들면 호이스팅도 안일어나고 중복 선언을 예방할 수 있다.(함수 표현식)


### reference
- 이 함수의 결과값을 예측하기 어렵다
- 사람이 실수할 수 있는 여지를 줄인다.
- 코드작성시 예측하지 못한 실행결과가 나올 수 있다.