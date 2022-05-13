---
emoji: ⌨
title: Next.js 기본 파일
date: '2022-05-14 00:00:00'
author: developjik
tags: javascript react next.js
categories: Next.js
---

## \_app.jsx(tsx)

    ```tsx
    // pages/_app.tsx

    import { AppProps } from 'next/app';

    const MyApp = ({ Component, pageProps }: AppProps) => {
    	return <Component {...pageProps} />
    };

    export default MyApp;
    ```

- \_app.jsx(tsx) 내의 컴포넌트는 모든 페이지를 렌더할 때 항상 호출됩니다. 그래서 모든 페이지에 필요한 공통 로직의 경우 App 컴포넌트에 추가할 수 있습니다.

<br/>

### \_app.jsx(tsx) 필요한경우

- 페이지 이동할 때마다 유지해야 하는 스타일이나 레이아웃 적용
- 페이지 이동할 때 유지해야할 state 관리
- componentDidCatch 라이프사이클로 공통 에러 처리
- 페이지에 공통 로직을 통해 데이터를 주입해야하는 경우
- 모든 페이지에 필요한 css를 적용하는 경우

<br/>

### \_app.jsx(tsx)의 site title tag

site의 title 또한 \_app.tsx에서 추가하는데 아래와 같이 next/head에서 Head 컴포넌트를 import해서 사용하면 됩니다.

    ```tsx
    import { AppProps } from 'next/app';
    import Head from 'next/head';

    const MyApp = ({ Component, pageProps }: AppProps) => {
        return (
            <>
                <Head>
                    <title>제목 여기에</title>
                </Head>
                <Component {...pageProps} />
            </>
        );
    };
    export default MyApp;
    ```

<br/>

동적 title이 필요할 때는 pages 폴더 하위에 개별 컴포넌트마다 title 태그를 추가하면 overwrite 됩니다.

```tsx
import React from 'react';
import Head from 'next/head';
import {
  MainSection,
  FeaturesSection,
  ReviewsSection,
  CommunityPoolSection,
} from 'components/Business';

const Business: React.FC = () => {
  return (
    <>
      <Head>
        <title>동적 제목 여기에</title>
      </Head>

      <MainSection />
      <FeaturesSection />
      <ReviewsSection />
      <CommunityPoolSection />
    </>
  );
};

export default Business;
```

<br/>

## \_document.jsx(tsx)

Next.js에는 SPA에서 하나의 html역할을 하는 index.html이 물리적으로 존재하지 않습니다.

하지만, 링크로 font 파일을 가져오거나, script 태그로만 넣을 수 있는 라이브러리가 필요하거나, Google Analytics 같은 것을 설정할 때 html의 head태그와 body태그가 필요합니다.

이때, Next.js에서 이 역할을 하는 것이 \_document.js입니다.

<br/>

### \_document.jsx(tsx) 파일 추가

pages폴더 바로 밑에 `_document.jsx(tsx)` 이름으로 생성해야 하며, 다음 코드와 똑같이 작성해주세요.

```tsx
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR|Poppins&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

- next/document 에서 import한 **`Html`**, **`Head`**, **`Main`**, **`NextScript`** 컴포넌트는 build후에 **`html`**, **`head`**, **`main`**, **`script`** 태그가 됩니다.
- 이 컴포넌트를 import하지 않으면 Next.js가 제대로 서버 사이드 렌더링을 할 수가 없습니다. getInitialProps는 서버사이드렌더링을 위한 메서드이며, 추후에 설명할 예정입니다.
- **주의할 점은 \_document.js는 서버에서만 실행되는 파일이므로 window같은 브라우저 전역객체를 사용할 수 없습니다**. 또한 컴포넌트에 필요한 공통 로직의 경우 \_document.js가 아닌 \_app.js에서 추가해야 합니다.
- 위의 예제에서는, 구글 폰트를 추가해보았습니다.

<br/>

## \_error.jsx(tsx)

존재하지 않는 라우트에 접근하여 "없는 페이지"라고 안내하는 404 페이지나 서버 500 에러의 응답 페이지 또한 customizing할 수 있습니다.

```tsx
// pages/404.tsx

export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

```tsx
// pages/_error.tsx

import { NextPageContext } from 'next';
import { ErrorProps } from 'next/error';

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
```

<br/>

## next.config.js

프로젝트에 추가적으로 환경 설정을 하고 싶을 때 package.json 과 같은 위치인 루트 경로에 **"next.config.js"**라는 이름으로 설정파일을 추가하고 활용합니다.

### next.config.js 옵션이 있나?

- .next 라는 빌드 결과물의 폴더 이름을 변경하거나 빌드 할 때마다 생성되는 build id 등을 고정할 수도 있습니다.
- 실무에서 프로젝트를 할 때 dev 모드, production 모드, staging 모드에 따라 api url이 다른 경우가 있습니다. 아래와 같이 **`NODE_ENV`**로 환경을 확인하여 api url을 분기할 수 있습니다.
- [https://nextjs.org/docs/api-reference/next.config.js/introduction](https://nextjs.org/docs/api-reference/next.config.js/introduction)

<br/>

### next.config.js 실습 - 개발 모드에 따라 API 분기하기

- "yarn dev"로 프로젝트를 실행하면 아래 코드에서 env는 "**`development`**"이고, "yarn build"로 실행하면 env는 "**`production`**"이 됩니다.

```tsx
const env = process.env.NODE_ENV;

switch (env) {
	case 'development':
		API_URL = 'http://localhost:8080;
		break;
	case 'staging':
		API_URL = 'https://stg.api.evereathing.com';
		break;
	case 'production':
		API_URL = 'https://api.evereathing.com';
		break;
	default:
		API_URL = 'https://api.evereathing.com';
}

module.exports = {
	env: {
		API_URL
	}
};
```

- staging을 추가하고 싶을 때는 package.json의 "scripts"에 스크립트를 추가하면 됩니다.

```json
"scripts": {
	"dev": "next",
	"build:staging": "NODE_ENV=staging next build",
	"build": "next build",
	"start": "next start -p 80"
},
```

- 이렇게 설정한 API_URL은 아래와 같이 사용할 수 있습니다.

```tsx
// utils/config.ts
export const API_URL = process.env.API_URL;
```

```tsx
// API_URL 사용 예제
import { API_URL } from 'utils/config';

//생략
fetch(`${API_URL}/users`).then().then();
```

```toc

```
