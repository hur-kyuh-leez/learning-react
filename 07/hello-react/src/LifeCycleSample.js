import React, { Component } from 'react';
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };
  myRef = null; // ref를 설정할 부분
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      console.log(prevProps.color, this.props.color, this.myRef.style.color)
      // 굳이 이렇게 칼러를 받아야 하나? prevPros.color가 있지 않나? 샾형식 말로 rgb() 형식으로 받고 싶어서?
      return this.myRef.style.color;

    }
    return null;
  }
  // getSnapshotBeforeUpdate에서 return이 있으면 여기서 snapshot 값이다.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {/* <h1 style={style}> */}
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
