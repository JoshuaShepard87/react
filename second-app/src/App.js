import logo from './logo.svg';
import './App.css';
import Cats from "./components/cats";
let App = () => {
  return (
  <div>
    <img src={logo} className={'image-resize'} alt=""/>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <Cats />
  </div>

  );
}

export default App;
