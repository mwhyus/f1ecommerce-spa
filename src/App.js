import f1 from './image/redbull.jpg';
import './App.css';

function App() {

  let Category = "F1 CAR"
  let dot = '.'
  let Price = `650${dot}000`

  return (
    <div class="Parentbox">
      <div class='Photo'>
        <img src={f1} />
      </div>
      <div class='Description'>
        <h2 class="Category">{Category}</h2>
        <h1 class="Title">Red Bull F1 W05 Hybrid</h1>
        <p class="Price">$ {Price}</p>
        <p class="info">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}

export default App;
