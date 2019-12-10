/*
ref을 쓰려면 아래 3가지가 필요함
근데 class인지 아니면 함수인지 잘 확인해서 this을 쓸 지 않쓸지 할 것 배분 할 것

const input = React.createRef();  
const onClick = () => input.current.focus();
ref={input}

*/

import React, { useState } from 'react';

const IterationSample = () => {
  const input = React.createRef();
  const [names, setNames] = useState(
    [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' }

    ])
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
    input.current.focus();
  }

  // 엔터 눌렀을 때 onClick() 함수 부르기
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }


  return (
    <>
      <input ref={input} value={inputText} onChange={onChange} onKeyPress={onEnter} />
      <button onClick={onClick} >추가</button>
      <ul>{namesList}</ul>
    </>
  );
};


export default IterationSample;
