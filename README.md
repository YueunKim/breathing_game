![header](https://capsule-render.vercel.app/api?type=waving&color=0:2C62EA,100:FFFFFF)

<div align="center">
<img width="293" alt="Untitled" src="https://github.com/YueunKim/breathing_game/assets/65431814/c37a76c2-4f0d-40f7-aba3-aeb6171b93a4" width="500" height="50" > 
</div>  
<br>

## 📝 프로젝트 배경
- 프로젝트명 : Oxygen Rush
- 개발 기간 : 2023.08.28 ~
- 개발 인원 : 1명
- URL : https://breathing-game-git-main-yueunkim.vercel.app/
- '일단 오늘은 나한테 잘합시다'라는 책에서 게임으로 만들어보면 재밌겠다 싶은 그림이 있었습니다.
   이를 실행에 옮겨 토이 프로젝트로 만든 미니 게임 입니다.
  <details>
    <summary>아이디어 얻은 부분</summary>
    <div markdown="1">
    
    <img src="https://github.com/YueunKim/breathing_game/assets/65431814/d190934d-33b9-4ec8-aae1-4d70e32b85fb" width="400" height="580" />
    
    </div>
    </details>
<br/>


## 🛠 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) 

### Development

<img alt=""  src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white"/> 

### Depoloyment
<img alt=""  src ="https://img.shields.io/badge/vercel-000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>

<br/>

## 📖 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js](https://nodejs.org/ko/download)
- [npm](https://www.npmjs.com/package/package)

### Installation

``` bash
$ git clone https://github.com/YueunKim/breathing_game.git
$ cd breathing_game
$ npm i
$ npm start
```

<br/>



## 🙋‍♂️ 주요 기능
### 랜덤으로 사람 등장
- 총 10명의 사람 중 5명의 사람이 배경으로 서있습니다.
- 나머지 5명의 사람이 3초에 한명씩 랜덤으로 등장합니다.

### 산소 게이지
- 5명의 사람이 등장하고 5초 후에 각각의 산소게이지가 나타납니다.
- 산소게이지는 100부터 0까지 1초에 20씩 줄어듭니다.
- 사람을 클릭하면 목이 길어지고 산소게이지가 100이 됩니다.
- 목이 길어진 사람은 3초 후 목이 원래대로 돌아오고 산소게이지는 다시 줄어듭니다.
-  산소게이지가 0이 되기 전까지 클릭하지 못했다면 더 이상 그 사람은 클릭할 수 없습니다.
-  클릭할 수 없게 된 사람이 3명 이상이 되면 게임이 끝납니다.

### 점수
- 산소게이지가 0이 되기 전까지 사람을 클릭하면 점수가 10점씩 올라갑니다.
- 게임이 끝나면 현재까지 얻은 점수를 보여줍니다.

<br/>

## 🔎 배운 점

- 랜덤한 인덱스와 위치, 점수 계산과 게임 종료 조건 등의 로직을 구현하며 Array.from, filter, map 등의 배열 메소드와 setTimeout, clearInterval 등의 비동기 함수에 활용에 대해 깊이 이해할 수 있었습니다.
- styled-components를 독학하고 프로젝트에 적용하며 동적 스타일링 경험을 쌓았습니다.
- 게임 종료나 산소 레벨에 따라 다르게 렌더링하는 방법을 배울 수 있습니다.
- 컴포넌트 재사용성에 대해 고민하며 $position, $isBackground 등의 사용자 정의 CSS 프로퍼티를 사용했습니다.

<br>



## 💡 저작권

- 사람 캐릭터 출처 : https://blush.design/collections/open-peeps/open-peeps
- 위의 사이트에서 캐릭터를 생성하고 포토샵으로 목적에 맞게 커스터마이징하였습니다.
- 지하철 배경 이미지는 무료 저작권 사이트에서 다운받은 이미지입니다.

![footer](https://capsule-render.vercel.app/api?section=footer&type=waving&color=0:FFFFFF,100:2C62EA)
