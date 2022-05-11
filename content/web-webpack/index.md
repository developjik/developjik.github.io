---
emoji: ⌨
title: Webpack
date: '2022-05-11 00:00:00'
author: developjik
tags: web webpack bundler moudule babel 웹팩 번들러 모듈 바벨
categories: web
---

## 웹팩

웹팩은 `모듈 번들러`이다!

즉, 웹팩을 이해하기 위서는 "모듈"을 먼저 알아야한다.

<br/>

## 모듈패턴과 필요성

- 자바스크립트의 소스를 모듈 단위로 관리하거나 라이브러리 등을 만들 때 사용
- 전역 변수의 사용을 최소화 하기 위함
- 변수 scope을 지정해서 사용하기 위함
- Reusablility, Isolation, Organization
- 모듈 단위로 소스를 개발하면 각 모듈 간의 의존성을 최소화하거나 의존성 파악하기 쉬움

## 모듈(module)

> A module is one of the separate parts.

- 자바스크립트에서의 모듈이란 기능이 구현된 "자바스크립트 개별 파일"이라고 생각하면 됩니다.
- 잘 만든 모듈패턴은 하나의 파일이 하나의 모듈이 되며, 하나의 파일은 하나의 scope이 되도록 구현해야 합니다. 그래야 파일 내에서 변수도 자유롭게 선언할 수 있고, 관련 기능만 하나의 파일에 구현해서 다른 파일의 방해를 받지 않을 수 있게 됩니다.
- 바닐라 자바스크립트에서의 모듈패턴은 scope 개념을 활용해서 직접 구현해야 하며, 다른 도움 없이는 모듈화 시스템을 구축할 수 없습니다. commonJS, AMD, ES2015 등을 통해서 모듈화 시스템을 사용할 수 있습니다. 프론트앤드에서 모듈화는 아주 예전부터 있던 개념이며, react가 없던 시절에도 모듈화를 사용했었습니다.

<br/>

## 모듈 구현

### 옛날 방식

- 네임스페이스 생성을 위해 모듈패턴을 사용함.
- 라이브러리(CRA) 없이 모듈 패턴 구현할 때는 어떻게 했나?

  ```jsx
  // 이렇게 감싸서 하나의 모듈을 만들 수 있습니다.
  (function () {
      // scope가 막혀있기 때문에 전역변수가 생성되지 않습니다.
      // 즉시 실행함수는 보통 일회용 코드
  })();

  // 모듈 또 하나
  (function () {
  	window.myLibrary = /* */;
  }());

  // 모듈 또 하나
  (function () {
  	var math = {
  		add: function () {}
  	}

  	window.math = math;
  }());
  ```

<br/>

- Kakao 로그인할 때 Kakao가 하나의 네임스페이스라고 생각하시면 됩니다. 자바스크립트 라이브러리나 특정 회사의 외부 모듈의 용도를 명확하게 구분하고자 모듈 패턴을 확장하여 네임스페이스로 활용합니다.

  ```jsx
  //kakao 코드 초반
  (function (f) {
    if (
      (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' &&
      typeof module !== 'undefined'
    ) {
      module.exports = f();
    } else if (typeof define === 'function' && define.amd) {
      define([], f);
    } else {
      var g;

      if (typeof window !== 'undefined') {
        g = window;
      } else if (typeof global !== 'undefined') {
        g = global;
      } else if (typeof self !== 'undefined') {
        g = self;
      } else {
        g = this;
      }

      g.Kakao = f();
    }
  })(function () {
    return; /* 내부 코드 */
  });
  ```

<br/>

### 모듈 기능 표준화 (요즘 방식)

**ES Module**

- 자바스크립트를 이용하는 웹페이지의 코드가 복잡해지기 시작하면서 효율적인 소스 관리가 필요해져서 이제는 모듈을 정의하는 것 또한 표준으로 정의되었습니다.

  ```html
  <!-- IE는 아직 지원 안 됨. 사용하려면 type 속성 추가 -->
  <script type="module" src="index.js" />
  ```

  ```jsx
  // index.js
  import fn, { name } from './module';

  console.log(name);
  console.log(fn());
  ```

  ```jsx
  // module.js
  export const name = '모듈';

  export default function () {
    console.log('익명함수');
  }
  ```

- 아직 IE지원이 안되므로, 모듈을 사용하려면 babel, webpack이 필요하다.
  - `babel`은 ES6 → 브라우저에서 사용할 수 있도록 모듈을 commonjs로 바꿔주고,
  - `webpack`은 모듈간의 의존성을 파악하여 자바스크립트 코드를 bundle(합쳐) 해준다.

<br/>

## 번들러(bundler)

> bundle : 꾸러미, 묶음, 보따리

- 번들이란 여러 파일, 여러 구성을 합치는 것을 말하므로 번들러란 합치게 해주는 것을 말합니다.
- 모듈화된 파일들을 하나로 묶어 관리해야하므로 번들러의 역할이 중요해졌습니다.
- 모듈간의 의존성을 파악하여 하나의 파일로 만들어줍니다.
- npm run build 후에 하나의 자바스크립트 파일로 나온 결과물이 바로 번들된 결과입니다.
- ex) webpack, RequireJS, Rollup, Parcel 등

