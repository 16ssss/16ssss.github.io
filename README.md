# 성격 유형 검사 페이지입니다!

사용 스택: react, react-thunk, react-redux, redux, redux-persist, react-router-dom, mui

- 검사 결과에 따라 로딩화면이 다르게 표시합니다. (해당 캐릭터로 점점 변십합니다.)
- 한번 검사한 뒤엔 이름, 예상MBTI, 응답내용을 변경할 수 없습니다. (이동시 초기화하여 재검사 진행)
- Fractal 구조를 이용하여 구현하였습니다.
  - [프랙탈 구조란?](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af/)
- 미들웨어인 react-thunk를 사용하여 API 통신(비동기) 처리를 하였습니다.
- 새로고침하여도 state가 초기화되지 않도록 redux-persist를 사용하였습니다.
- react-router-dom을 사용하여 페이징 처리를 하였습니다.
  - 그에 따라 정적페이지만 제공하던 github pages에서 구동시키기 위하여 index.html, 404.html에 추가적인 처리를 하였습니다.
