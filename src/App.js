import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Mahfuz";

  var style = {
    color: 'pink',
    backgroundColor: "purple"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Heading:{2 + 3 * 65}-{name}</h1>
        <p style={style}>My first paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

//component
function Person() {
  return (
    <div style={{border:"2px solid yellow", margin: "10px"}}>
      <h1>Name: Sakib</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
