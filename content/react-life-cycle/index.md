---
emoji: ⌨
title: Life Cycle
date: '2022-04-16 00:00:00'
author: developjik
tags: react 리액트 life cycle life-cycle
categories: react
---

## React Life Cycle

![lifecycle1](https://user-images.githubusercontent.com/67889389/162923937-42db8b44-4c6f-453d-917a-f59647c0f6ad.jpg)

<br/>

![lifecycle2](https://user-images.githubusercontent.com/67889389/162923943-e4e4757a-b7d1-4660-a189-b85ff9815649.jpg)

## Mount

1. `constructor` : 컴포넌트의 생성자 메서드, 컴포넌트가 만들어지면 가장 먼저 실행되는 메서드

   ```jsx
     constructor(props) {
       super(props);
       console.log("constructor");
     }
   ```

2. `getDerivedStateFromProps`: props를 state에 넣고 싶을때 사용

   ```jsx
     static getDerivedStateFromProps(nextProps, prevState) {
       console.log("getDerivedStateFromProps");
       if (nextProps.color !== prevState.color) {
         return { color: nextProps.color };
       }
       return null;
     }
   ```

   - 앞에 `static` 필요
   - 안에서 `this` 조회 할 수 X
   - 특정 객체를 반환 ⇒ `state` 설정 O, `null` 반환 ⇒ `state` 설정 X

3. render : 컴포넌트 렌더링

4. `componentDidMount` : 컴포넌트 첫번째 렌더링 후 호출 메서드

- 컴포넌트 화면에 나타난 상태
- DOM 속성 읽거나 변경하는 작업, DOM 사용 외부 라이브러리 연동, `axios`, `fetch` 등 `ajax` 요청 등

<br/>

## Update

1. `getDerivedStateFromProps`

2. `shouldComponentUpdate` : 컴포넌트 `리렌더링` 결정 메서드, `최적화` 할 때 사용 메서드

   ```jsx
     shouldComponentUpdate(nextProps, nextState) {
       console.log("shouldComponentUpdate", nextProps, nextState);
       // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
       return nextState.number % 10 !== 4;
     }

   ```

3. `render`

4. `getSnapshotBeforeUpdate` : 컴포넌트 변화 일어나기 전의 DOM 상태 가져와 특정 값 반환

   ```jsx
     getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log("getSnapshotBeforeUpdate");
       if (prevProps.color !== this.props.color) {
         return this.myRef.style.color;
       }
       return null;
     }
   ```

5. `componentDidUpdate` : 리렌더링 후 호출 메서드

   ```jsx
     componentDidUpdate(prevProps, prevState, snapshot) {
       console.log("componentDidUpdate", prevProps, prevState);
       if (snapshot) {
         console.log("업데이트 되기 직전 색상: ", snapshot);
       }
     }
   ```

   - 3번째 파라미터로 `getSnapshotBeforeUpdate`에서 반환한 값 조회 할 수 있다

<br/>

## Unmount

1. componentWillUnmount : 컴포넌트가 화면에 사라지기 직전 호출

   ```jsx
     componentWillUnmount() {
       console.log("componentWillUnmount");
     }
   ```

```toc

```
