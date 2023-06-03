# movie-app
노마드 코더 ReactJS로 영화 웹 서비스 만들기 강의\
리액트로 만든, 라우터 기능이 포함된 movieApp

## 1. React Router

라우팅

사용자가 요청한 URL에 따라 알맞은 페이지는 보여주는것\
여러 페이지를 만들때 페이지 별로 컴포넌트들을 분리해가면서 관리할수 있음

링크를 눌러 다른 페이지로 이동할 때 html을 새로 요청하는 것이 아니라\
브라우저의 주소창의 값만 변경하고 기존의 웹을 유지하면서 라우팅 설정에 따라 다른 페이지를 보여줌

- `npm i react-router-dom`

- 페이지 컴포넌트를 만든 후 경로 설정

```
<Route path="/">
  <Home />
</Route>
```
- Link

a 태그를 클릭하여 페이지를 이동하면 브라우저에서 페이지를 새로 불러옴\
브라우저 주소의 경로만 바꾸기 위해 Link 컴포넌트 사용\
`<Link to="경로"></Link>`

- useParams

`import { useParams } from "react-router-dom";`

주소의 경로에 유동적인 값을 넣는 형태(여기선 특정 영화의 id값으로 데이터 조회)

```
<Route path="/movie/:id">
  <Detail />
</Route>
```

## 2. async, await

## 3. CSS module

css를 불러와서 사용할 때 클래스 이름을 고유한 값 형태로 자동으로 만들어져서\
컴포넌트 스타일 클래스 이름이 중첩되지 않음

클래스를 적용할 JSX 엘리먼트에 `className = {styles.[클래스 이름]}` 형태로 전달

## 4. deploy

`npm i gh-pages` 결과물을 github pages에 업로드 해줌

`npm run bulid` bulid 폴더 생성됨

package.json에\
`"homepage": "https://younszz.github.io/movie-app"` 추가\
// "homepage": "https://[github username].github.io/[github repository]"

package.json scripts에\
`"deploy": "gh-pages -d build"` 추가\
gh-pages 실행 - build 디렉토리 가져감

`"predeploy": "npm run build"`\
deploy 실행시 predeploy가 자동으로 먼저 실행되고 npm run build 실행

`npm run deploy` 수정 후 업데이트 시 github pages에 push됨  
