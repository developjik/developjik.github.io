---
emoji: 📄
title: 블로그 설정 & 글쓰기
date: '2022-01-08 00:00:00'
author: developjik
tags: blog
categories: blog
---

## 👋 나만의 blog 만들기

1. [gatsby 테마로 github blog 만들기](https://www.youtube.com/)
2. [netlify로 zoomkoding-gatsby-blog 만들기](https://app.netlify.com/start/deploy?repository=https://github.com/zoomkoding/zoomkoding-gatsby-blog)

<br/>

## 🏃‍♀️ 로컬 환경에 블로그를 실행하기

    ```bash
    # Install dependencies
    $ npm install

    # Start development server
    $ npm start
    ```

> 위 명령어가 문제 없이 실행됐다면 [http://localhost:8000](http://localhost:8000)에서 블로그를 확인하실 수 있습니다.

<br/>

## ⚙️ 블로그 정보 바꾸기

`gatsby-meta-config.js`에 있는 여러값들을 변경해줍니다.

### 1. 블로그 기본 정보 설정하기

```js
title: '' // 블로그 제목
description: '' // 블로그 설명
language: 'ko', // 'ko', 'en'
siteUrl: '' // 블로그 사이트 url
ogImage: '/og-image.png', // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하기
```

<br/>

### 2. 댓글 설정

블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정하실 수 있습니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```js
comments: {
    utterances: {
        repo: '' // zoomkoding/zoomkoding-gatsby-blog
    },
}

```

<br/>

### 3. 글쓴이 정보

author에 입력하신 정보는 홈페이지와 about 페이지 상단에 있는 글쓴이를 소개하는 섹션인 bio에서 사용됩니다.<br/>
**description**에 자신을 설명하는 문구들을 넣으면 애니메이션으로 보여지게 됩니다.<br/>
bio 이미지는 `assets`에 원하시는 파일을 추가하고 파일의 이름을 **thumbnail**에 넣어주시면 됩니다. (gif 지원)

<br/>

> 🤖 위에서 설정한 언어에 따라 description의 포맷이 달라집니다.

```js
author: {
    name: '정진혁',
    bio: {
      role: '개발자',
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif',
    },
    social: {
      github: 'https://github.com/zoomKoding',
      linkedIn: 'https://www.linkedin.com/in/jinhyeok-jeong-800871192',
      email: 'zoomkoding@gmail.com',
    },
},
```

<br/>

## 🙋‍♀️ about page 만들기

about 페이지 또한 gatsby-meta-config.js를 통해 생성됩니다.

### 1. timestamps

각 timestamp 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 timestamps section에 보여지게 됩니다.

> links에 해당 정보가 없다면 생략해도 됩니다.

```js
{
    date: '2021.02 ~',
    activity: '개인 블로그 개발 및 운영',
    links: {
        post: '/gatsby-starter-zoomkoding-introduction',
        github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        demo: 'https://www.zoomkoding.com',
    },
},
```

<br/>

### 2. projects

각 project 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 projects section에 보여지게 됩니다.

```js
{
  title: '개발 블로그 테마 개발',
  description:
    '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
  techStack: ['gatsby', 'react'],
  thumbnailUrl: 'blog.png',
  links: {
    post: '/gatsby-starter-zoomkoding-introduction',
    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
    demo: 'https://www.zoomkoding.com',
  }
}
```

<br/>

> 변동사항을 실행 중인 블로그에서 확인하시려면 `npm start`를 통해 재실행해주세요!

<br/>

## ✍️ 글 쓰기

글을 쓰려면 `/content` 아래에 디렉토리를 생성하고 `index.md`에 markdown으로 작성하시면 됩니다.

> 이 때, 폴더의 이름은 경로를 생성하는데 됩니다.

<br/>

### 🏗 메타 정보

index.md 파일의 상단에 emoji, title, date, author, tags, categories 정보를 제공해야 합니다.

> emoji는 글머리에 보여지게 되며, categories는 띄어쓰기로 나누어 여러개를 입력할 수 있습니다.

```
---
emoji: 🧢
title: Getting Started
date: '2021-03-22 23:00:00'
author: 줌코딩
tags: tutorial
categories: tutorial
---
```

<br/>

### 🖼 이미지 경로

글에 이미지를 첨부하고 싶으시다면 같은 디렉토리에 이미지 파일을 추가하셔서 아래와 같이 사용하시면 됩니다.

```
![사진](./[이미지 파일명])
```

<br/>

### 🔍 목차 생성

글의 우측에 목차가 보이기를 원하신다면 `index.md` 파일 맨 아래에 다음 내용을 추가하시면 자동으로 목차가 생성됩니다.

    ```toc
    ```

<br/>

```toc

```
