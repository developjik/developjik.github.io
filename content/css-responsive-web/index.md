---
emoji: 🎨
title: Responsive Web
date: '2022-03-30 00:00:00'
author: developjik
tags: css responsive 반응형
categories: css
---

> 반응형 웹이란, 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하는 웹 페이지를 의미합니다. 오늘날에는 IT 기기의 종류가 더욱 다양해짐에 따라 디스플레이의 크기에 맞게 유동적으로 반응하는 반응형 웹을 구현하는 것이 더욱 중요하다.

<br/>

## 일반적인 Breakpoint

![responsive](https://user-images.githubusercontent.com/67889389/160392557-bdaff57c-6d16-4a92-ad4d-2c19c55c4c69.png)

- desktop 스타일링: 1920 ~ 1024px
- ipad 스타일링: 1024 ~ 768px
- phone 스타일링: 768 ~ 0px
- 보통 2개(1024 / 768)를 이용한다
- 관리를 편하게 하려면 1개(768)를 이용한다

<br/>

## CSS 반응형 Media Query

```scss
@media only screen and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```

- `@media` : media 쿼리를 시작
- `only screen` : 어떤 디바이스에서 적용하는지 알려줍니다. 예를 들면 프린트를 하고싶을 때 적용하려면 only print라고 작성하면 됩니다. screen이라고 할 경우 어떤 디바이스에 상관없이, 화면에 보이는 스크린이기만 하면 전부 적용됩니다.
- `and (max-width : 480px)` : 이건 media feature라고 불리는 부분입니다. 어느 조건에 아래의 css를 적용할지 작성해줘야 합니다.

<br/>

## SCSS 반응형

```scss
/* mediaQuery.scss */

$phone: 'only screen and (max-width: 768px)';
$desktop: 'screen and (min-width: 769px)';
```

<br/>

```scss
/* box.scss */
@import './mediaQuery.scss';

.big-box {
  @media #{$phone} {
    display: none;
  }

  @media #{$desktop} {
    display: block;
  }
}
```

```toc

```
