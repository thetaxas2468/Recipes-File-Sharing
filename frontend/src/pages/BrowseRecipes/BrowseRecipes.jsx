import React from 'react';
import { Link } from 'react-router-dom';

const BrowseRecipes = () => {
    // need to do recipes list as slice
  // Dummy data for recipes
  const recipes = [
    {
      id: 1,
      title: 'Delicious Pancakes',
      imageUrl: 'pancakes.jpg',
      description: 'Start your day with these fluffy pancakes!',
    },
    {
      id: 2,
      title: 'Mouthwatering Pizza',
      imageUrl: 'pizza.jpg',
      description: 'A classic recipe for homemade pizza!',
    },
    // Add more recipes as needed
  ];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Browse Recipes</h2>
          <div className="row">
            {recipes.map(recipe => (
              <div className="col-lg-4 mb-4" key={recipe.id}>
                <div className="card">
                  {/* <img src={require(`./images/${recipe.imageUrl}`).default} className="card-img-top" alt={recipe.title} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>
                    <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 offset-md-2 text-center">
          <Link to="/" className="btn btn-lg btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseRecipes;