import f1 from './image/redbull2.jpg';
import max from './image/Max.jpg'
import './App.css';
import { ProductInfo, ProductPhoto } from './components';


function App() {
  return (
    <div className="Parentbox">
      <div className='container'>
      <ProductPhoto photo={f1} />
      </div>
      <ProductInfo 
        isDiscount
        Category='F1 CAR' 
        Name="Red Bull Racing Honda"
      />

      <div className='Review-box'>
        <h2>What drivers said: </h2>
        <div className='Item'>
          <img src={max} />
          <div className='User'>
            <h3>Max Verstappen</h3>
            <p>The fastest car in the world, like a thunder!</p>
          </div>
        </div>
      </div>

    </div>
  );
}


export default App;
