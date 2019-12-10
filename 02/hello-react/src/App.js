import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {/* 주석 중가로로 하네 신기하네 */}

      {/* 주석은 이렇게 작성합니다.  */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성 할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input
        classnName="nothing" // 아 이렇게 하는구 클래스안에다가 이렇게 커맨트 달을수 있음! <> 를 여러줄로 하면
      >
      </input>
    </>
  );
}

export default App;
