import { forwardRef, useImperativeHandle, useRef } from 'react'
import './App.css';

const ChildComp = forwardRef((props, ref) => {
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