![bundler](https://user-images.githubusercontent.com/67889389/167857980-661007b2-14d2-48a1-bcdb-39a45cd21781.png)

- 왼쪽에 서로 종속관계인 파일들을 → 웹팩을 통해 → 하나로 깔끔하게 모아줍니다.

> [https://webpack.js.org/](https://webpack.js.org/)

<br/>

### 번들러(bundler)가 필요한 이유

하나의 페이지에 필요한 자바스크립트 파일들이 여러개 있다면 무슨 문제가 있을까요?

1. 파일 하나하나 HTTP 통신을 통해 서버에 요청이 있고! js 파일이 올 때까지 기다리기 때문에 화면 로딩시간이 오래 걸립니다.

   ![why-bundler](https://user-images.githubusercontent.com/67889389/167858000-82fb1c69-f186-4ca3-8d0b-b446315103e4.png)

   → 이렇게 one by one으로 파일을 요청하고 응답받기 때문에 파일 개수가 많아질 수록 요청이 많아진다. <br/>
   즉, 유지보수 좋게 한다고 다 모듈화 시키면 렌더링 퍼포먼스가 안 좋아지기 때문에, 개발은 파일별로 하되 실제 브라우저에서는 하나의 파일만 있는 것이 좋다. 그래서 웹팩이 이러한 역활을 하는 bundler로서 주로 우리는 CRA를 통해 사용해 왔다.

2. 여러 파일로 나눴는데 서로 종속관계라면?

   이 경우에 여러 개로 쪼갠 파일의 로드 순서가 중요하다. 왜냐하면, 아래와 같이 mypage.js와 main.js 파일이 있는데 mypage.js에서 getUser 함수를 호출하기 때문에 main.js 파일은 무조건 mypage.js 보다 먼저 로드 되어야 한다. 웹팩이 이러한 모듈의 종속(dependecy) 관계를 파악하고 알아서! 잘 하나의 파일로 만들어줍니다.

   ```jsx
   // mypage.js

   const user = getUser();
   ```

   ```jsx
   // main.js

   const getUser = () => {};
   ```

   ```html
   <!-- script 순서가 중요해! -->
   <script src="main.js" />
   <script src="mypage.js" />
   ```

3. 웹팩은 js 파일 뿐만 아니라, img, css, mp4 등 다양한 리소스를 모두 모듈로 관리하여 서로의 의존성을 관리합니다.

4. 이외에도 개발 단계에서 사용하는 dev server, 필요할 때 import하는 dynamic import, 모듈을 하나의 파일로 만들지 않고 의존성을 따져 나눠서 빌드하는 code spliting 등을 지원합니다.

- 전체적으로 이런 느낌 !!
  ![bundler2](https://user-images.githubusercontent.com/67889389/167857997-3ccf298f-8799-4bdc-b38f-34f9d935953f.jpeg)

## Babel

webpack과 babel이 서로 특별한 관계가 있는 것은 아니지만 webpack을 설정할 때 주로 babel을 추가한다.

간단히 말하면, Babel은 JavaScript 컴파일러입니다.

> compiler(컴파일러) 란?
> 사람이 읽기 편한 프로그래밍 언어에서 컴퓨터가 읽기 편한 코드로 바꿔주는 것
> 대표적 compile 언어 : c, c++, java

<br/>

### Babel이 필요한 이유?

- JavaScript는 컴파일 언어가 아닌지만, Babel은 방금 나온 신상 자바스크립트 버전을 어느 브라우저에나 사용할 수 있도록 ES5 버전으로 변환해줍니다. 즉, 브라우저는 아직 새로운 자바스크립트 버전을 맞이할 준비가 안 됐는데, 개발자는 새로운 버전으로 효율적인 문법을 미리 쓰면 좋으니까 이런 Babel이 나온 것입니다.
- 자바스크립트에서 자바스크립트로 변환하는 것이지만, 높은 버전에서 낮은 버전으로 바꿔줍니다. 하지만, c, c++, java에만 사용하는 컴파일이라는 단어에 익숙한 사람은 컴파일러 대신 "트랜스파일러"라고 하는 사람도 있습니다.
- create react app으로 react 개발을 할 때 아직 브라우저가 받아드리지 못하는 각종 최신 메서드 들을 사용하는 경우가 많습니다. create react app에서는 이미 Babel 설정이 되어있기 때문에 우리는 버전을 고려하지 않고 마음대로 개발할 수 있다.\

<br/>

### Babel과 관련된 필수 module

- babel-loader: 바벨과 웹펙이 어떻게 동작하는지
- @babel/core: babel로 컴파일해서 결과물 파일이 나오도록 babel관련한 핵심 모듈
- @babel/preset-env: ES2015?6?7 등 어떤 버전을 쓸지에 관한 모듈
- @babel/preset-react: jsx 를 js로!

```toc

```
