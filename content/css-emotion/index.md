---
emoji: 🎨
title: emotion 정리
date: '2022-04-27 00:00:00'
author: developjik
tags: css emotion react emotion-react
categories: css
---

## emotion 기본 개념

### emotion.js 이란?

- CSS-in-JS의 종류 중 하나로 JavaScript 안에서 스타일을 작성할 수 있게 해준다.
- emotion.js는 주로 Framework Agnostic(프레임워크를 사용하지 않는 것)과 React 두 가지 방식으로 사용된다.

### emotion css props 
```javascript
import { css } from '@emotion/react'

const color = 'white'

render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)

```

### emotion composition
```javascript
import { css } from '@emotion/react'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
)
```

### emotion styled-components
```javascript
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  margin-bottom: ${props => props.value ? '4px' : '2px'}
  &:hover {
    color: white;
  }
`

render(<Button>This my button component.</Button>)

```
### emotion object style

```javascript
import { jsx } from '@emotion/react'

render(
  <div
    css={{
      color: 'darkorchid',
      backgroundColor: 'lightgray'
    }}
  >
    This is darkorchid.
  </div>
)

import styled from '@emotion/styled'

const Button = styled.button(
  {
    color: 'darkorchid'
  },
  props => ({
    fontSize: props.fontSize
  })
)

render(
  <Button fontSize={16}>
    This is a darkorchid button.
  </Button>
)
```

### emotion child selector
```javascript
import { jsx } from '@emotion/react'

render(
  <div
    css={{
      color: 'darkorchid',
      '& .name': {
        color: 'orange'
      }
    }}
  >
    This is darkorchid.
    <div className="name">This is orange</div>
  </div>
)
```

### emotion global styles
```javascript
import { Global, css } from '@emotion/react'

render(
  <div>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <Global
      styles={{
        '.some-class': {
          fontSize: 50,
          textAlign: 'center'
        }
      }}
    />
    <div className="some-class">This is hotpink now!</div>
  </div>
)
```

### emotion theme provider
```javascript
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

function SomeText (props) {
  const theme = useTheme()
  return (
    <div
      css={{ color: theme.colors.primary }}
      {...props}
    />
  )
}

render(
  <ThemeProvider theme={theme}>
    <SomeText>some text</SomeText>
  </ThemeProvider>
)
```

### emotion reset

```shell
npm i emotion-reset
```
```javascript
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

render(
  <Global styles={css`
    ${emotionReset}

    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
  `} />
);
```

## Next.js에 emotion 설치하기

1. emotion 필요 패키지 설치하기
```shell
yarn add @emotion/react @emotion/styled 

yarn add --dev @emotion/babel-plugin
```

2. .babelrc 설정하기
```json
{
    "presets": [
      [
        "next/babel",
        {
          "preset-react": {
            "runtime": "automatic",
            "importSource": "@emotion/react"
          }
        }
      ]
    ],
    "plugins": ["@emotion/babel-plugin"]
  }
```

```toc
```


