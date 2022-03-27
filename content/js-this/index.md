---
emoji: ⌨
title: This
date: '2022-03-26 00:00:00'
author: developjik
tags: javascript this
categories: javascript
---

> 일반적으로 this는 클래스(class)에서만 사용하며, class로 생성한 인스턴스 객체를 의미하나, JavaScript에서는 그렇지 않고 this가 가르키는 대상이 항상 달라집니다.

## 함수와 메서드

- 함수와 메서드는 모두 function 키워드로 함수를 정의한 것을 의미
- 메서드는 객체의 프로퍼티로 함수가 정의되어야 한다.
  중요한건 **객체가 함수를 호출해야 메서드**이다!!!

```jsx
let user = {
  name: 'kim',
  underTwenty: function (age) {
    return age < 20;
  },
};

user.underTwenty(30); // 메서드

const under20 = user.underTwenty;
under20(15); // 객체 안에 정의된 함수라도, 이것은 메서드가 아닌 함수이다
```

<br/>

## this

- this란?
  this가 바라보고 있는 객체인데, 상황에 따라 대상이 달라진다.
- this는 실행컨텍스트가 생성될 때 결정된다.
  실행컨텍스트는 함수를 호출할 때 생성되므로, **this는 함수를 호출할 때 결정**된다.

<br/>

## this의 동작 방식

### 전역 공간에서 this

- client(브라우저)에서는 window
- Node.js에서는 global

```jsx
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1
```

### 메서드로 호출될 때 this (암시적 binding)

- 객체의 프로퍼티에 할당된 함수를 호출하면, this는 해당 객체를 바라본다
  - 물론 객체가 메서드로 호출해야 함

```jsx
var name = 'lee';

var user = {
  name: 'kim',
  getName: function () {
    console.log(this.name);
  },
  age: 50,
  child: {
    age: 15,
    underTwenty: function () {
      console.log(this.age);
      return this.age < 20;
    },
  },
};

user.getName(); // kim | getName 메서드는 user 객체를 바라봄
user.child.underTwenty(); // 15 | underTwenty 메서드는 child 객체를 바라봄

user.parentUnderTwenty = user.child.underTwenty;
user.parentUnderTwenty(); // 50 | parentUnderTwenty 메서드는 user 객체를 바라봄
```

### arrow function에서 this

- this의 대상이 어떤 객체가 호출했느냐로 결정되지 않는다!
- 함수 내부에 this는 없으며, scope chain의 가장 가까운 this로 대상 결정!

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

****  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button **onClick={this.handleClick}**>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

### 원하는 대상 this binding (명시적 binding)

#### call

- 함수를 호출할 때, 원하는 대상의 객체를 인자로 넘겨준다.

  ```jsx
  var user = {
    name: 'kim',
    getName: function () {
      console.log(this.name);
    },
    age: 50,
    child: {
      age: 15,
      underTwenty: function () {
        console.log(this.age);
        return this.age < 20;
      },
    },
  };

  user.child.underTwenty.call(user); // 50
  ```

#### apply

- call 메서드와 완전히 같은 기능이나, 호출할 함수에 인자를 배열로 넘기느냐 or not

#### bind

- call과 비슷하지만, 바로 호출하는 것이 아니라 대상을 묶어놓기(binding)만 하는 것

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    **this.handleClick = this.handleClick.bind(this);**
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button **onClick={this.handleClick}**>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

- event listener는 내부적으로 this를 이벤트가 일어난 엘리먼트로 대상을 잡아놓기 때문에
  handleClick 내부의 this가 Class를 가르키는 것이 아닌, 엘리먼트를 가르키게 됨

<br/>

## this 예제

```jsx
var name = 'lee';

var user = {
  name: 'kim',
  getName: function () {
    console.log(this.name); // kim

    var inner = function () {
      console.log(this.name); // lee
    };

    inner();
  },
};

user.getName();
```

this 예제 더 풀어보기:
[7 Interview Questions on "this" keyword in JavaScript.](https://dmitripavlutin.com/javascript-this-interview-questions/)

```toc

```
