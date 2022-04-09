---
emoji: 🏳️‍🌈
title: MVC 패턴
date: '2022-04-09 00:00:00'
author: developjik
tags: 디자인 design MVC pattern
categories: design
---

## MVC Pattern

- 관심사의 분리(SoC, separation of concern)에서부터 나온 패턴

> 관심사 분리로 **코드의 단순화** 및 **유지보수**의 **더 높은 수준의 자유**가 생긴다. 관심사가 잘 분리될 때 독립적인 개발과 업그레이드 외에도 모듈 재사용을 위한 더 높은 자유가 있다. 모듈이 인터페이스 뒤에서 이러한 관심사의 세세한 부분을 숨기기 때문에 자유도가 높아짐으로써 다른 부분의 세세한 사항을 모르더라도, 또 해당 부분들에 상응하는 변경을 취하지 않더라도 하나의 관심사의 코드 부분을 개선 및 수정할 수 있다.

![MVC](https://user-images.githubusercontent.com/67889389/162455366-127eca25-f071-4bcb-9943-ce6152eae3f4.png)

<br/>

### Model

- 데이터. json 또는 데이터 모델 정의.
- 일반적으로 데이터를 처리하는 로직과 함께!

<br/>

### View

- 화면, html, 레이아웃 이라고 생각하면 된다.

<br/>

### Controller

- 이벤트 핸들러와 이벤트를 처리하는 로직이 있는 곳.
- 데이터랑 뷰 이어주는 역할.
- 요청이(이벤트 발생) 오면 모델에 적절한 로직을 실행하도록 한다.

<br/>

### 대표적인 MVC Pattern FrameWork

- ruby on rails, laravel, angular, backbonejs, django..

<br/>

### MVC의 단점(복잡성)

![MVC-complex](https://user-images.githubusercontent.com/67889389/162455375-6dbb03e2-b43c-4991-961f-fdd59f2d7d20.png)

<br/>

### React?

- React.js는 mvc pattern을 포함(이용)하고 있는 FrameWork가 아니다.
- React.js는 레고처럼 조합해서 사용할 수 있는 UI 라이브러리이다.
- 데이터 관리(감지)가 쉬운 재사용 가능한 UI 컴포넌트를 위해 만들어졌다.

```toc

```
