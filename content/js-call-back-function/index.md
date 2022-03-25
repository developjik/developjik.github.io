---
emoji: ⌨
title: 콜백 함수
date: '2022-03-05 00:00:00'
author: developjik
tags: javascript callback 콜백 콜백함수
categories: javascript
---

## 콜백 함수란?

함수의 매개변수가 함수일 때, 매개변수로 받은 함수를 콜백함수르고 부른다.

### 고차 함수(Higher Order Function)란?

매개변수를 함수로 받은 함수. 즉, 외부에서 콜백함수를 전달받은 함수

### 고차 컴포넌트 (Higher Order Component(HOC))란?

컴포넌트를 매개변수로받아서, 컴포넌트를 반환하는 컴포넌트

## 일급함수란?

> 함수를 다른 변수와 동일하게 다루는 언어는 **일급 함수**를 가졌다고 표현합니다. 예를 들어, 일급 함수를 가진 언어에서는 함수를 다른 함수에 인수로 제공하거나, 함수가 함수를 반환할 수 있으며, 변수에도 할당할 수 있습니다.

### 일급함수의 특징

- 함수를 변수에 할당 가능
- 함수를 또 다른 함수 인자로 전달 가능
- 함수의 반환값으로 함수 전달 가능
- 함수형 프로그래밍 특징 중의 하나가 바로 **일급함수** 입니다.

## 콜백함수 사용하기

```jsx
function showMessage(msg, closeFn) {
  // closeFn가 비동기로 쓰인건 아닙니다. (sync callback - 동기 콜백)

  closeFn(true);
}
```

```jsx
// setTimeout 함수에 넘긴 익명함수가 콜백함수!
// Hello 또한 3초뒤에 나오죠. 비동기 동작! (async callback)
setTimeout(function () {
  alert('Hello');
}, 3000);
```

> 콜백함수라고 해서 꼭 비동기 동작에 쓰이는 것이 아닙니다.

```toc

```
