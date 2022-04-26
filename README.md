## 라이브 웹사이트 보러가기:  https://changkeunji.github.io/wanted_pre_onboarding/

## 기술 스택과 사용 이유

- React
: 과제 구현에 필수로 사용해야 하는 라이브러리

- Scss
: 중첩 기능과 변수 기능을 사용하기 위해서 CSS 대신 사용. 

- Context API
: 다크모드 상태를 전역에서 관리하기 위해서 사용. 

## 폴더구조

```

|--- index.js
|--- App.js
|
|--- components    : 각 컴포넌트 폴더 내 index.js와 style.scss 포함
|    |--- Container
|    |--- Dropdown  
|    |--- Input
|    |--- Slider  
|    |--- Tabs
|    |--- Toggle
|
|--- scss                 
|    |--- index.js
|    |--- reset.scss 
|    |--- variable.scss
|
|--- constants             : 각종 데이터들 
|    |--- DROPDOWN_MENU.js
|    |--- TAB__MENU.js
|    |--- SLIDER__TARGET.js
|
|--- utils                
|    |--- ThemeContext.js  : Context API
|    |--- useInput.js      : 커스텀 훅 
|    |--- validateEmail.js : 헬퍼 함수 
|
|--- assets
|    |--- icons : 사용된 모든 svg 아이콘들
|

```

## 컴포넌트 설명


### 1. 토글 
![toggle](https://user-images.githubusercontent.com/46767604/165217805-9f056a65-6012-4f62-91ad-6819cb4d7b94.gif)

* 구현 방법

input의 checkbox 타입과 CSS 가상요소를 사용하였습니다.

### 2. 탭
![slider](https://user-images.githubusercontent.com/46767604/165219663-bf6ad7bb-2cc6-4eed-9fe8-d1636494ae20.gif)

### 3. 슬라이더 
![tabs](https://user-images.githubusercontent.com/46767604/165219627-ddba9fe7-b1f0-45a0-a87c-24308be2c1be.gif)

### 4. 인풋 
![input](https://user-images.githubusercontent.com/46767604/165217946-ad2ecdfe-0fac-4772-9e7d-87ea991d1063.gif)

### 5. 드랍다운
![dropdown](https://user-images.githubusercontent.com/46767604/165217982-25e34a2c-9b95-484a-b6b6-0891e1ddac84.gif)














