
import './index.css';
import RecipeList from './components/listRecipe.jsx';
import CocktailSelector from './components/cocktailselector';

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
        <p className="note">Note: you can make these alcohol-free by omitting the alcohol</p>
        <div>
          <CocktailSelector />
          
          </div>
      </div>
    <div>
       <RecipeList />  {/* this holds the structure of the recipe cards in listRecipe.jsx */}
    </div>
      
    </div>
  );
}

export default App;
