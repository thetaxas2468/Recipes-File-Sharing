// RecipeDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  // Access the recipe id from the URL params
  const { id } = useParams();

  // Dummy data for recipe (replace with actual data fetched from backend)
  const recipe = {
    id: id,
    title: 'Delicious Pancakes',
    imageUrl: 'pancakes.jpg',
    description: 'Start your day with these fluffy pancakes!',
    ingredients: ['1 cup flour', '2 tbsp sugar', '1 tsp baking powder', '1/2 tsp salt', '1 cup milk', '2 tbsp butter, melted', '1 egg'],
    instructions: '1. In a large bowl, mix together flour, sugar, baking powder, and salt. \n2. In another bowl, whisk together milk, melted butter, and egg. \n3. Pour wet ingredients into dry ingredients and stir until just combined. \n4. Heat a lightly oiled griddle or frying pan over medium-high heat. \n5. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. \n6. Cook until bubbles form on the surface, then flip and cook until browned on the other side.'
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            {/* <img src={require(`./images/${recipe.imageUrl}`).default} className="card-img-top" alt={recipe.title} /> */}
            <div className="card-body">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="card-text">{recipe.description}</p>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
