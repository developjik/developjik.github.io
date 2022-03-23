---
emoji: ⌨
title: Promise
date: '2022-03-19 00:00:00'
author: developjik
tags: javascript promise 프로미스 비동기
categories: javascript
---

## Promise란?

- Promise는 **비동기 동작을 처리**하기 위해 ES6에 도입되었다.
- Promise는 클래스이고, Promise 클래스를 인스턴스화 해서 promise 객체를 만든다.
- 반환된 promise로 원하는 비동기 동작을 처리한다.
- Promise는 `state`와 `resolve`, `reject` 함수를 이해해야 된다.

<br/>

## Promise 기본 형태 구현하기

```jsx
let promise = new Promise(function (resolve, reject) {
  // 여기 비동기 로직을 작성!
  // 시켜놓고 언제 완료될지 모르는 로직!
  // 완료 하면 -> resolve 호출
  // 비동기 동작 실패 하면 -> reject 호출
});

promise.then(function () {
  // 이 함수가 바로 위의 resolve 입니다.
  // 위의 비동기 로직이 성공하면 호출 됩니다!
});
```

```jsx
let promise = new Promise(function(resolve, **reject**) {

});

// then 인자 둘 다 cb 함수
// 첫 번째는 성공했을 때 실행할 resolve 함수 정의
// 두 번째는 실패했을 때 실행할 reject 함수 정의
promise.then(function() {}, **function() {}**);
```

<br/>

## promise 3가지 상태(State)

### Pending(대기)

- 비동기 처리 로직이 아직 완료되지 않은 상태

### Fulfilled(이행)

- 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

### Rejected(실패)

- 비동기 처리가 실패하거나 오류가 발생한 상태

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('before', promise);
    resolve(1);
    console.log('after', promise);
  }, 1000);
});

promise.then(function (data) {
  console.log(data);
});

// 출력 결과
// before Promise {<pending>}
// after Promise {<fulfilled: 1>}
// 1
```

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('before', promise);
    reject(1);
    console.log('after', promise);
  }, 1000);
});

promise.then(
  function (data) {
    console.log('resolve', data);
  },
  function (data) {
    console.log('reject', data);
  },
);

// 출력 결과
// before Promise {<pending>}
// after Promise {<rejected>: 1}
// reject 1
```

<br/>

## resolve, reject 이해하기

### **resolve**

- 비동기 로직이 **성공**했을 때 실행할 함수

### **reject**

- 비동기 로직이 **실패**했을 때 실행할 함수

<br/>

```jsx
let promise = new Promise(function(**resolve**, reject) {
    setTimeout(function() {
				// resolve 함수에 인자 넘기면
        **resolve('hello world');**
    }, 2000);
});

// resolve 호출시 전달되는 인자 → then 콜백함수의 매개변수로 받는다.
promise.then(**function(msg) {
    console.log(msg);  // 2초 뒤에 hello world!
}**);
```

- resolve 호출시 전달되는 인자 → then 콜백함수의 매개변수로 받는다.

```jsx
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
				// 실패한 건 아니지만, 실패했다고 가정하고 reject 호출
				// 보통은 api를 호출하고 응답 에러가 났을 때 reject를 호출하죠.
        **reject('으악!');**
  }, 2000);
});

promise.then(function() {
	console.log('resolve');        // 여기는 실행이 안 되고
}, **function(msg) {
	console.log('reject', msg);    // 여기만 실행됨! "reject 으악!"
}**);
```

<br/>

### 에러 처리 - reject

```jsx
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
      reject('으악!');
  }, 2000);
});

promise.then(function() {}, **function(msg) {**
	console.log(msg);
**}**);
```

- 두 번째 인자로 에러처리 로직을 작성하시거나, 아래와 같이 catch함수를 사용할 수 있습니다.

<br/>

### 에러 처리 - catch

```jsx
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
        reject('으악!');
  }, 2000);
});

promise
	.then(function() {})
	.catch(**function(err) {
		console.log(err);
	}**);
```

- catch로 받는 것이 가독성이 더 좋습니다.
- reject handler와 catch 방식은 똑같습니다.

<br/>

### resolve, reject 주의하기!

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1); // 첫 번째 resolve 만 실행됨
    resolve(2);
  }, 1000);
});

promise.then(function (msg) {
  console.log(msg);
});
```

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(1); // 첫 번째 reject 만 실행됨
    resolve(2);
    resolve(3);
  }, 1000);
});

promise.then(
  function (msg) {
    console.log('resolve', msg);
  },
  function (msg) {
    console.log('reject', msg);
  },
);
```

<br/>

## Promise Chaining

