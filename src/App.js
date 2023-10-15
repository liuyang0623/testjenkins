import { forwardRef, useImperativeHandle, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

const ChildComp = forwardRef((props, ref) => {
  // const sayHello = () => {
  //   console.log('hello')
  // }
  useImperativeHandle(ref, () => ({
    sayHello() {
      console.log('hello')
    }
  }))
  return (
    <div>子组件</div>
  )
})

function App() {
  const childRef = useRef(null)
  const clickFunc = () => {
    childRef.current.sayHello()
  }
  return (
    <div className="App">
      <ChildComp ref={childRef} />
      <button onClick={clickFunc}>sayHello</button>
    </div>
  );
}

export default App;
