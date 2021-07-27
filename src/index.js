import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './components/NotesApp'




// const App = (props) => {

// const [count, setCount] = useState(props.count);
// const [text, setText] = useState('');

//   return <div>
// <h1>The  {text || 'Count' } is {count}</h1>

// <button onClick= {() => setCount(count + 1)}>+1</button>
// <button onClick= {() => setCount(count - 1)}>-1</button>
// <button onClick= {() => setCount( props.count  )}>Reset</button>
// <input type="text"   value = {text}  onChange = {(e) => setText(e.target.value)} />

//   </div>
// }


// App.defaultProps = {
//   count : 0
// }

// <App {count= 2} />

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);


