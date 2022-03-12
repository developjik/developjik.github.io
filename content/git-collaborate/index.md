---
emoji: 👨‍💻
title: Git 협업하기
date: '2022-01-29 00:00:00'
author: developjik
tags: git
categories: git
---

## Git 협업 준비하기

### `collaborator` 등록 및 초대하기

1. 협업 할 git repository에서 Settings 클릭하기
2. 왼쪽 메뉴에서 Collaborators 클릭하기
3. github password 입력하기
4. Manage access에서 Add people 클릭하기
5. 협업 할 동료 초대하기

> collaborator 등록하면 모든 협업 동료들은 `pull` & `push` 권한을 획득한다.

<br/>

### `collaborator` 초대 확인하기

github에 등록한 메일 주소로 초대 메일 확인하여 `View Invitation` 클릭하기

<br/>

## Git 협업하기

### 1. `git clone` 하기

```markdown
git clone '.git 주소'
```

<br/>

### 2. `branch` 생성 & `Head` 이동

```markdown
git checkout -b <브랜치 명>
```

<br/>

### 3. 작업 후 git `add`, `commit`, `push` 하기

```markdown
git fetch main // 다른 협업자들 수정 내역 확인하기
git status
git add 파일 경로
git commit -m <commit message>
git push <repository name> <branch name>
git push origin [branch]
```

<br/>

### 4. `main branch`에 병합 or `pull request`

- `main branch`에 병합하기

  ```markdown
  git checkout main // main branch로 이동
  git merge <브랜치 명> // local repository에 main branch에 자신의 branch를 merge
  git push origin master // local main branch에서 github main branch로 push
  ```

  `local master branch`는 최신 코드 `push` & `pull` 용도로만 사용하는 것이 관리면에서 편하다.

  `branch` 이동할 때, 작업을 마무리하고 `commit`을 한 후 이동해야 한다. <br/>
  즉, `working directory`에 작업 내용이 있으면 `branch`이동이 안된다.

- `pull request`에 병합하기

1. github repository에 가서 pull requests 작성하고 팀원들에게 피드백 받기
2. 팀원들이 피드백 후 merge 하기

<br/>

### 5. 최신 버전 가져오기 + 자신의 작업본에 갱신하기

```markdown
git checkout master
git pull origin master

git checkout <브랜치 명>
git merge master
```

> 충돌이 발생할 수 있다.

<br/>

## 이전 버전으로 되돌아가는 방법

- `local repository`에서만`관리했다면`reset`,`revert` 명령어 중 선택해서 사용가능하다
- `push`를 한 경우 `revert` 명령어만 사용이 가능하다.
- `revert`는 버전을 되돌려도 `commit` 이력이 남아있다.

```html
git revert <commit번호 />
```

<br/>

## github `log` 보는 방법

```html
git log --online -10
```

```toc

```
