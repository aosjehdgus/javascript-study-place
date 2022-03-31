var, const, let의 차이점을 비교하려면 var의 문제점을 알아야 한다.

그렇다면 var를 사용함으로써 어떤 문제가 발생하게 될까?

---

### **var를 사용하면서 발생하는 문제점**

⓵ 변수 중복 선언 가능하여, 예기치 못한 값을 반환할 수 있다.

⓶ 함수 레벨 스코프로 인해 함수 외부에서 선언한 변수는 모두 전역 변수로 된다.

⓷ 변수 선언문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

⓸ 어떤 의도로 선언되었는지 알 수 없다.

 위와 같은 문제들이 발생할 수 있는데, 이를 개선하기 위해 ES6에서 나온 새로운 키워드가 const와 let이다. 이제 var, const, let의 차이에 대해서 알아보겠다.

---

### **var, const, let의 차이**

#### **const와 let은 중복 선언이 불가능하다**

**→** 어떤 값을 반환할지를 좀 더 명확하게 제어할 수 있다.

**(1) let**

**중복 선언은 불가능** 하지만, **재할당은 가능**하다.

```
/* ⓵ 중복 선언 불가 */

let name = 'dongle';
let name = 'lonnie';
console.log(name)   
// Uncaught SyntaxError: Identifier 'name' has already been declared

/* ⓶ 재할당 가능 */

let name = 'dongle';
name = 'lonnie';
console.log(name);
// lonnie

/* ⓷ 선언 후 할당 가능 */

let name;
name = 'lonnie';
console.log(name);
// lonnie
```

**(2) const**

**선언, 초기화를 동시에 진행**해야 하고, **재할당이 불가능**하다.

```
/* ⓵ 중복 선언 불가 */

const name = 'dongle';
const name = 'lonnie';
console.log(name);
// Uncaught SyntaxError: Identifier 'name' has already been declared

/* ⓶ 재할당 불가능 */

const name = 'dongle';
name = 'lonnie';
console.log(name);
// Uncaught TypeError: Assignment to constant variable.

/* ⓷ 선언 후 할당 불가능 -> 동시 진행 필요 */

const name;
console.log(name);
//Uncaught SyntaxError: Missing initializer in const declaration
```

#### **const와 let은 블록 레벨 스코프를 따른다**

**→** 스코프 내에서 변수를 제어할 수 있다. 

-    let, const 키워드로 선언한 변수는 모두 코드 블록(ex. 함수, if, for, while, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

```
let name = 'lonnie';

if(true){
	let name = 'dongle';
}

console.log(name); // lonnie;
```

 만약 var 키워드로 선언했을 경우에는 dongle이 나오겠지만, let 또는 const의 경우 if 문 안에 있는 것은 지역 스코프로 인정하기 때문에 전역에서 console을 찍었을 경우 lonnie가 출력된다.

#### **변수 호이스팅(Variable Hoisting)**

**→ let, const 키워드는 모두 Hoisting이 이루어진다. 그러나 초기화가 이루어지지 않는다.** let과 const가 Hoisting 되어 선언된 다음, TDZ 때문에 Hoisting 되지 않은 것처럼 동작하게 된다.

-   **TDZ(Temporal Dead Zone)** : 스코프의 시작 지점부터 초기회 시작 지점까지의 구간을 ‘일시적 사각지대' 라고 부른다. 쉽게 말해, **let과 const가 선언된 다음 초기화 되기까지의 구간을 TDZ**라고 보면 되는데, 이 구간에서 변수를 참조하려고 하면, 변수가 초기화되지 않은 상태라고 에러가 발생한다.

```
console.log(name);
let name = 'lonnie';
// Uncaught ReferenceError: Cannot access 'name' before initialization

console.log(name);
// Uncaught ReferenceError: Cannot access 'name' before initialization
const name = 'lonnie';
```

#### **개발자의 의도**

**→ 개발자의 의도를 파악할 수 있다. 개발자는 const와 let을 구분 지어 사용함으로써, 선언한 값을 고유의 값으로 할당할 것인지 재할당할 것인지에 대한 의도를 전할 수 있다.**

 이를 통해서, 코드를 이해할 때 const로 선언된 변수를 보면 변하지 않겠구나를 알 수 있고 let을 보면 어딘가에서 업데이트를 하고자 하는구나를 알 수 있는 것이다.