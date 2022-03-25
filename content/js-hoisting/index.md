---
emoji: ⌨
title: Hoisting
date: '2022-03-16 00:00:00'
author: developjik
tags: javascript hoisting 호이스팅
categories: javascript
---

## 함수 선언문과 함수 표현식

### 함수 선언문(function declaration)

- function 정의만 존재하고 별도의 할당 명령이 없다.
  ```jsx
  function a() {
    // 로직
  }
  ```

### 함수 표현식(function expression)

- function 키워드로 정의한 함수를 변수에 할당하는 것을 말한다.

  ```jsx
  var a = function () {
    // 로직
  };

  var b = function success() {
    // 로직
  };

  a();
  b();
  success(); // error
  ```

<br/>

## Hoisting

- 변수의 선언을 끌어올리는 것을 말한다.
- 선언부는 끌어올리고, 할당은 코드가 실행되는 시점에 진행된다.

### 변수의 Hoisting 전

```jsx
var x = 1;
console.log(x + ' ' + y); // '1 undefined'
var y = 2;
```

### 변수 Hoisting 후

```jsx
var x = 1; // Initialize x
var y; // Declare y
console.log(x + ' ' + y); // '1 undefined'
y = 2; // Initialize y
```

### 함수 Hoisting

- 함수 선언식

  ```jsx
  catName('Chloe'); // My cat's name is Chloe

  function catName(name) {
    console.log("My cat's name is " + name);
  }
  ```

- 함수 표현식

  ```jsx
  console.log(notHoisted); // undefined
  notHoisted(); // TypeError: notHoisted is not a function

  var notHoisted = function () {
    console.log('bar');
  };
  ```

### let, const의 Hoisting

- Hoisting이 되지 않는것 처럼 보인다.

  ```jsx
  console.log(x); // Uncaught ReferenceError: x is not defined
  let x = 1;
  ```

- Temporal Dead Zone(TDZ)

  - let, const 역시 마찬가지로 LexicalEnvironment에 변수 정보를 미리 수집한다<br/>
    (hoisting의 개념으로 알고 있는 동작)
  - let, const는 실행되기 전까지 액세스 할 수 없고, 이 단계(공간)를 TDZ라고 함

  ```jsx
  x = 3; // Uncaught ReferenceError: Cannot access 'x' before initialization
  let x = 1;
  ```

<br/>

## Hoisting 예제

```jsx
function a(x) {
  console.log(x);

  var x;
  console.log(x);

  var x = 2;
  console.log(x);
}

a(1);
```

이런 느낌으로 environmentRecord에 기록

```jsx
function a() {
  var x; // → parameter
  var x; // → 함수 바디에서 첫 번째 선언
  var x; // → 마지막 선언하고 2 할당한 line

  x = 1;

  console.log(x); // 1
  console.log(x); // 1

  x = 2;
  console.log(x); // 2
}

a(1);
```

```toc

```
