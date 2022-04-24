---
emoji: ⌨
title: Next.js 시작하기
date: '2022-04-24 00:00:00'
author: developjik
tags: javascript react next.js
categories: Next.js
---

[Next.js 공식 getting-started](https://nextjs.org/docs/getting-started)

## 1. Next.js 프로젝트 설치

### 프로젝트 설치하기

```bash
yarn create next-app
# or
yarn create next-app --typescript

```

### 설치 성공

![Next js설치성공](https://user-images.githubusercontent.com/67889389/164962209-6a27c279-66d0-4fb4-b38c-b35f372e7b3f.png)

<br/>

## 2. Next.js 폴더구조

### package.json

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

- Next.js에서는 `npm run dev` 또는, `yarn dev`로 프로젝트 개발을 시작할 수 있습니다.
- `npm run build` 명령어로 .next 폴더가 생성됩니다!
  - 개발이 모두 끝난 후, production 용으로 빌드할 때!
- `npm run start` 명령어로 .next 빌드 폴더를 실행할 server가 시작됩니다.

  - production 용으로 웹 서버를 띄울 때!

> 개발할 때는 `npm run dev`만 실행하면 된다. 나머지 명령어는 배포할 시점에 사용한다.

<br/>

### pages

> 🧑🏻‍🏫 pages 폴더에 있는 있는 파일이나 폴더는 곧 프로젝트의 라우트가 됩니다.

**✔️ 라우트 설정**

- 예를 들어 pages/mypage.tsx는 사이트 도메인에 /mypage 경로를 붙여서 접근할 수 있다.
- **동적 라우팅**을 구현하고 싶을 때는 [대괄호]를 사용하면 되는데 pages/restaurant/[id].tsx로 파일을 생성하면 브라우저에서 /restaurant/1, /restaurant/2 등으로 화면에 접근할 수 있습니다.
- **`파일위치`** **`라우트`**
  - **`pages/index.tsx`** => **`/`**
  - **`pages/restaurants.tsx`** => **`/restaurants`**
  - **`pages/mypage/settings.tsx`** => **`/mypage/settings`**
  - **`pages/restaurant/[id].tsx`** => **`/restaurant/id값`**
    - ex) /restaurant/1, /restaurant/2
  - **`pages/mypage/[..all].js`** => **`/mypage/아무경로/계속`**
    - ex) /mypage/phone/edit, /mypage/user/password/edit

<br/>

**✔️ Next.js의 라우트 작동 방식**

- pages 폴더 밑에 있는 파일은 모두 빌드 시점(npm run build)에 HTML을 만들어 놓습니다.
  - 그래서 첫 접속 시, 어떤 경로의 페이지라도 요청하면 서버측에서 렌더링한 해당 페이지의 html을 응답합니다.
  - **라우트마다 컨텐츠가 꽉 찬 html이 각각 있고, 각각 응답하므로 SEO가 좋아질 수 있다.**
- SEO가 필요한 모든 페이지는 pages 폴더 밑에 생성해주면 됩니다.

<br/>

**✔️ 백엔드 end point 개발용 api 폴더**

- 초기 세팅에 미리 만들어져 있는 pages/api/hello.js는 백앤드용 api 라우트 입니다.
- Next.js는 Node.js 기반으로 서버사이드 렌더링이 이루어지기 때문에 서버 부분을 확장하여 api를 구현할 수 있도록 기능을 제공합니다.
- pages/api 폴더 밑에 파일을 만들면 파일명이 end point가 되고 /api/파일명으로 호출할 수 있습니다.

<br/>

### .next

