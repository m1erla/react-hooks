# Use Memoization hooks on react 

`
1. React.memo
2. useMemo
3. useCallback

`

## React.memo
### you can use this hooks if components don't need to render.
```sh
import React from 'react';

function Header() {
 <div>
  <h1> Header </h1>
 </div>
}

export default React.memo(Header);
```
## useMemo
### 
```sh
import { useMemo } from "react";

function App() {

 const data = useMemo(() => {
 return {name: "Furkan"}
}, [])

return (
  <div className="App">
  <Header data= {data]/>
  <button onClick=({data})> Click </button>
  </div>
)
}

export default App;
```

## useCallback
### 
```sh
import {useState, useCallback} from 'react';

function App() {
 const [number, setNumber] = useState(0);
 const [text, setText] => useState("");

 const increment = useCallback(() => {
 setNumber((prevState) => prevState + 1)
}, []);

return (
  <div>
  <Header increment= {increment}/>
  <h1 {number} </h1>
  <hr />
  <input value={text} onChange={({ target }) => setText(target.value)} />
  </div>
)
}

export default App;
```
