---
emoji: 🎨
title: Styled Components 정리
date: '2022-02-26 00:00:00'
author: developjik
tags: css
categories: css
---

## styled-components 설치

styled-components는 각기 다른 컴포넌트들에게 스타일링의 영향을 주지 않기 위해 **Local**로 동작

```shell
yarn add styled-components
```

<br/>

## styled-components 기본 예제

```tsx
import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App() {
  return <Circle />;
}

export default App;
```

<br/>

## styled-components props 예제

```tsx
import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || 'black'};
  border-radius: 50%;
`;

function App() {
  return <Circle color="blue" />;
}

export default App;
```

Circle 컴포넌트에 `color` props 값을 설정해줬으면 해당 값을 배경색으로 설정하고, 그렇지 않으면 검정색.

<br/>

## styled-components 상속

```tsx
const Button = styled.button`
  background-color: yellow;
  border: 1px solid red;
  color: green;
`;

// extends <Button />
const RedButton = styled(Button)`
    &:hover {
        background-color: red;
    }
`;

<Button>Default Button</Button>
<RedButton>Red Button!!!!!</RedButton>
```

<br/>

## styled-components As 속성

만약 Button 컴포넌트의 스타일은 그대로 쓰고싶지만, 태그의 종류를 button이 아닌 a 태그로 바꾸고 싶을땐 'as' 속성을 사용

```tsx
{...}
<Button as={"a"} href={"/yeah"}>I am a tag!</Button>
```

<br/>

## styled-components Attributes 삽입하기

```tsx
const Input = styled.input.attrs(props => ({
  // 고정적인 Props를 전달할 수 있습니다.
  type: "password",

  // 혹은 다이나믹한 Props도 전달할 수 있습니다.
  size: props.size || "100px",
}))
`
  width: ${props => props.size};
`;

<Input placeholder={"default size input!"}  />
<Input placeholder={"bigger size input!"} size={"200px"} />
```

<br/>

## styled-components css 예제

```tsx
import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || 'black'};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="red" huge />;
}

export default App;
```

여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 `css`를 사용한다.

`css`를 불러와서 사용을 해야 그 스타일 내부에서도 다른 `props`를 조회 할 수 있다.

<br/>

## styled-components 애니메이션

```tsx
const colorChange = keyframes`
    from {
        background-color: red;
    }

    to {
        background-color: yellow;
    }
`;

const ColorButton = styeld.button`
    animation: ${colorChange} 1.5s linear infinite;
    width: 10rem;
    height: 3rem;
`;

{...}

<ColorButton>버튼입니다!</ColorButton>
```

<br/>

## styled-components ThemeProvider

[ThemeProvider](https://www.styled-components.com/docs/api#themeprovider)라는 기능을 사용하여 styled-components 로 만드는 모든 컴포넌트에서 조회하여 사용 할 수 있는 전역적인 값을 설정할 수 있다.

`ThemeProvider`로 설정한 값은 styled-components 에서 `props.theme`로 조회 할 수 있다.

```tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        },
      }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="gray" size="large">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button color="pink" size="small" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
```

```tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, outline, ...rest }) {
  return (
    <StyledButton color={color} size={size} outline={outline} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
```

<br/>

## polished

Sass 를 사용 할 때에는 `lighten()`또는 `darken()`과 같은 유틸 함수를 사용하여 색상에 변화를 줄 수 있다.

CSS in JS 에서도 비슷한 유틸 함수를 사용하고 싶을 때 polished를 사용한다.

```shell
yarn add polished

```

```tsx
import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
```

<br/>

## styled-reset

```shell
npm i styled-reset
```

- 방법 1

  ```tsx
  import React from 'react';
  import { Reset } from 'styled-reset';

  const App = () => (
    <React.Fragment>
      <Reset />
      <div>Hi, I'm an app!</div>
    </React.Fragment>
  );
  ```

- 방법 2

  ```tsx
  import React from 'react'
  import { createGlobalStyle } from 'styled-components'
  import reset from 'styled-reset'

  const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
  `

  const App = () => (
    <React.Fragment>
      <GlobalStyle />
      <div>Hi, I'm an app!</div>
    </React.Fragment>
  }

  export default App
  ```

- 방법 3

  ```tsx
  import { createGlobalStyle } from 'styled-components';
  import reset from 'styled-reset'; // style-reset 패키지

  const GlobalStyles = createGlobalStyle` 
      ${reset}
      a{
          text-decoration: none;
      }
  		*{
          box-sizing: border-box;
      }
  `;

  export default GlobalStyles;
  ```

```toc

```
