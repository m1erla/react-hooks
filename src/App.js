
import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const[number, setNumber]= useState(0);
  const[text, setText] = useState("")

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])


  // const data = useMemo(() => {
  //   return calculating(number);
  // }, [number])

  // const data = calculating();


  return (
    <div className="App">
      <Header increment= {increment}/>
      <h1>{number}
       <hr />
      </h1>
      <input value={text} onChange={({target}) => setText(target.value)} />
      <br/>
   
    </div>
  );
}

// function calculating(number) {
//   console.log("Calculating...");
//   for(let i = 0; i < 100000; i++){}
//   console.log("Calculate completed!");

//   return {name: "Emma", number}
// }

export default App;
