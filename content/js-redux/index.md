---
emoji: ⌨
title: Redux란?
date: '2022-04-13 00:00:00'
author: developjik
tags: javascript redux 리덕스 react-redux
categories: javascript
---

## 왜 Redux를 쓸까?

- 앱에서 전체적으로 사용할 데이터 관리 필요
  - React.js 는 단순 UI 라이브러리이기 때문에 데이터 관리를 고려하고 있지 않음
  - 로컬스토리지에 데이터를 저장하고 불러오는 로직 대신 Redux!
- 하나의 state(데이터)를 여러 컴포넌트에서 필요한 경우가 있다.
- 페이지를 reload 해도 api 호출 없이 유지해야 할 데이터가 있다.
- 페이지의 레이아웃에 영향 받지 않는 modal, toast, alert 같은 전역 UI 컴포넌트의 상태 관리도 필요하다.

![Why_Redux](https://user-images.githubusercontent.com/67889389/162458881-41a2ed5a-80d2-42f0-a184-45efe6d503b1.png)

> 멀리 떨어진 컴포넌트끼리 상태값을 교환할 때 복잡해지는 데이터 흐름이 전역 스토어를 통해 간결해짐

<br/>

## Redux?

- Redux는 Flux 패턴을 근본으로한 데이터 관리 라이브러리이다.
- React 뿐 아니라 다른 UI 라이브러리에서도 사용할 수 있다.

  ![Redux](https://user-images.githubusercontent.com/67889389/162458897-1883eed4-c28f-460f-bf2b-e6830b715feb.png)

- **`Store`**: Application의 전체 state는 store라고 불리는 곳에서 관리된다.
  - store는 redux의 상태값(state)를 갖는 객체이다.
- **`Action`**: action은 state 변화를 일으킬 수 있는 행동정보, 현상등이라고 생각하면 된다.
- **`Dispatcher`**: action이 일어나면 Dispatcher를 통해서 store의 state가 업뎃된다.
- **`View`**: state가 변경되면 view에서 감지하고, 화면에 반영(rerender) 된다.
- 만약, view에서 action 발생 -> dispatcher에 의해 store에 저장 -> state가 변경되면 -> 필요한 view에서 감지후 변경.

<br/>

### Redux의 세 가지 원칙

#### :: 전체 상태값이 하나의 객체로 표현됨

- 간단히 말하면 하나의 React앱에 store가 하나라는 뜻임

#### :: 상태값(state)는 읽기 전용이다.

- 원래 컴포넌트에서의 state 관리 생각하시면 됩니다.
- (state 값 직접 바꾸지 않고, setState 함수 사용해서 변경 했잖아요~)

#### :: 상태값(state)은 순수 함수에 의해서만 변경되어야 한다.

- 상태값(state)을 변경시키려면, 상태값을 변경하는 함수가 필요합니다.
- 이 함수를 reducer라고 하고, 이 함수가 순수함수(pure function) 이어야 한다는 말.

> 순수함수(Pure function)란?<br/> > **항상 같은 input은 항상 같은 output을 반환하는 함수.**

```toc

```
