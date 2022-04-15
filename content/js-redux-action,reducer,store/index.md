---
emoji: ⌨
title: Redux action,reducer,store
date: '2022-04-20 00:00:00'
author: developjik
tags: javascript redux action reducer store
categories: javascript
---

![redux](https://user-images.githubusercontent.com/67889389/163439516-356c64e9-9f68-439e-adb5-9dc900241fe7.png)

<br/>

우리가 관리하고 싶은 전역 state는 modal을 켰다 끌 수 있는 상태라고 하자.

    ```jsx
    {
      showModal: true,
      title: '로그인'
    }
    ```

<br/>

## Redux 구성 요소 - Action

사용자의 입력이나 UI 조작, 웹 요청 완료같이 어떠한 상태 변화를 일으킬 수 있는 현상.
즉, 어떤 조작인지 정보를 갖고 있는 **자바스크립트 객체**이다.

<br/>

### Action의 생김새

action 객체는 아래와 같이 생겼다. 조작하고 싶은 정보는 type 프로퍼티에 지정한다.

```jsx
{
  type: 'SHOW_MODAL';
}
```

<br/>

### Action 특징

1. action은 객체이다.
2. action은 반드시 type 프로퍼티가 있어야 하고,
   일반적으로 type은 어떤 행동을 설명하는(조작하고 싶은 내용) 문자열이다.
3. type 이외에 다른 프로퍼티를 가져도 되고,
   주로 해당 action에 필요한 부가적인 데이터를 전달하고 싶을 때 사용한다.

<br/>

### Action 정의

react 프로젝트에서 사용할 action은 객체 리터럴로 바로 정의하는 것이 아니라, action을 만들어주는 함수를 통해 만든다. 이러한 함수를 Action Creator(액션 생성자)라고 한다.

```jsx
// showModal이 Action 생성자
function showModal() {
  return { type: 'SHOW_MODAL' }; // <- Action!
}
```

Action은 일반적으로 '행동 정보'인 type만 갖고 있지는 않고, 부가적인 정보를 포함하고 있다.

```jsx
function showModal({ title }) {
  return { type: 'SHOW_MODAL', title };
}
```

view에서 액션이 발생되므로, 이때 view에 따라 다양한 추가적인 정보를 넘기게 됩니다.

<br/>

action 생성은 이렇게 showModal 함수를 호출하면 된다!

```jsx
showModal({ title: '로그인' });
```

<br/>

## Redux 구성 요소 - Reducer

reducer는 action이 발생했을 때 **state를 변화시키기 위한 함수**이다.
즉, reducer는 새로운 state를 반환하는 함수!

<br/>

### Reducer의 생김새

reducer는 현재의 state와 action을 인자로 받고, 이 action의 내용(type)에 따라 state를 변화시킨다.

```jsx
(state, action) => nextState;
```

<br/>

### Reducer 정의

```jsx
function modal(state, action) {
  switch (action.type) {
    case 'SHOW_MODAL': // SHOW_MODAL 이라는 action이 발행되면
      return {
        ...state,
        showModal: true, // 전역 state 중에서 showModal의 값을 true로 바꾼다.
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
```

<br/>

## Redux 구성 요소 - Store

store는 앱에 오직 하나만 있고, 이 유일한 store를 사용하여 app의 전체 상태를 관리 한다.

```jsx
//index.js
import { createStore } from 'redux';
import modalReducer from './ModalReducer';

const store = createStore(modalReducer);
```

- redux에서 제공하는 createStore 함수 생성
- store를 생성할 때 reducer를 인자로 전달하면 된다.

```toc

```
