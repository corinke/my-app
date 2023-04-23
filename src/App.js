
import './index.css';
import RecipeList from './components/listRecipe.jsx';
import Checkbox from './components/conditions.jsx';
import AlcoholSection from './components/conditions.jsx';

<title>Cocktail maker 3000</title>
function App() {
  return (
    <div className="orange">
      <header>
        <h1>What cocktail should I make?</h1>
      </header>
      <div>
        {/* checkboxes here  */}
        <h2>Select the ingredients you have to hand:</h2>
        <p class="note">Note: you can make these alcohol-free by omitting the alcohol</p>
        <div>
          <AlcoholSection />
          
          </div>
      </div>
    <div>
       <RecipeList />  {/*this holds the structure of the recipe cards in listRecipe.jsx */}
    </div>
      
    </div>
  );
}

export default App;
