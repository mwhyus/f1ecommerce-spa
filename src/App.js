import f1 from './image/redbull2.jpg';
import './App.css';
import { ProductInfo, ProductPhoto, ReviewItem } from './components';


function App() {
  return (
    <div className="Parentbox">
      <div className='container'>
      <ProductPhoto photo={f1} />
      </div>
      <ProductInfo 
        isDiscount
        Category='F1 CAR' 
        Name="Red Bull Racing Honda 16B"
      />
      <ReviewItem />

    </div>
  );
}


export default App;
