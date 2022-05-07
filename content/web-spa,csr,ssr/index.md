---
emoji: ⌨
title: SPA, CSR, SSR
date: '2022-05-07 00:00:00'
author: developjik
tags: web spa csr ssr
categories: web
---

## Static Website(정적인 웹사이트)

- 화면에 보이는 컨텐츠 그대로 html 파일에 작성되어있어서, 서버에 저장된 html 파일 그대로 브라우저에 보이는 것.
- 주로사용자 및 시간에 따라 항상 똑같은 내용을 보여주는 사이트는 static website로 만드는게 적합하다.
- ex) 회사 소개 페이지, 반복이 없는 포트폴리오 페이지, gatsby 블로그 등

<br/>

## Dynamic Website

- 서버에 저장된 html 파일이 그대로 브라우저에 그려지는 것이 아니라, 다이나믹하게(=동적으로) html 파일이 만들어지는 것이다. 요즘 대부분의 웹사이트가 dynamic website이다.
  ![dynamic-website](https://user-images.githubusercontent.com/67889389/166934040-6f22c813-bcef-41af-b874-a721e1932d5e.png)

- 예를 들어, airbnb 사이트에서 어제 접속하고, 오늘 접속할 때마다 추천 숙소 목록이 바뀐다. 목록 디자인은 그대로인데, 숙소 목록 데이터가 바뀌는 것은 Dynamic Website이기 때문이다.

<br/>

## SPA (Single Page Application)

![spa](https://user-images.githubusercontent.com/67889389/166934647-cb08c583-8246-466b-8cdf-af7826a6f000.png)

- 하나의 파일로 전체 사이트(=여러 페이지)를 구현. 즉, 단일의 html 페이지에서 전체 웹 사이트/서비스를 구현.
- npm run build ⇒ html 파일 하나 생김 (ex. AWS 배포할 때)
- HTML 태그 자체를 자바스크립트가 동적으로 생성. 즉, 페이지를 이동하려고 하면 자바스크립트 내의 특정 함수를 타서 `<div id="root" />` 의 내용을 싹 교체하는 것이다.
- 서버로부터 html 자체를 받아서 페이지를 바꾸는게 아니다.
- 페이지 이동 시 화면 깜빡임 X

<br/>

## CSR (Client Side Rendering)

![csr](https://user-images.githubusercontent.com/67889389/166938057-e663f154-ad7e-4752-b8dd-4803c83d97d1.png)

- 웹 페이지의 렌더링이 클라이언트(브라우저) 측에서 일어나는 것을 의미.
- 브라우저는 최초 요청에서 html, js, css 확장자의 파일을 차례로 다운로드.
- 최초로 불러온 html의 내용은 비어있음. (html, body 태그만 존재) - `public/index.html`
- js 파일의 다운로드가 완료된 다음, 해당 js 파일이 dom을 빈 html 위에 그리기 시작.
- 웹서버 호출을 최소화 할 수 있음
  - 최초 호출 때만 html, js, css를 요청
  - 이후에는 화면에서 변화가 일어나야 하는 만큼의 데이터만 요청 (ex. AJAX/JSON)
- 라우팅(새로운 페이지로 이동)을 하더라도 html 자체가 바뀌는 것이 아니라 JavaScript 차원에서 새로운 화면을 그려내는 것이다.

![cra](https://user-images.githubusercontent.com/67889389/166936001-cb11ae1b-0613-4944-8824-ca3b6bf0b3b3.png)

<br/>

### Create React App (CRA) ← Only CSR

- Create React apps with no build configuration.
  - 별도의 초기 설정 없이도 CRA를 통해 React 기반의 SPA 사이트를 구현할 수 있게 됨. 하지만, CRA로 build한 프로젝트는 SEO (Search Engine Optimization)에 문제가 있다
    -SPA의 장점을 살리면서 SEO도 같이 챙기기 위해서 SSR (Server Side Rendering)이 다시 부각되었다.

<br/>

### CRA에서의 SEO

![cra-seo](https://user-images.githubusercontent.com/67889389/166937389-d577ed3a-3df0-4f0a-9d4b-51d56f1e9c97.png)

> [https://github.com/nfl/react-helmet](https://github.com/nfl/react-helmet)

<br/>

## SSR (Server Side Rendering)

![ssr](https://user-images.githubusercontent.com/67889389/166938086-86673305-464c-45fc-86cf-a6a2ca8d1fb4.png)

- -SSR은 서버에서 첫 페이지의 렌더링을 클라이언트 측이 아닌 서버 측에서 처리해주는 방식이다.
- CSR과 비교하면 SEO 측면에서 유리하다. 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 보여주는 방식이기 때문에 CSR의 단점인 "첫 페이지 깡통" 상태를 극복할 수 있다.
- UX 측면에서 유리하다. CSR에 비해 페이지를 구성하는 속도는 늦어지지만, 전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다.
  - 주의) 페이지를 잘못 구성할 경우 CSR에 비해 서버 부하가 커지거나 / 첫 로딩이 매우 느려질 수 있음

<br/>

## SSR for MPA, SSR for SPA

흔히 말하는 2세대 웹인 JSP, PHP, Django Template 같은 것들 역시 SSR이였다. 하지만, CSR의 한계를 극복하기 위해 웹이 2세대 기술로 돌아가고 있는것은 아니다. 또한, SPA랑 CSR이랑 같은 의미가 절대 아니다.

<br/>

## CSR + SSR? ⇒ Next.js (like CRA)

- 현재 CSR + SSR을 섞어 쓸 수 있고, 생산성이 좋은 Next.js가 주로 채택된다.
- SSR의 CRA, 간단히 구성 가능
- ex) 토스, 배민, 카카오커머스 등 사용 중

> [Next.js by Vercel - The React Framework](https://nextjs.org/)

<br/>

### Next.js 원리 & 구조

![next js](https://user-images.githubusercontent.com/67889389/166942158-92dccc82-793c-4898-9dc3-ba5728e6f01b.png)

- SSR은 다음과 같은요소로 기본적으로 구성된다
  - node.js로 구성된 (서버사이드에서 렌더링을 해주는) FE 서버
  - pyhton, django로 되어 있는 (데이터를 주고 받는) BE 서버
- 다음과 같은 과정을 거쳐 SSR이 진행된다
  1. 유저가 브라우저에 `/`를 입력.
  2. 미리 실행되고 있는 FE 서버가 요청을 받고 서버사이드 렌더링.
  3. 만들어진 html 을 브라우저에게 보냄.
  4. 브라우저가 응답받은 html 을 그림.
  5. html 에 기능을 부여할 `index.js`파일을 다운로드 받음. (hydration)

<br/>

### Next.js의 장점

- 페이지 기반 라우팅 시스템 (동적 라우팅 지원)
- pre-rendering , 페이지별 정적파일 생성과 서버사이드 렌더링 지원
- 코드 스플리팅
- CSS, Sass 기본 지원 및 다른 CSS-in-JS 라이브러리 지원