- **`.next`** 폴더는 production 용 빌드 결과물 입니다.
- **`npm run build`** 명령어를 실행하면 .next 폴더가 생기고, **`npm run start`** 명령어를 실행하면 웹서버를 띄워서 .next 폴더 기반으로 사이트가 실행됩니다.
- **`.next/server`** 폴더를 열어보면 **`pages`** 폴더 밑에 html 파일들이 생성되어 있습니다.
  - 루트 **`pages`** 폴더 하위로 리액트로 만든 컴포넌트들이 하나의 html 파일로 **`static`**하게 생성된 결과물입니다.
  - npm run start로 웹서버를 띄워서 특정 라우트로 접속하면, CRA 처럼 react-router에 의해 Client Side Rendering이 되는 것이 아니라, static하게 생성된 html 파일이 물리적으로 응답하게 되는 것입니다. (Server Side Rendering도 아님)

<br/>

### public

이미지 및 검색엔진 크롤러를 위한 `robots.txt`나 사이트 소유를 증명하는 html 파일 등을 public 폴더 바로 밑에 두면 됩니다.

🧑🏻‍🏫 Next.js에서 이미지와 같은 정적인 파일을 관리할 수 있는 3가지 방법으로 public 폴더를 이해해보자!!

![아래의 코드 세팅 구조!](https://user-images.githubusercontent.com/67889389/164965010-5bc747ae-01ca-4b2d-bdce-effb15d76a2d.png)

```tsx
import logo from '../images/logo.png'; // 2
export default function Home() {
  return (
    <div>
      <img src="https://img.google.com/food.png" alt="food" />
      ;  // 1
      <img src={logo} alt="Logo" />;   // 2
      <img src="/images/mainBg.png" alt="main" />
      ;  // 3
    </div>
  );
}
```

1. AWS S3와 같은 곳에 파일 업로드하여 파일의 url을 통해 서버 요청으로 가져오기
2. 소스코드 내에 이미지 파일을 같이 보관하여 import 해서 사용하기
3. public 폴더에 파일을 두고 루트 경로를 통해 서버 요청으로 가져오기

<br/>

- 정적인 파일을 public 폴더에 위치하고 소스 코드 내에서 / 경로로 접근할 수 있습니다.
- css에서도 마찬가지로 접근할 수 있습니다.

```css
.banner {
  height: 560px;
  margin-top: 70px;
  background-image: url(/images/mainBg.png);
  background-size: cover;
}
```

<br/>

**3가지 방법이 무슨 차이는?**

1. **파일의 url을 통해 서버 요청**

이미지 파일이 AWS s3같은 외부 파일 저장소에 위치해있습니다. 이미지 파일을 하나 가져올 때마다 매번 서버 요청이 일어납니다. 미리 파일을 로드해놓지 않으면 이미지 용량이 큰 경우에는 화면에서 이미지가 뜨는데 오래 걸리고, 용량이 작은 경우에도 이미지가 깜빡이는 현상이 일어납니다. 이미지를 압축해서 사용하거나 미리 로드하여 사용자가 이미지를 보는데 깜빡이지 않도록 처리해야합니다.

2. **이미지 import 하기**

Next.js에서 이미지를 import 해서 사용하려면 webpack이 이미지 파일을 인식할 수 있도록 webpack 환경 설정을 추가해야합니다. Next.js의 좋은 점은 create-react-app과 달리 직접 webpack 설정을 수정할 수 있다는 것이므로 url-loader, file-loader를 추가하면 됩니다. 소스코드내에 이미지가 있으니 이미지를 로드하는데 깜빡임이 없습니다. 다만 이미지를 import 할 경우, 빌드 속도가 느려지고 빌드의 결과물 용량도 커지게 됩니다.

3. **public 폴더에 파일 위치하기**

웹서버가 띄워진 로컬 루트 경로로 서버로 요청하여 이미지를 가져옵니다. 예를 들어 "public/images/mainBg.png" 이미지는 개발모드에서 "http://localhost:3000/images/mainBg.png"로 요청합니다. 파일이 같은 서버에 있으니 외부의 파일저장소 url을 요청하는 것보다는 응답 시간이 덜 걸릴테지만 이것 또한 서버 요청은 이루어지는 것이므로 깜빡임이 발생할 수 있습니다. 파일 저장소에 따로 사용료를 내지 않고 github에 소스코드와 같이 보관할 수 있는 점이 좋습니다.

```toc

```
