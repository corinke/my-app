import React, { useState, useEffect } from 'react';

function CocktailSelector() {
  const [cocktails, setCocktails] = useState([]);
  const [checkboxes, setCheckboxes] = useState({
    vodka: false,
    gin: false,
    rum: false,
  });

  useEffect(() => {
    const data =  [{
        label: 'test1',
    id: 0,
    name: 'Rum',
    cname: 'Mojito',
    image: 'https://www.liquor.com/thmb/MJRVqf-itJGY90nwUOYGXnyG-HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-720x720-primary-6a57f80e200c412e9a77a1687f312ff7.jpg',
    ingredients: ['Mint', 'White Rum', 'Sugar syrup', 'Lime juice', 'Soda water','Make alcohol free by removing the rum!'],
    recipe: 'Crush mint, add lime juice and the sugar syrup to a glass, crushing the mint with the spoon. Add some ice into the glass and pour over a shot of rum. Top with soda water and add more mint or lime juice to taste.',
    
    },
    {
        label: 'test2',
    id: 1,
    cname: 'Dark & Stormy',
    name: 'Rum',
    image: 'https://hips.hearstapps.com/hmg-prod/images/lede-1550781637.png',
    ingredients: ['Lime', 'Spiced Rum', 'Ginger beer', 'Bitters','Make alcohol free by removing the rum!'],
    recipe: 'Add lime juice, a splash of bitters and ice into a glass then pour over a shot of rum. Top with ginger beer and add more lime juice to taste.',
    
    },
    
    
    {
        label: 'test3',
    id: 2,
    cname: 'Espresso Martini',
    name: 'Vodka',
    
    image: 'https://www.liquor.com/thmb/YPZjEJvXCNu_L0cgNloGEgAOMLg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__09__01105623__espresso-martini-720x720-recipe-Molly-909b41dfe98c4f49b65a319ae28dd51e.jpeg',
    ingredients: ['Sugar syrup', 'Vodka', 'Fresh shot of espresso', 'Kahlua'],
    recipe: 'Brew the espresso shot. Add 1tbsp of sugar syrup to a cocktail shaker along with ice, 2 shots of vodka, 1 shot of Kahlua, then add the espresso. Strain into cocktail glasses.',
    
    },
    
    {
        label: 'test4',
        id: 3,
        cname: 'Moscow Mule',
        name: 'Vodka',
        image: 'https://www.homemadefoodjunkie.com/wp-content/uploads/2022/01/skinny-moscow-mule-3.jpg',
        ingredients: ['Vodka', 'Ginger beer', 'Bitters', 'Mint', 'Lime','Make alcohol free by removing the vodka!'],
        recipe: 'Add one shot of vodka to a glass, fill with ice. Top it up with ginger beer and add a few dashes of bitters. Stir together and add some mint and lime as garnish.',
        
        },
        {
            label: 'test5',
            id: 4,
            cname: 'Corpse Reviver No. 2',
            name: 'Gin',
            image: 'https://www.acouplecooks.com/wp-content/uploads/2020/08/Corpse-Reviver-No-2-001.jpg',
            ingredients: ['Vermouth', 'Gin', 'Cointreau', 'Absinthe', 'Lemon juice'],
            recipe: 'Combine a shot of vermouth, gin, cointreau, absinthe into a shaker, add the lemon juice and strain into a cocktail glass',
            
            },    
    ];
    
    setCocktails(data);
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const filteredCocktails = cocktails.filter((cocktail) => {
    // Filter cocktails based on checked checkboxes
    // Return true if at least one checkbox is checked
  });

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="vodka"
          checked={checkboxes.vodka}
          onChange={handleCheckboxChange}
        />
        Vodka
      </label>
      <label>
        <input
          type="checkbox"
          name="gin"
          checked={checkboxes.gin}
          onChange={handleCheckboxChange}
        />
        Gin
      </label>
      <label>
        <input
          type="checkbox"
          name="rum"
          checked={checkboxes.rum}
          onChange={handleCheckboxChange}
        />
        Rum
      </label>
      
      
        {filteredCocktails.map((cocktail) => (
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
        ))}
    </div>
  );
}

export default CocktailSelector;