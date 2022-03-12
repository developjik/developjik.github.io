---
emoji: 🎨
title: Css BEM 방식
date: '2022-01-22 00:00:00'
author: developjik
tags: css
categories: css
---

## BEM의 기본 구조

- **BEM**은 **Block**, **Element**, **Modifier**를 뜻한다.
- **BEM**은 **어떤 목적인가**에 따라 이름을 만든다.
- **Blcok**, **Element**, **Modifier**은  **\_ \_** 와 **\- \-** 로 구분한다.
- 이름을 연결할때에는 -를 사용한다.

  ```css
  .header__navigation--navi-text {
    color: red;
  }
  ```

  > **header**는 **Block**, **naviagtion**은 **Element**, **navi-text**는 **Modifier**가 됩니다.

<br/>

## Block

- **재사용 가능한 기능적으로 독립적인 페이지 컴포넌트**을 **Block**이라고 부른다.

- 또, **Block**은 **Block**으로 감쌀 수 있습니다.

<br/>

## Element

- **Element**는 **Block**을 구성하는 단위이다.

- **Block**은 **독립적인 형태**인 반면, **Element**는 **의존적인 형태**이다.

- **자신이 속한 블럭 내에서만 의미를 가지기 때문에** 블럭 안에서 떼어다 다른 데 쓸 수 없다.

  ```html
  <form class="search-form">
    <input class="search-form__input" />
    <button class="search-form__button">Search</button>
  </form>
  ```

  > **.search-form**은 **Block**이, **.search-form\_\_input**과 **.search-form\_\_button**은 **Element**이다.

<br/>

## Modifier

- **Modifier**는 **Block**이나 **Element**의 속성을 담당한다.

- 생긴 게 조금 다르거나, 다르게 동작하는 **Block**이나 **Element**를 만들 때 사용하면 됩니다.

  ```html
  <ul class="tab">
    <li class="tab__item tab__item--focused">탭 01</li>
    <li class="tab__item">탭 02</li>
    <li class="tab__item">탭 03</li>
  </ul>
  ```

  > **--focused**가 **Modifier**에 해당한다

<br/>

## BEM 장점

1. **클래스네임만**으로 **마크업 구조**를 알 수 있다.
2. **SASS**의 부모참조자(`&`)를 사용하기 쉬워진다.
3. 작성된 **SASS** 에서 요소를 쉽게 찾을 수 있다.
4. **SASS** 작성 시, 늘어지는 셀렉팅을 막아준다.

<br/>

## BEM 단점

1. 클래스네임이 너무 길다.
2. 더블클릭 선택이 불편하다.

```toc

```
