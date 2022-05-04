---
emoji: ⌨
title: 검색과 SEO
date: '2022-05-04 00:00:00'
author: developjik
tags: web search
categories: web
---

## 검색 크롤러 기본 방식

웹페이지를 방문하여 모든 링크를 찾은다음, 그 링크를 목록화 한다.
그 다음 이 링크들을 이전에 방문한 적이 있는지 확인하고, 방문해본 적이 없으면 그 링크를 타고 웹페이지를 방문한다.
그런 다음 그 페이지에서 앞에서 진행한 과정을 반복한다.

<br/>

## 현재의 검색 알고리즘

- 하나가 아닌 여러 개의 알고리즘으로 구성되어있다.
- 모든 웹페이지의 수 많은 검색어, 모든 링크를 다 합친 것이 페이지랭크가 된다.
- 실제로 링크를 누가 얼마나 클릭하는지도 중요하다
- 크롤러가 웹페이지를 찾으면 Google 시스템에서는 브라우저와 마찬가지로 해당 페이지의 콘텐츠를 렌더링한다. 이때 키워드 및 웹사이트 최신 정보에 이르는 주요 신호를 기록하며 검색 색인에서 모든 주요 신호를 추적한다.
- 키워드 검색과 웹페이지에 담긴 텍스트 비교, 반복성, 서체크기, 대문자, 키워드의 위치 등 여러가지 전통적인 정보검색기술과 결합한다.
  여기서 전통적인 판단 요소를 시그널(signal) 이라고하고 검색품질에 대단히 중요한 역할을 한다.

<br/>

## SEO(Search Engine Optimization, 검색 최적화)를 위해서 해야 될 것

> 구글이 말하길 검색엔진 최적화의 효과를 보려면 시간이 다소 걸립니다.
> 변경을 시작해서 성과가 나타날 때까지 보통 4개월에서 1년 정도 소요됩니다.

### 1. 잘 노출 되게 한다.

![good-search-result](https://user-images.githubusercontent.com/67889389/166693203-55fd783d-0792-4ac5-9786-2f14a215558f.png)

<br/>

1.  우리 사이트 주소가 여기저기서 링크 되고 있어야 한다.
    1. youtube도 올리고 페이스북도 올리고 인스타도 올리고 블로그도 쓰고 서로 링크하고(하지만 너무 recursive하면 광고로 판단하고 blocking한다)
    2. 각 사이트(유투브, 페이스북 등)의 제목과 내용의 단어 선택을 잘 해야한다!
2.  `head`에 페이지 정보를 잘 작성한다.

    ![head](https://user-images.githubusercontent.com/67889389/166693464-c921678b-91b6-4e6f-9902-029aae7da795.png)

3.  `robots.txt` 크롤러와 사이트의 약속
    ![robots txt](https://user-images.githubusercontent.com/67889389/166693817-1819c78d-b41f-4c38-9b82-1af372e6ca31.png)

4.  `sitemap.xml`
    ![sitemap xml](https://user-images.githubusercontent.com/67889389/166693829-b6f57535-7ebf-449e-9a45-2ea5a1790deb.png)

### 2. 사이트를 컴퓨터가 이해할 수 있도록 만든다.

![good-search-result2](https://user-images.githubusercontent.com/67889389/166693798-1fb5f088-559d-4f19-b0bc-572014517d46.png)

<br/>

![semantic](https://user-images.githubusercontent.com/67889389/166693826-9df9e015-4360-40da-ade7-b06f60371d23.png)

1. HTML5 Semantic Elements

   - 페이지 이동 시 검색되길 바란다면 무조건 a 태그를 쓰기
   - <hn> 태그 잘 활용하기
   - img 태그 alt 설명 잘 달기
   - img 태그 사진 이름부터 잘 짓기
   - img 태그 위에 figure 추가
   - header, main, footer, nav, section, aside 등등 태그 잘 활용하기
   - caption 태그 활용해서 table 설명쓰기

<br/>

> 참조 : [SEO 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko&visit_id=637664932657806093-2379697166&rd=1)

```toc

```
