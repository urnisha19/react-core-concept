import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var name = "Mahfuz";
  var style = {
    color: 'pink',
    backgroundColor: "purple"
  }
  const nayoks = ["Sakib", "Ononto", "Hero", "Bappi"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60" },
    { name: "PdfReader", price: "$34.99" }];
  // const productNames = products.map(product => product)
  // console.log(productNames);

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
          rel="noopener noreferrer"> Learn React</a>

        <Counter> </Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product} ></Product>)
        }

        <Person name="Rubel"></Person>
        <Person name="Mashrafi"></Person>
        <Person name="Tamim"></Person>
        <Person name="Mustafiz"></Person>
        <Person name={nayoks[0]}></Person>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

//component
function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "5px",
    width: "400px"
  }
  //console.log(props)
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "rebeccapurple",
    height: "200px",
    width: "200px",
    float: "left"
  }
  //const{name,price}=props.product;
  //console.log(name,price)
  return (
    <div style={productStyle}>
      {/* <h3>{name}</h3>
      <h5>{price}</h5> */}
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease} >Increase</button>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}
export default App;
