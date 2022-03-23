---
emoji: 👨‍💻
title: Git 명령어 정리
date: '2022-02-12 00:00:00'
author: developjik
tags: git git명령어 명령어
categories: git
---

## Git 기본 구조

코드는 세 단계에 걸쳐 저장 : `1.스테이징` ⇒ `2. 커밋` ⇒ `3. 원격저장소`

1. `git add {파일명}` 으로 파일을 `스테이징` 상태에 넣는다.
2. `git commit -m {"commit content"}` 으로 `스테이징` 상태에 있는 모든 변경사항을 `커밋`한다. 여기까지가 `로컬`에서 작업이다.
3. `git push origin master` ⇒ local repository의 내용을 remote repository로 업로드한다

<br/>

## Git 주요 명령어

### `git init`

- 저장소 생성

### `git clone {url}`

- 원격 저장소로부터 복제, zip 파일로 받으면 .git 폴더가 없다는 것이 차이점

### `git status`

- 변경 사항 체크

### `git add {파일명}`

- working directory의 변경된 작업 파일을 staging area로 추가

### `git add *`

- 변경된 모든 파일 스테이징

### `git commit -m “{변경 내용}”`

- staging area의 내용을 local repository에 확정

### `git push origin master(main)`

- local repository의 내용을 remote repository로 업로드

### `git remote add origin {원격서버주소}`

- 원격저장소 추가

### `git pull [remote명] [branch명]`

- Remote Repo branch에서 데이터를 가져와 자동으로 local branch와 merge

<br/>

## Commit 관련 Git 명령어

### 커밋 합치기

- `git rebase -i HEAD~4 // 최신 4개의 커밋을 하나로 합치기`

### 커밋 메세지 수정

- `git commit --amend // 마지막 커밋메세지 수정(ref)`

### 간단한 commit방법

- `git add {변경한 파일병}`
- `git commit -m “{변경 내용}"`

### 커밋 이력 확인

- `git log // 모든 커밋로그 확인`
- `git log -3 // 최근 3개 커밋로그 확인`
- `git log --pretty=oneline // 각 커밋을 한 줄로 표시`
- `git reflog // reset 혹은 rebase로 없어진 과거의 커밋 이력 확인`

### 커밋 취소

- `git reset HEAD^ // 마지막 커밋 삭제`
- `git reset --hard HEAD // 마지막 커밋 상태로 되돌림`
- `git reset HEAD * // 스테이징을 언스테이징으로 변경, ref`

<br/>

## Branch 관련 Git 명령어

### 브랜치 목록

- `git branch // 로컬`
- `git branch -r // 리모트`
- `git branch -a // 로컬, 리모트 포함된 모든 브랜치 보기`

### 브랜치 생성

- `git branch new master // master -> new 브랜치 생성`

### 브랜치 삭제

- `git branch -D {삭제할 브랜치 명} // local`
- `git push origin :{the_remote_branch} // remote`

### 빈 브랜치 생성

- `git checkout --orphan {새로운 브랜치 명}`
- `git commit -a // 커밋해야 새로운 브랜치 생성됨`
- `git checkout -b new-branch // 브랜치 생성과 동시에 체크아웃`

### 리모트 브랜치 가져오기

- `$ git checkout -t origin/{가져올 브랜치명} // ref`

### 브랜치 이름 변경

- `$ git branch -m {new name} // ref`

<br/>

## 기타 Git 명령어

### 파일 삭제

- `git rm --cached --ignore-unmatch [삭제할 파일명]`

### 리모트 주소 추가하여 로컬에 싱크하기

1. `git remote add upstream {리모트 주소}`

2. `git pull upstream {브랜치명}`

### 최적화

- `git gc`
- `git gc --aggressive`

### 원격 저장소 정보 확인

- `git remote -v`

### 원격 저장소 살펴보기

- `git remote show <remote명>`

### 원격 저장소 이름 변경

- `git remote rename <old_name> <new_name>`

### 원격 저장소 삭제

- `git remote rm <remote-name>`

### 원격 저장소의 최신 로컬 저장소로 가져오기

- `git fetch [remote명]`

### 로컬 저장소에서 생성한 tag를 원격 저장소에 추가하기

- `git push [remote명] [tag명]`

### 로컬 저장소에 존재하는 tag중에 원격 저장소에 존재하지 않는 모든 tag들을 push하기

- `git push [remote명] --tags`

### from branch를 to branch와 merge

- `git merge <from_branch> <to_branch>`

### master branch가 가리키는 Tree 개체의 내용을 출력하기

- `git cat-file -p master^{tree}`

```toc

```
