import './App.css';
import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      
      {/* <RandomColor/> */}

      <StarRating noOfStars={10}/>
      
    </div>
  );
}

export default App;
