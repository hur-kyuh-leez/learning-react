import React, { useState } from 'react';
import _ from 'lodash';

const IterationSample = () => {
  const input = React.createRef();
  const [names, setNames] = useState(
    [
      { id: 1, text: 'John' },
      { id: 2, text: 'Jake' },
      { id: 3, text: 'JJ' },
      { id: 4, text: 'Jesus' }

    ])
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  const namesList = names.map(name => <li key={name.id} onDoubleClick={_.partial(onRemove, name.id)} > {name.text}</ li>);

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

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  }


  return (
    <>
      <input ref={input} value={inputText} onChange={onChange} onKeyPress={onEnter} />
      <button onClick={onClick} >Add</button>
      <ul>{namesList}</ul>
    </>
  );
};


export default IterationSample;