### 변수란?

 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙혀진 이름을 말한다. 즉, 변수란 값의 위치를 가리키는 상징적인 이름을 말한다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c33833ee-823d-42ae-a681-16f4c070accd/Untitled.png)

```jsx
var foo = 135; 
console.log(foo) // 135
```

 변수명(식별자)인 testNumber는 변수의 값이 아닌 메모리 주소를 기억하고 있고, 변수명을 사용하게 되면 자바스크립트 엔진이 변수명과 맵핑된 메모리 주소를 통해 value 값을 반환한다.

 아래의 예제를 살펴보자.

```jsx
console.log(foo); // ① undefined
var foo = 135;
console.log(foo); // ② 135
{
  var foo = 246;
}
console.log(foo); // ③ 246
```

 var 키워드를 사용하여 선언한 변수는 중복 선언이 가능하기 때문에 위의 코드는 문법적으로 문제가 없다.  

 ①에서 변수 `foo`는 아직 선언되지 않았으므로 `ReferenceError: foo is not defined`가 발생할 것을 기대했겠지만 콘솔에는 `undefined`가 출력된다. 이것은 자바스크립트의 특징으로 모든 선언문은 호이스팅되기 때문이다.

### 호이스팅(Variable Hoisting) 이란?

  var 선언문이나 function 선언문 등 모든 선언문이 해당 `scope` 의 상단으로 옮겨지는 것처럼 동작하는 특성을 말한다. 즉, 자바스크립트는 모든 선언문(var, let, const, function, class)이 선언되기 이전에 참조 가능하다.

 변수가 어떻게 생성되는지 호이스팅은 어떻게 이루어지는 자세히 알아보도록 하겠다.

### 변수는 어떻게 생성될까?

 자바스크립트에서 변수는 선언 단계→ 초기화 단계 → 할당 단계를 거치면서 생성된다.

- 선언 단계(Declaration Phase) :  변수를 실행 컨텍스트의 변수 객체에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
- 초기화 단계(Initialization Phase) :  변수 객체에 등록된 변수를 위한 메모리 공간을 확보한다. 이 단계에서 변수는 undefined로 초기화 된다.
- 할당 단계(Assignment Phase) :  undefined로 초기화된 변수에 실제 값을 할당한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/14a0b5a6-9746-4c36-936b-4d1b803414f8/Untitled.png)

 var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 즉, 스코프에 변수가 등록되고 변수는 메모리에 공간을 확보한 후 undefined로 초기화 된다.  

```jsx
console.log(foo); // ① undefined
var foo = 135;
console.log(foo); // ② 135
{
  var foo = 246;
}
console.log(foo); // ③ 246
```

 따라서 변수 선언문 이전에 변수에 접근하여도 변수 객체에 변수가 등록되있기 때문에 에러가 발생하지 않게 되는데, 이러한 현상을 변수 호이스팅(Variable Hoisting)이라 한다. 호이스팅은  초기화 단계까지만 이루어지기 때문에 반환 값은 `undefined`가 된다. 이후 변수 할당문에 도달하면 값의 할당이 이루어진다. 

 그래서 ①에서는 `var foo;` 가 호이스팅 되어 `undefined`를 반환하고, ②는 할당 단계까지 끝났기 때문에 `135`를 반환하게 된다.

 자바스크립트의 변수는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 가지게 된다. 따라서 코드 블록 내의 `foo`는 전역 변수이므로 전역에 선언된 변수 foo에 할당된 값을  재할당하기 때문에 ③의 결과는 `246`이 된다.

- 블록 레벨 스코프(Block-level scope) :  코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
- 함수 레벨 스코프(Function-level scope) : 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.