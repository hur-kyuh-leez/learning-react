import React, { useEffect } from 'react';
import useInputs from './useInputs';



const Info = () => {
  const [state, onChange] = useInputs({ //useInputs Custom Hook
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  useEffect(() => {
    console.log('렌더링 완료')
    console.log({
      name,
      nickname
    });
    return () => {
      console.log('clean up returns 바로 직전에 있던거');
      console.log(name);
    }
  }, [name]);  // ,[] 대괄호안에 attribute 추가하면 해당 attribute 업데이트 할 때만 useEffect가 사용됨
  return (
    <div>
      <div>
        <input placeholder="이름" name="name" value={name} onChange={onChange} />
        <input placeholder="별명" name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
