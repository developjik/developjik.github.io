---
emoji: ⌨
title: 동기와 비동기
date: '2022-03-05 00:00:00'
author: developjik
tags: javascript
categories: javascript
---

## 동기(Synchronouse)

### 동기란?

현재 실행 중인 코드가 끝나야 다음 코드를 실행하는 방식

```jsx
const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(i);
}

console.log(arr);

for (let i = 1000; i < 2000; i++) {
  arr.push(i);
}

console.log(arr);
```

### 동기의 장/단점

- 장점: 코드를 순서대로 하나씩 실행하기 때문에, 실행 순서가 보장된다.
- 단점: 현재 실행중인 task가 종료될 때까지 다음 task가 실행이 안 된다는 문제 (task blocking)

### 전형적인 동기 task blocking 예제

```jsx
const arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(i);
	// 1000번 반복하면서 실행할 더더더더더 복잡한 코드
}

**alert("안녕하세요");**  // 확인 누를 때까지 console 코드로 넘어가지 않음
****console.log(arr);
```

<br/>

## 비동기(Asynchronouse)

### 비동기란?

현재 실행 중인 코드가 완료되지 않아도, 다음 코드로 넘어감.

즉, 비동기 task(코드)는 실행하라고 브라우저에 맡겨놓고, 다음 task(코드)로 넘어감

```jsx
axios.get(url).then((response) => {
  // api 호출하고 응답받으면 실행
});
```

### 비동기의 장/단점

- 장점: 현재 실행중인 task가 완료되지 않아도, 다음 task를 실행하기 때문에 블로킹이 발생 X
- 단점: task의 실행 순서가 보장되지 않는다.

### 비동기 처리가 필요한 이유

자바스크립트 엔진은 한 번에 하나의 task만 실행할 수 있는 Single Thread.

Single Thread는처리에 시간이 걸리는 task를 실행하는 경우 Blocking(작업 중단)이 발생.

띠리사, 비동기를 처리하기 위해 전통적으로 콜백패턴을 사용.

### Quiz

```jsx
setTimeout(function () {
  console.log('1');
}, 0);

console.log('2');

for (let i = 0; i < 3; ++i) {
  loop();
}

setTimeout(function () {
  console.log('3');
}, 0);

console.log('4');

function loop() {
  console.log('5');
}
```

- 정답

```plainText
2
5
5
5
4
1
3
```

## AJAX(Asynchronous JavaScript and XML)

AJAX는 js를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고,
응답한 데이터를 수신하여 웹페이지를 일부 동적으로 갱신.

```toc

```
