---
emoji: 🎨
title: Sass/Scss 정리
date: '2022-02-19 00:00:00'
author: developjik
tags: css
categories: css
---

## Sass(Syntactically Awesome Style Sheets)

**`Sass`** 는 **`CSS pre-processor`** 로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재 활용성을 높여줄 뿐 만 아니라, 코드의 가독성을 높여주어 유지보수를 쉽게해줍니다.

> `CSS pre-processor` 란?
> `CSS` 를 확장하는 스크립팅 언어로서, 컴파일러를 통하여 브라우저에서 사용 할 수 있는 일반 `CSS` 문법 형태로 변환됩니다.

<br/>

## Sass / Scss React에서 사용법

```shell
npm install node-sass --save
```

<br/>

## Comment (주석)

`Sass`의 주석이 CSS 와 다른점은 **`한 줄 주석`**이 추가되었다는 점 입니다.

`한 줄 주석`은 `//` 표기하며,  `CSS` 컴파일 되었을 때 나타나지 않습니다

`여러 줄 주석`은 `CSS` 와 동일하며 `CSS` 로 컴파일 되었을 때 나타납니다.

```sass
// You can't see me

/* You can't See me */

/*
	You
    Can
    See
    Mee
*/
```

<br/>

## Variable (변수)

`Sass` 는 `CSS`에 **`변수`** 개념을 도입한다.

변수가 가능한 형태 : `숫자`, `문자열`, `폰트`, `색상`, `null`, `lists`, `maps`

변수를 사용 할 때에는 `$` 문자를 사용합니다.

변수를 만들어도, 사용하지 않으면 컴파일된 `CSS` 파일에는 아무것도 나타나지 않습니다.

```sass
$primary-color: #333;

body {
  background-color: $primary-color;
}
```

### Variable Scope

변수를 `특정 selector(선택자)` 에서 선언 ⇒ `해당 selector` 접근가능

```sass
$primary-color: #333;

body {
  $primary-color: #eee;
  background-color: $primary-color;
}

p {
  color: $primary-color;
}
```

```css
body {
  background-color: #eee;
}

p {
  color: #333;
}
```

### Global Variable

`global(전역)` 하게 설정 할 때는 `!global` 플래그를 사용

```scss
$primary-color: #333;

body {
  $primary-color: #eee !global;
  background-color: $primary-color;
}

p {
  color: $primary-color;
}
```

```css
body {
  background-color: #eee;
}

p {
  color: #eee;
}
```

### Default Variable

`!default` 플래그는 해당 변수가 설정되지 X or 값이 null일떄 값을 설정

`!default` 플래그는 나중에 **`mixin`** 을 작성 할 때 유용하게 사용

```scss
$primary-color: #333;
$primary-color: $eee !default;

p {
  color: $primary-color;
}
```

```css
p {
  color: #333;
}
```

<br/>

## Math Operators (수학 연산자)

`Sass`, `Scss` 사용 가능 연산자 : `+`, `-`, `/`, `*`, `%`, `==`, `!=`

주의하실점은, `+`, `-` 연산자 를 사용 할 때는 단위를 언제나 통일!!

오류 코드 예 : `$box-width: 100% - 20px` ⇒ css 의 `calc()` 함수를 사용해야 한다.

정상코드의 예 `$box-width: 300px / 960px * 100%`

```scss
.container {
  width: 100%;
}

article[role='main'] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role='complementary'] {
  float: right;
  width: 300px / 960px * 100%;
}
```

<br/>

## Built-in Functions (내장함수)

`darken()` 함수 : 특정 색깔 얼마나 어둡게 할지 인수로 던져주면 자동으로 색상을 계산

<br/>

## Nesting (중첩)

`부모 선택자`를 참조 할 때는 `&` 문자를 사용합니다.

```scss
/* Sass */
.container {
  width: 100%;
  h1 {
    color: red;
  }
}
```

```scss
a {
  color: black;
  &:hover {
    text-decoration: underline;
    color: gray;
  }
  &:visited {
    color: purple;
  }
}
```

> `인셉션 규칙`: `Sass` 코드 `중첩`을 할 때, `4 레벨` 보다 깊게 X
>
> 코드가 복잡해질 확률이 높고 유지보수가 어려워지기 때문에

<br/>

## Import (불러오기)

`style`을 여러 파일들로 나누고, 다른 파일에서 불러와 사용하는 기능

`@import` directive 를 사용하여 `특정.scss 파일`을 불러 올 수 있다. (확장자를 붙이지 않아도 된다)

```scss
@import 'layout.scss';
@import 'layout';
```

> 만약에 `.sass 파일`이나 `.scss 파일`의일이름을 `_` 로 시작하면 `css` 파일로 `컴파일`되지 않습니다.

<br/>

## Extend (상속)

상속 지시자 :  `@extend`

```scss
.box {
  border: 1px solid gray;
  padding: 10px;
  display: inline-block;
}

.success-box {
  @extend .box;
  border: 1px solid green;
}
```

```css
.box,
.success-box {
  border: 1px solid gray;
  padding: 10px;
  display: inline-block;
}

.success-box {
  border: 1px solid green;
}
```

### Placeholder

`%` 를 사용하면 상속은 할 수 있지만 해당 선택자는 컴파일되지 않는다.

```scss
%box {
  padding: 0.5em;
}

.success-box {
  @extend %box;
  color: green;
}

.error-box {
  @extend %box;
  color: red;
}
```

```css
.success-box,
.error-box {
  padding: 0.5em;
}

.success-box {
  color: green;
}

.error-box {
  color: red;
}
```

<br/>

## Mixin (믹스인)

`extend` 와 비슷하지만 `Mixin`은 `argument`를 받을 수 있다.

`mixin` 을 선언 할 떄는`@mixin` directive 를 사용하며,

이를 사용 할 때는 `@include` directive 를 사용합니다.

```scss
@mixin headline($color, $size) {
  color: $color;
  font-size: $size;
}

h1 {
  @include headline(green, 12px);
}
```

```css
h1 {
  color: green;
  font-size: 12px;
}
```

```scss
@mixin media($queryString) {
  @media #{$queryString} {
    @content;
  }
}

.container {
  width: 900px;
  @include media('(max-width: 767px)') {
    width: 100%;
  }
}
```

```css
.container {
  width: 900px;
}

@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}
```

`#{ }` 표현 : 특정 문자열을 따로 처리하지않고 **그대로 출력** 할 때 사용

`@content` directive :  `@include` 하였을 때, 그 선택자 내부의 내용들이 `@conent` 부분에 나타나게됩니다.

<br/>

## Function (함수)

`mixin`은 `style markup`을 반환,  `function`은 `@return` directive 를 통하여 **값** 을 반환

Function을 선언 할 때는,  `@function` directive를 사용

```scss
@function calc-percent($target, $container) {
  @return ($target / $container) * 100%;
}

@function cp($target, $container) {
  @return calc-percent($target, $container);
}

.my-module {
  width: calc-percent(650px, 1000px);
}
```

```css
.my-module {
  width: 65%;
}
```

> 자주 사용 할 것 같은 함수는 위와같이 단축함수를 만들어 사용하기

```toc

```
