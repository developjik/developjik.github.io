---
emoji: ⌨
title: Scope
date: '2022-03-19 00:00:00'
author: developjik
tags: javascript scope 스포크
categories: javascript
---

## Scope란?

- Scope : 변수가 유효한범위

  ```jsx
  var x = 'global';

  function foo() {
    var x = 'function scope';
    console.log(x); // function scope
  }

  foo();
  console.log(x); // global
  ```

<br/>

## Scope 종류

### Global Scope

- var로 선언한 변수는 전역 객체에 속하게 된다.(프로퍼티가 된다)
- client(브라우저)의 전역 객체는 **`window`**, Node.js에서는 **`global`**

  ```jsx
  var a = '안녕';

  console.log(a); // 안녕
  console.log(window.a); // 안녕
  ```

### Local Scope

- JavaScipt는 다른 언어와 달리 scope의 범위가 **함수** 블록 내이다.<br/>
  즉, ( ), { } 블록과 상관이 없고, 함수에 의해서만 scope가 생성된다.

  ```jsx
  if (true) {
    var x = 5;
  }

  console.log(x); // 5
  ```

  ```jsx
  (function () {
    var x = 5;
  })();

  console.log(x); // Uncaught ReferenceError: x is not defined
  ```

- ⚠️ JavaScipt에서 let, const로 변수를 선언할 때의 scope은 **블록({}) 단위**이다.

  ```jsx
  {
    let x = 1;
  }

  console.log(x); //Uncaught ReferenceError: x is not defined
  ```

<br/>

## Scope Chain

- 변수가 해당 scope에서 유효하지 않을 때, 안에서부터 바깥으로 차례로 검색해 나가는 것

  ```jsx
  function sum() {
    var a = 3;
    var b = 5;

    function inner() {
      var b = 7;
      var c = 11;

      a = a + b + c; // a = 3, b = 7, c = 11
      console.log(a); // 21
    }

    console.log(a); // 3
    inner();
    console.log(a); // 21
  }

  sum();
  console.log(a); // Uncaught ReferenceError: a is not defined
  ```

## Scope 예제

```jsx
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a); // 1
};
outer();
console.log(a); // 1

//  출력 결과
// undefined ⇒ inner 안에 var a가 있어서 hoisting 되므로 전역 a 말고 내부 a
// 1
// 1
```

```toc

```
