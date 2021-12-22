import f1 from './image/redbull2.jpg';
import './App.css';
import { ProductInfo } from './components/ProductInfo';
import { ProductPhoto } from './components/ProductPhoto';

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
    </div>
  );
}


export default App;
