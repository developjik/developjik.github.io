---
emoji: ⌨
title: Web 발전
date: '2022-04-06 00:00:00'
author: developjik
tags: web development 웹
categories: web
---

## Web System Development History

### 1세대 웹 서비스 - 전통적인 Web System Architecture. 정적 웹.

![traditional_web_architecture](https://user-images.githubusercontent.com/67889389/161797770-76df6f7c-a5e0-4048-b66d-94ecf705d93b.png)

- 웹 서버가 모든 내용이 담긴 HTML 페이지를 클라이언트(ex. Web browser)에게 전송
  - 초창기 웹사이트/서비스에 적합했던 시스템
  - 초창기 웹사이트는 단순한 정보 제공 위주
  - 특별히 기능이 X, User Interaction 이 많이 요구되지 X
- 1세대 웹이 정적인 이유? HTML, CSS 자체가 정적
  - `Hyper Text` : 링크로 연결된 문서
  - `Markup Language` : “이렇게 보여줘라” 에 대한 지시
  - `HTML` : 웹페이지의 내용을 브라우저에게 어떻게 렌더링(rendering) 해주라고 마크업 해주는 것
- 어떻게 보여지는가에 대한 것이기 때문에 로직(동적)이 없다. 정적

<br/>

### 2세대 웹 서비스 - User Interaction 증가. 동적 웹 (JavaScript).

![first_version_of_spa_ajax](https://user-images.githubusercontent.com/67889389/161797756-2701467a-076a-4d86-8198-c931f491895d.png)

- 웹서비스들이 점점 발전함에 따라 다이나믹한 interaction이 요구되어 웹 기반의 언어인 자바스크립트가 출현
- JavaScript 는 일부분에서만 사용되었고, 또한 현재 통용되는 API 의 개념이 아직은 널리 사용 되지 않음 <br/> → 동일한 서버에서 HTML, Javascript(프론트 영역) 데이터(백엔드 영역) 모두 전송 <br/> ex) Python Django, PHP Laravel

<br/>

### 3세대 웹 서비스 - SPA. 구별되기 시작하는 Frontend / Backend.

![spa](https://user-images.githubusercontent.com/67889389/161797762-264d9948-e70e-40d2-b24c-9eb3a00f4d85.png)

- 동적인 기능이 main
- 즉 HTML/JavaScript 부분과 데이터 부분이 구조적으로 분리 되기 시작 <br/>⇒ Frontend 개발과 Backend 개발이 독립적으로 분리 (프론트 - UI UX / 백엔드 - Data)
- 기존의 방식대로 서버가 페이지 구성에 필요한 모든 요소(HTML, JavaScript, Data)를 매번 전송하는 것이 아니라, 파일은 처음 한 번만 송수신. 그 뒤로는 실시간 데이터만 주고 받음
  - AJAX는 js를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 응답한 데이터를 수신하여 웹페이지를 일부 동적으로 갱신
  - 제일 처음 전송된 단일 HTML 페이지에 포함되어 있는 JavaScript 에서 필요한 데이터를 API 서버로부터 호출하여 필요한 화면을 dynamic 하게 새롭게 구성해주는 방식
- 기술 스택도 각자에 맞는 스택을 시용하기 시작함. (ex. `React`)
- 프론트엔드가 개발의 혁신이 빠른 이유도 이 분야 자체의 역사가 짧기 때문

```toc

```
