---
emoji: ⌨
title: Context API
date: '2022-04-06 00:00:00'
author: developjik
tags: react 리액트 context-api
categories: react
---

## Context API 란?

React에서는 공식적으로 Context API를 활용하여 전역상태를 관리할 수 있다.

Redux, react-router, Styled-components 오픈소스를 보시면 Context API를 사용하고 있는 것을 볼 수 있다.

이 전역 상태 값은 함수일수도 있고, 어떤 외부 라이브러리 인스턴스일수도 있고 DOM 일 수도 있다.

### Context / Provider / Conumer

![context-api](https://user-images.githubusercontent.com/67889389/161290082-5b5c9e89-22ea-46bd-9f95-24e1290466be.png)

Context는 크게 Provider와 Consumer로 나뉩니다.

Provider는 전역 상태를 정의하고, 전역 상태를 update하는 로직이 있습니다.

즉, Provider는 context를 구독(Consumer)하는 컴포넌트들에게 context의 변화를 알린다.
Provider 하위에 있으면 value가 업데이트 될 때마다 오로지 context.Consumer 부분만 rerender 된다.

Consumer로 전역 상태를 사용할 수 있습니다.

<br/>

## Context API 생성 및 설정

### Context API 생성

```jsx
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextContext = createContext();
```

`createContext` 의 파라미터에는 Context 의 기본값을 설정할 수 있지만 필수는 아닙니다.<br/>
여러개의 Context를 생성하여 사용이 가능하다.

### Context API 설정

```jsx
<TodoStateContext.Provider value={state}>
  <TodoDispatchContext.Provider value={dispatch}>
    <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
  </TodoDispatchContext.Provider>
</TodoStateContext.Provider>
// <contextapistore.Provider value={state, setstate}> 이러한 형태로도 자주 사용한다
```

Context 를 생성하고 난후, Context 안에 Provider 라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context 의 값을 정할 수 있습니다. 이 컴포넌트를 사용할 때, `value` 라는 값을 설정해주면 됩니다.
이렇게 설정해주고 나면 Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 우리가 Context 의 값을 다른 곳에서 바로 조회해서 사용 할 수 있습니다.

### Context API 생성 및 설정 Sample Code

```jsx
import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
```

<br/>

## Context API 사용 및 조회하기

1. `useContext` 라는 Hook 을 사용해서 조회하기

```jsx
import React, { useContext } from 'react';
import { TodoStateContext, TodoDispatchContext } from '../TodoContext';

function Sample() {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);
  return <div>Sample</div>;
}
```

2. 커스텀 Hook을 사용해서 조회하기;

```jsx
import React from 'react';
import { useTodoState, useTodoDispatch } from '../TodoContext';

function Sample() {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  return <div>Sample</div>;
}
```

```toc

```
