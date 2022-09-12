import React, { useEffect, useState } from "react";

const Home = () => {

    const APP_ID = "753cbc52";
    const APP_KEY = "42f7e4f615daf575d9dafee1622c8bfc";
  
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
      });
    
      const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
      }

      let mealRecipes = recipes.map((recipe) => (<Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>))
  
    return (
  
      <div className ="recipes-container">
        <div className="inner-recipes-container">
          <div className="row">
              {mealRecipes}
        </div>
        </div>
  </div>
  )};

export default Home;    