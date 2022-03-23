---
emoji: 📄
title: Gatsby 테마로 GitHub Blog 만들기
date: '2022-01-01 00:00:00'
author: developjik
tags: blog
categories: blog
---

## 1. Repository 생성하기

- 1.  GitHub에 로그인 후 우측 상단에 있는 New Repository 버튼을 클릭하면 repository 생성하기
      ![github-blog](https://user-images.githubusercontent.com/67889389/159699223-28410ef7-1dae-4ff7-ab69-e5d4e38fab28.png)
      <br/>
- 2. Import a repository 버튼을 클릭합니다
     ![github-blog-1](https://user-images.githubusercontent.com/67889389/159700888-15a8f37e-4383-40a1-b65e-5d6363042296.png)

     <br/>

- 3.  생성할 respository 정보 입력하기
      ![github-blog-2](https://user-images.githubusercontent.com/67889389/159700242-89447f21-6a26-4bca-89f0-92df369efbcf.png)

      - 1. Your old repository's clone URL에 사용할 gatsby 테마가 있는 repository 주소를 넣기
           > 제 블로그 테마는 [https://github.com/zoomKoding/zoomkoding.com](https://github.com/zoomKoding/zoomkoding.com)입니다.
      - 2.  Repository Name을 [GitHubID].github.io로 설정하기
      - 3.  Begin Import 버튼을 클릭하기

    <br/>

- 4. 최종 repository 생성 결과
     ![github-blog-3](https://user-images.githubusercontent.com/67889389/159700255-e2a1c451-7392-4bcd-9f22-7ed1a1872fa3.png)

## 2. Repository 가져오기 및 블로그 배포 준비

- 1. Repository에서 초록색 Code 버튼을 클릭하면 링크가 나오게 되는데, 이 링크를 복사하기
     ![github-blog-4](https://user-images.githubusercontent.com/67889389/159700267-dcb76522-f59a-46c0-9e0f-d89b4753e044.png)

  <br/>

- 2. 아래 명령어를 수행하여 블로그를 다운로드합니다.

  ```bash
  cd [Repository를 저장할 폴더]
  git clone [복사한 주소]
  ```

  <br/>

- 3. Blog 설치하기

  ```bash
  cd [Repository 주소]
  npm install
  ```

  <br/>

- 4. Blog 배포 준비하기

  ```bash
  npm install gh-pages --save-dev
  ```

  > Gatsby 테마를 GitHub 페이지에 올리기 위해 gh-pages라는 패키지를 설치해야 합니다.

  <br/>

- 5. package.json에 다음을 추가하기

  ```json
  {
    "scripts": {
      "deploy": "gatsby build && gh-pages -d public" // 추가
    }
  }
  ```

<br/>

## 3. Blog 배포하기

- 1. github page에 배포용 build 파일 만들기

  ```bash
  npm run deploy
  ```

  ![github-blog-5](https://user-images.githubusercontent.com/67889389/159700285-208d7c3b-8630-43e6-a8e6-86d0be8d28a9.png)

<br/>

- 2. git add, commit, push 하기

  ```git
  git add .
  git commit -m "commit message"
  git push origin master
  ```

<br/>

- 3.  Repository Source Branch 변경하기

  - 1. Repository에 있는 Settings를 클릭후 죄측 메뉴의 Pages를 클릭하기
       ![github-blog-6](https://user-images.githubusercontent.com/67889389/159700291-074db5f6-0495-4f1b-b2a6-6b774502c06a.png)
       <br/>
  - 2. 여기서 Source에 있는 Branch를 master(main)에서 gh-pages로 변경한 후에 저장합니다.
       ![github-blog-7](https://user-images.githubusercontent.com/67889389/159700309-dea85d71-ab4e-420b-a23b-e84c1bc65fab.png)
       <br/>
  - 3. 배포된 페이지 확인하기 => [GitHubID].github.io에 접근하기
       ![github-blog-8](https://user-images.githubusercontent.com/67889389/159703750-bb282bac-b03c-4515-ba12-ed2e01cbbae6.png)

       <br/>

<br/>

```toc

```
