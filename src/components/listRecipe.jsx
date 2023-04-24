
import './App.css';
import cocktails from './data.js';



  function RecipeList() {
    
    return (

    <div> {/* arrays to pull in the cocktail details from data.js where the data is stored */}
        <h1>Recipes</h1>
        {cocktails.map(cocktail =>
          <div key={cocktail.id}>
            <h2>{cocktail.name}</h2>
            <img src={cocktail.image} alt={cocktail.name} />
            <ul>
              {cocktail.ingredients.map(ingredient =>
                <li key={ingredient}>
                  {ingredient}
                </li>
              )}
            
           <p>{cocktail.recipe}</p>
            
                
            </ul>
          </div>
        )}
      </div>
    );
              }

  export default RecipeList

