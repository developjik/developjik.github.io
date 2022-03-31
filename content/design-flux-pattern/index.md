---
emoji: 🏳️‍🌈
title: Flux 패턴
date: '2022-04-02 00:00:00'
author: developjik
tags: 디자인 design flux pattern 플럭스 플럭스패턴
categories: design
---

## 기존 MVC의 문제점

![mvc](https://user-images.githubusercontent.com/67889389/161048298-7446dcb2-3522-4365-b753-b1b5ed8bc766.png)

- 프로젝트 규모가 커질수록 빠르게 복잡해진다.
- feature 추가될 때마다 모델과 뷰를 연결하는 복잡성이 증가한다.
- 데이터 간의 의존성과 연쇄적인 갱신은 뒤얽힌 데이터 흐름을 만들고 예측할 수 없는 결과로 이끌게 된다.
- 새로온 개발자가 합류하면, 너무 복잡해서 코드만 보고 해석이 힘들다. (유지비용 증가)
- 복잡성이 증가할 수록 예측 불가능해지고 안정성이 떨어진다. (어디서 버그가 터져나올지 테스트도 어렵다.)

> 이 프로젝트는 파생되는 데이터를 올바르게 다루기 위해 시작되었다. 예를 들면 현재 뷰에서 **읽지 않은 메시지가 강조**되어 있으면서도 **읽지 않은 메시지 수를 상단 바에 표시**하고 싶었다. 이런 부분은 MVC에서 다루기 어려운데 **메시지를 읽기 위한 단일 스레드에서 메시지 스레드 모델을 갱신**해야하고 동시에 **읽지 않은 메시지 수 모델을 갱신** 해야하기 때문이다.

<br/>

## Flux

Flux는 Facebook에서 소개한 아키텍쳐입니다. 전통적인 MVC 패턴을 버리고, 개발이 오래되고 커져도 유지보수가 쉽고 reliable하고 high performance를 유지하는 새로운 패턴을 제시했습니다.

Redux는 Flux 패턴에 기반 라이브러리이므로 Flux 패턴을 이해하고 넘어갈 필요가 있습니다!

![flux](https://user-images.githubusercontent.com/67889389/161048291-44f83bfd-2964-4c88-a125-1063c3946213.png)

- **단방향 데이터 흐름**(unidirectional data flow)이 핵심.
- 사용자에 의해 Action이 발행되면, 해당 Action에 영향이 있는 모든 View가 갱신(rerender)된다. 어디에서 어떤 일이 일어날지 알 수 있다(=예상가능하다. 복잡하지 않다).
- Flux는 세 가지 부분으로 구성 되어 있다.
  1. Dispatcher
  2. Stores
  3. Views(리액트 컴포넌트)

### Dispatcher

- dispatcher를 통해 action을 발행한다.
- 모든 데이터는 중앙 허브인 dispatcher를 통해 흐른다.

### Store

- 어플리케이션의 데이터와 비지니스 로직을 가지고 있는 store

### Views

- action이 발행되면 이 action에 영향이 있는 모든 view가 갱신됨

```toc

```
