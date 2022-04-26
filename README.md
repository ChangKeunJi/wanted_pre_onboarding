# 원티드 프리온보딩 코스

## 데모 웹사이트 보러가기:  https://changkeunji.github.io/wanted_pre_onboarding/

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

### 특징 

- 여러 컴포넌트를 탭을 이용하여 한 페이지 내에서 모두 볼 수 있도록 만들었습니다. 

- 토글에 다크모드 기능을 적용하였습니다. 다크모드 상태는 context api로 관리합니다. 

- 상수 데이터와 공통 색상 스타일을 파일로 관리하여 유지보수에 용이하게 만들었습니다. 


## 컴포넌트 설명


### 1. 토글 
![toggle](https://user-images.githubusercontent.com/46767604/165217805-9f056a65-6012-4f62-91ad-6819cb4d7b94.gif)

#### 🟢 설명

- input의 checkbox 타입을 사용하여 checkbox의 checked 상태 여부에 따라 상태가 변합니다.

- CSS의 가상요소를 사용하여 동그란 모양의 공을 만들어 공을 클릭하면 input의 체크 여부를 변경합니다. 

- input 태그의 theme 변수와 onToggleTheme은 Context API에서 가져온 전역 상태와 전역 상태변경 함수입니다. 

- 다크모드로 설정되면 각 컴포넌트 최상위 태그에 '--dark'가 추가되며 그에따라 스타일이 변합니다. 

```
<label className="toggle">
  <input type="checkbox" checked={theme} onChange={onToggleTheme} />
  <span className="toggle-slider">
    <img
      className="toggle-icon toggle-slider__dark"
      src={DarkIcon}
      alt="darkicon"
    />
    <img
      className="toggle-icon toggle-slider__light"
      src={LightIcon}
      alt="lighticon"
    />
  </span>
</label>
```

### 2. 탭
![slider](https://user-images.githubusercontent.com/46767604/165219663-bf6ad7bb-2cc6-4eed-9fe8-d1636494ae20.gif)

#### 🟢 설명

- 현재 선택된 탭은 '--active' 클래스를 가지도록 설정하였습니다. 

- 현재 탭을 나타내는 굵은 선은 빈 태그 만든 뒤 CSS로 스타일링 해서 만들었습니다. 

- CSS에서 '--active' 클래스 소유 여부와 몇번 째 자식인지 여부에 따라서 슬라이드 애니메이션이 움직입니다. 

```
// 선택된 탭에는 '--active' 클래스가 추가됨.

{tabList.map((tab) => {
  return (
    <li
      key={tab.id}
      className={classnames("tabs__wrap__item", {
        "--active": curTab === tab.id,
      })}
      onClick={onClick(tab)}
    >
      {tab.label}
    </li>
  );
})}

// 스타일에서 '--acive' 클래스 소유 여부에 따라 스타일 변경

&:first-child.--active ~ .tabs__wrap__slider {
  transform: translateX(0) scaleX(0.333);
}
&:nth-child(2).--active ~ .tabs__wrap__slider {
  transform: translateX(33.333%) scaleX(0.333);
}
&:nth-child(3).--active ~ .tabs__wrap__slider {
  transform: translateX(calc(33.333% * 2)) scaleX(0.333);
}

```

### 3. 슬라이더 
![tabs](https://user-images.githubusercontent.com/46767604/165219627-ddba9fe7-b1f0-45a0-a87c-24308be2c1be.gif)

#### 🟢 설명

- input의 range 타입을 이용해 구현했습니다. input의 onChange를 이용해 마우스로 움직일 때마다 값이 변경됩니다. 

- 아래 퍼센테이지를 클릭하면 해당 태그가 가진 data-set의 값에 따라서 value 값이 변합니다. 

```

const theme = useTheme();

const [value, setValue] = useState(0);

// 슬라이더를 움직일 때마다 input value 업데이트.
const handleSlider = useCallback((e) => {
  setValue(e.target.value);
}, []);

// 퍼센테이지 클릭할 때 타겟의 숫자만큼 value 업데이트.
const onClickTarget = useCallback((e) => {
  setValue(e.target.dataset.num);
}, []);

<div className={classnames("tabs", { "--dark": theme })}>
  <ul className="tabs__wrap">
    {tabList.map((tab) => {
      return (
        <li
          key={tab.id}
          className={classnames("tabs__wrap__item", {
            "--active": curTab === tab.id,
          })}
          onClick={onClick(tab)}
        >
          {tab.label}
        </li>
      );
    })}
    <li className="tabs__wrap__slider"></li>
  </ul>
</div>
```

### 4. 인풋 
![input](https://user-images.githubusercontent.com/46767604/165217946-ad2ecdfe-0fac-4772-9e7d-87ea991d1063.gif)

#### 🟢 설명

- Regex를 이용해 email이 유효한지 검사합니다. 유효하지 않은 상태로 포커스를 잃으면 아래 경고문고가 나옵니다. 

- 이메일이 유효하다면 인풋 아이콘이 색상이 있는 다른 아이콘으로 렌더링 됩니다. 

- 비밀번호 인풋의 아이콘을 클릭하면 input의 type이 password에서 text로 변하면서 눈에 보이게 됩니다. 

- 동시에 아이콘도 다른 아이콘으로 렌더링 됩니다. 

```

// 이메일 인풋
<input
  value={emailValue}
  onChange={onChangeEmail}
  className="icon input__email__input"
  id="email"
  type="email"
  onBlur={() => setEmailFocused(false)}
  onFocus={() => setEmailFocused(true)}
/>

// 비밀번호 인풋
<input
  value={passwordValue}
  onChange={onChangePassword}
  className="input__password__input"
  id="password"
  type="password"
  ref={passwordInputRef}
/>

// 비밀번호 인풋 타입 변경
const onClickPasswordEye = useCallback(
  (e) => {
    setWatchPassword((prev) => !prev);

    // input 태그의 타입을 변경.
    passwordInputRef.current.type = watchPassword ? "password" : "text";
  },
  [watchPassword, passwordInputRef]
);

// 경고문자 렌더링
const renderWarning = useCallback(() => {
  if (!emailValidate) {
    return (
      <p className="input__email__warning">
        {emailValue.length > 0 && "올바르지 않은 Email 입니다."}
      </p>
    );
  }
}, [emailValidate, emailValue]);

```


### 5. 드랍다운
![dropdown](https://user-images.githubusercontent.com/46767604/165217982-25e34a2c-9b95-484a-b6b6-0891e1ddac84.gif)

#### 🟢 설명

- 인풋 창을 클릭하면 드랍다운이 보여주며, 아이템 중 하나를 선택하면 드랍다운이 닫히며 해당 아이템 값으로 인풋창이 변경됩니다. 

- 드랍다운 내에서 검색이 가능하며 검색과 일치하는 아이템만 나타납니다. 

```
// 드랍다운 인풋창이 업데이트 될 때마다 드랍다운 리스트를 업데이트 
useEffect(() => {
  let filteredList = DROPDOWN_ITEM.filter((item) =>
    item.value.toLowerCase().includes(modalInput.toLowerCase())
  );

  setItemList(filteredList);
}, [modalInput]);

```

### 다크모드 
![darkmode](https://user-images.githubusercontent.com/46767604/165224854-53e62060-e5c0-4112-8069-755e5df446a3.gif)

과제내에 포함되지 않았지만, 토글 컴포넌트를 만들면서 의미있는 작업을 수행했으면 해서 만들었습니다. 

#### 🟢 설명

- context api를 사용하여 토글 컴포넌트에서 작동할 때마다 다크모드 전역 상태가 변경됩니다. 

- 다크모드가 true일 때 각 컴포넌트 내 최상위 태그에 '--dark'가 추가되며, 그에따라 스타일이 변합니다. 

- 모든 색상 스타일은 variable.scss에서 작성된 변수를 사용하여 일관성있게 그리고 유지보수 하기 쉽게 작성했습니다. 













