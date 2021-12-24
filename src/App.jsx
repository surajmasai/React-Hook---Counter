// import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  //const [data, setData]
  // const [age, setAge] = useState(10);

  const changeCount = (value) => {

    // if (count > 10 && count > 0) {

      setCount(count + value)
    // }
  
  };

  const double = () => {

 setCount(count * 2)

  }




  //conditional rendering
  // if (count > 10) {
  //    return <div>Counter Reached max value</div>
  // }
 

  return (
    <div className="App">
      <h3>Counter: {count}</h3>

      <div>
      <button onClick={ () => changeCount(1)}>add</button>
        <button onClick={ () => changeCount(-1)}>sub</button>
        <button onClick={ () => double(2)}>double</button>

        {/* show counter is even or odd  */}
        
        <div>
          Counter is {count % 2 === 0 ? "Even": "Odd"}
        </div>

        </div>
    </div>
  );
}

export default App;




