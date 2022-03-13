---
emoji: 👨‍💻
title: Git Forking Workflow 협업하기
date: '2022-02-05 00:00:00'
author: developjik
tags: git
categories: git
---

## `Forking Workflow 협업`이란 ?

- 팀장의 저장소를 `Fork`해서 팀원마다 각자 저장소를 가지고 프로젝트를 진행하는 방식이다.
- 팀원의 작업 내용은 `Pull requests`를 통해 팀장의 확인 후 반영된다.
- 팀장 저장소의 권한은 `팀장`만 가지고 있으면서 다른 사람의 `커밋`을 프로젝트에 적용이 가능하다.
- 팀장이 코드를 확인하고 `merge`하기 때문에 안전하게 협업이 가능하다.
- 오픈소스프로젝트에서 많이 사용하는 방식이다.

<br/>

## `Forking Workflow 협업`하기

### 1. `git fork` 하기

![fork](fork.png)

#### `fork란?`

타인 소유의(또는 공동 소유의) 프로젝트 소스와 commit 내역, branch 등 원본 Remote Repository의 구조를 그대로 복사하여 내 소유의 새로운 Remote Repository로 생성하는 기능이다.<br/>
Fork한 저장소는 내 소유이므로 내 마음대로 Source를 수정할 수 있다. 이때 Fork 저장소의 내용을 아무리 수정해도 원본 저장소엔 영향을 주지 않는다.따라서 Fork 저장소를 이용하면 Git 기능을 마음껏 활용하여 소스를 수정해볼 수 있으면서도 원본 Source에 대한 무분별한 수정을 막을 수 있다. 그렇기 때문에 Fork 기능을 사용한다.<br/>
이후 Fork 저장소의 수정 내역을 원본 Source로 업데이트 하는 과정(Pull Request)을 거쳐야만 원본 Source에 수정 내역들(commits)이 반영된다.

<br/>

### 2. `git clone` 하기

```markdown
git clone <Forked Repository 주소>
```

#### `clone?`

Clone은 Remote Repository에 있는 프로젝트 소스와 Commit History 등을 Local Repository로 그대로 다운로드하는 기능이다.<br/>
이후 개발자는 Clone된 Local Repository의 내용을 수정한 후에 Commit & Push 해서 Remote Repository의 Commit History를 Local Repository에서 commit을 추가한 Commit History와 동일해지도록 업데이트 한다. 그런 의미에서 ‘clone(클론, 복제)’라 부르는 것이다.

#### `fork` vs `clone`

프로젝트의 소스와 commit 히스토리 등을 복사해온다는 점에서 Fork와 Clone은 유사하게 보일 수 있다.<br/>
그러나 Fork는 **원본** Remote Repository를 복사해서 내 소유의 **새로운** Remote Repository를 생성하는 개념<br/>
Clone은 **Remote** Repository를 **Local** Repository로 복사하는 개념이므로 전혀 다르다.

<br/>

### 3. `Local Repository`에 원본(`Upstream`) Repository 등록하기

```markdown
git remote add <새로운 이름 or upstream> <원본 Remote Repository 주소>
```

> 대부분 upstream으로 이름을 설정한다

```markdown
git remote -v // remote 확인하기
```

<br/>

### 4. `branch` 생성 및 작업 위치 이동하기

```markdown
git checkout -b 브랜치이름
```

<div align="center">
or
</div>

```markdown
git branch [branch name]
git checkout [branch name]
```

<br/>

### 5. 개발 진행 후 `commit` & `push` 하기

```markdown
git fetch upstream // 다른 협업자들 수정 내역 확인하기
git status
git add 파일 경로
git commit -m <commit message>
git push <repository name> <branch name>
git push origin dev
```

<br/>

### 6. `compare & Pull request` ⇒ `Create Pull Request` 하기

<br/>

### 7. 중앙 원격 저장소에 `새로운 커밋`이 있다면 로컬 저장소에 `갱신`하기

```markdown
git pull upstream [branch name](main, dev 등)
git push origin [나의 branch]
```

<br/>

## `Gitflow workflow`

`Forking Workflow`는 일반적으로 `Gitflow Workflow`를 기반으로 하는 분기 모델을 따른다.

`Gitflow`를 간단히 설명하자면 `5가지의 브랜치`로 프로젝트를 관리하는 것이다.

![https://media.vlpt.us/images/hyowon_lee/post/de679003-7937-4969-8a7b-0014844637d6/image.png](https://media.vlpt.us/images/hyowon_lee/post/de679003-7937-4969-8a7b-0014844637d6/image.png)

`master` : 제품으로 출시될 수 있는 브랜치<br/>
`develop` : 다음 출시 버전을 개발하는 브랜치<br/>
`feature` : 기능을 개발하는 브랜치<br/>
`release` : 이번 출시 버전을 준비하는 브랜치<br/>
`hotfix` : 출시 버전에서 발생한 버그를 수정 하는 브랜치<br/>

```toc

```