- 여러 개의 비동기 작업을 순차적으로 해야하는 경우가 많다.
- 순차적으로 각각의 작업이 이전 단계 비동기 작업이 성공하고 나서
  그 결과값을 이용하여 다음 비동기 작업을 실행해야 하는 경우

```jsx
getProducts() // 상품 가져오고
  .then(getComments) // 그리고 후기 가져오고
  .then(getLikes); // 그리고 좋아요 가져오고
```

<br/>

### then의 cb의 반환 값

- 값의 반환

```jsx
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1);
    }, 1000);
});

promise
	.then(function(first) {
	  console.log('first', first);

		return **2**;
	}).then(function(**second**) {
		console.log(second);
	});

// 출력 결과
// first 1
// 2
```

- promise 반환

```jsx
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1);
    }, 1000);
});

promise
	.then(function(first) {
	  console.log('first', first);

		return 2;
	})
	.then(function(second) {
		console.log('second', second);

		return new Promise(function(resolve, reject) {
        setTimeout(function() {
            **resolve(3);**
        }, 1000);
    });
	})
	.then(**function(third) {
		console.log('third', third);
	}**);

// 출력 결과
// first 1
// second 2
// third 3
```

<br/>

## Promise.all()

- 여러 프로미스를 모두 성공시킨 후, 완료 로직을 실행하고 싶은 경우 사용

  ```jsx
  Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 9000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
  ]).then(function (value) {
    console.log(value);
  });
  ```

  - 9초 뒤에 value의 값이 [1, 2, 3] 으로 들어옵니다.

  ```jsx
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
  ];

  // map every url to the promise of the fetch
  let requests = urls.map((url) => fetch(url));

  // Promise.all waits until all jobs are resolved
  Promise.all(requests).then((responses) =>
    responses.forEach((response) => alert(`${response.url}: ${response.status}`)),
  );
  ```

<br/>

## async & await

- async function은 ES8에 도입되었으며, 비동기 함수를 선언합니다.
- async function은 promise를 반환하기 때문에 Promise를 잘 알아야 한다.
- await를 쓰려면 async 함수 안에 꼭 있어야 한다.

<br/>

## Quiz

```jsx
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(1);
    resolve(2);
    console.log(3);
    resolve(4);
  }, 1000);
});

promise.then(function (data) {
  console.log(data);
});

// 출력 결과
// 1
// 3
// 2
```

<br/>

```jsx
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(function () {
    resolve(2);
  }, 1000);
});

promise.then(function (data) {
  console.log(data);
});

// 출력 결과
// 1
```

<br/>

```jsx
$.get('https://api.test.com/proudcts', function (response) {
  var firstProductId = response.products[0].id;

  $.get('https://api.test.com/proudct/comments?id=' + firstProductId, function (response) {
    var firstCommentId = response.comments[0].id;

    $.get('https://api.test.com/proudct/comment/likes?id=' + firstCommentId, function (response) {
      var likes = response.likes;
      var likesCount = likes.length;

      // 첫번째 상품의 -> 첫번째 후기의 좋아요 수 화면에 적용!
    });
  });
});

// Promise 형태로 바꾸기
```

<br/>

```jsx
axios('https://api.test.com/proudcts')
  .then(function (response) {
    let firstProductId = response.products[0].id;

    return axios('https://api.test.com/proudct/comments?id=' + firstProductId);
  })
  .then(function (response) {
    let firstCommentId = response.comments[0].id;

    return axios('https://api.test.com/proudct/comment/likes?id=' + firstCommentId);
  })
  .then(function (response) {
    let likes = response.likes;
    let likesCount = likes.length;
  });

// 답
```

<br/>

```jsx
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

job()
  .then(function () {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function () {
    console.log(3);
  })
  .catch(function () {
    console.log(4);
  })
  .then(function () {
    console.log(5);
  });

// 출력 결과
// 4
// 5
```

<br/>

```jsx
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

job(true)
  .then(function (data) {
    console.log(data, 1);

    return job(false);
  })
  .catch(function (error) {
    console.log(error, 2);

    return 'Error caught';
  })
  .then(function (data) {
    console.log(data, 3);

    return job(true);
  })
  .catch(function (error) {
    console.log(error, 4);
  });

// 출력 결과
// sucess
// error
// Error caught
```

<br/>

## 마무리

- 사실 IE에서 사용할 수 없다. 😫

![ciu-async-await](https://user-images.githubusercontent.com/67889389/159532061-dd1f354a-8614-4f37-9a52-dad1a3538f83.png)

![ciu-promise](https://user-images.githubusercontent.com/67889389/159532074-b533a965-9147-490f-b501-1094f0ec7d0f.png)

```toc

```
