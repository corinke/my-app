
import './index.css';
import RecipeList from './components/listRecipe.jsx';
<title>Cocktail maker 3000</title>
function App() {
  return (
    <div>
      <header>
        <h1>What cocktail should I make?</h1>
      </header>
      <div className='centre'>
        {/* checkboxes here  */}
        <h1>Select the ingredients you have to hand:</h1>
        <p class="note">Note: you can make these alcohol-free by omitting the alcohol</p>
        <div>
          <label>Rum</label>
          <input type="checkbox" id="rumCheck" value="check" />
          <label>Gin</label>
          <input type="checkbox" id="ginCheck" value="y" />
          <label>Vodka</label>
          <input type="checkbox" id="vodkaCheck" value="yes" />

          
          </div>
      </div>
    <div>
       <RecipeList className="centre" />  {/*this holds the structure of the recipe cards in listRecipe.jsx */}
    </div>
      
    </div>
  );
}

export default App;
