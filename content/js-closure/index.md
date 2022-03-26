---
emoji: ⌨
title: Closure
date: '2022-03-23 00:00:00'
author: developjik
tags: javascript closure 클로져
categories: javascript
---

## Closure

- **함수를 선언할 때 만들어진 scope가 사라진 후에도 호출할 수 있는 함수**
  - **함수가 선언됐을 때**가 중요.
  - scope가 끝난 외부 함수의 변수를 참조할 수 있다.
- **일급 객체 함수**의 개념을 이용하여 스코프에 묶인 변수를 바인딩 하기 위한 일종의 기술
  함수를 일급 객체로 취급하는 여러 함수형 프로그래밍 언어에서 사용되는 보편적인 특성

  > 일급 객체 함수 란?<br/>
  > 다른 객체 및 함수 들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체 및 함수를 가리킨다.

  > 일극 객체 함수의 조건
  >
  > - 변수에 할당 할 수 있다
  > - 다른 함수를 인자로 전달 받을 수 있다
  > - 다른 함수의 결과로서 return 될 수 있다.

<br/>

## Closure 예제

- 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우,
  A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상

  ```jsx
  var A = function() {
  	var a = 1;

  	var B = function() {
  		return ++a;
  	};

  	**return B;**
  };

  var outer = A();
  console.log(outer());  // 2
  console.log(outer());  // 3
  ```

  1. `var outer = A()` 에서 함수 B자체를 반환
     1. `A()` 실행했으므로 A의 실행컨텍스트는 종료됨
     2. `outer` 변수는 이제 `B함수`를 바라보고 있음
  2. `outer()` outer를 호출하면, 즉! B를 호출. a값은 계속 증가함
     1. B함수에는 a의 유효범위가 아니므로, 한 번 더 바깥(A)의 scope를 참조하고 계속 값이 증가함

<br/>

## 메모리 관리

- JavaScript는 원래 메모리 관리에 신경쓰지 않아도 된다.
  사용하지 않는 변수는 알아서 Garbage Collector에 수집 (실행컨텍스트를 참고)
- But closure에서는 의도적으로 변수를 사용하므로 메모리가 계속 소모됨
  - 만약 Garbage Collector에 수집되게 하려면 null이나 undefined를 할당하면 됨

<br/>

## Closure의 활용

1. 상태 유지
2. 전역변수의 사용 억제
3. 정보의 은닉

<br/>

## Closuer의 활용 더 자세히 알아보기

[Closure | PoiemaWeb](https://poiemaweb.com/js-closure#2-%ED%81%B4%EB%A1%9C%EC%A0%80%EC%9D%98-%ED%99%9C%EC%9A%A9)

```toc

```
