import './App.css';
import { useState } from 'react';
import photos from './modules/photos';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  //STATE && FUNC
  const [count, setCount] =  useState(0)
  const [cvurrentImage, setCurrentImage] = useState(photos[0])
  
  useState(photos[count])
  
  return (
    <div className="App">
      <h1>City Directory</h1>
      <Card />
      <div className='btnContainer'>
          <Button />
          <Button />
      </div>
    </div>
  );
}

export default App;
