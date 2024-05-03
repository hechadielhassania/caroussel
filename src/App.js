import './App.css';
import { useState } from 'react';
import photos from './modules/photos';
import Card from './components/Card';
import Button from './components/Button';
import { symbols } from './modules/symbols';

function App() {
  //STATE && FUNC
  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(photos[0]);
  
  const changePic = () => {
    setCount(count + 1);
    console.log("Current Count : ", count);
    console.log("Current Img : ", currentImage);
    setCurrentImage(photos[count]);
  };

  const reversePic = () => {
    setCount(count - 1);
    console.log("Current Count : ", count);
    console.log("Current Img : ", currentImage);
    setCurrentImage(photos[count]);
  };

  return (
    <div className="App">
      <h1>City Directory</h1>
      <Card currentImg={currentImage}/>

      <div className='btnContainer'>
          <Button action={reversePic} icon={symbols.left}/>
          <Button action={changePic} icon={symbols.right}/>
      </div>
    </div>
  );
}

export default App;
