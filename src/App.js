import { useRef } from 'react';
import './App.css';

function App() {
  let inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value)
    console.log(inputRef.current.focus())
    console.log(inputRef.current.style.color = "red")
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
