import React from "react";
import './App.css';
import cocktails from './data.js';
import { useState } from "react"
import RecipeList from "./listRecipe";



function AlcoholSelection() {
  const [drink, setAlcohol] = useState({
    alcohol: [],
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { alcohol } = drink;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setAlcohol({
        drink: [...alcohol, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setAlcohol({
        drink: alcohol.filter((e) => e !== value),
      });
    }
  };
    
  return (
    <>
            <div >
              <div >
                <div >
                  <input
                   
                    type="checkbox"
                    name="alcohol"
                    value="Rum"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    
                    htmlFor="flexCheckDefault"
                  >
                      Rum
                  </label>
                </div>
                <div >
                  <input
                   
                    type="checkbox"
                    name="alcohol"
                    value="Vodka"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                   
                    htmlFor="flexCheckDefault"
                  >
                      Vodka
                  </label>
                </div>
                <div >
                  <input
                    
                    type="checkbox"
                    name="alcohol"
                    value="Gin"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="flexCheckDefault"
                  >
                      Gin
                  </label>
                </div>
                <div >
                  <input
                    
                    type="checkbox"
                    name="alcohol"
                    value="Alcohol free"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    
                    htmlFor="flexCheckDefault"
                  >
                      Alcohol free
                  </label>
                </div>
              </div>
              
              </div>
  
            <div >
              <RecipeList />
            </div>
    </>
  );
}
  
export default AlcoholSelection;
