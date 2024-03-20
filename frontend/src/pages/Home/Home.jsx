// Home.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Dummy data for featured recipes or categories
    const featuredRecipes = [
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
        // Add more featured recipes as needed
    ];
    useEffect(()=>{
// we need to fetch the recipes from the server
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h1>Welcome to Recipe Sharing Platform</h1>
                    <p className="lead">Discover and share amazing recipes with the community.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center">Featured Recipes</h2>
                    <div className="row">
                        {featuredRecipes.map(recipe => (
                            <div className="col-lg-6 mb-4" key={recipe.id}>
                                <div className="card">
                                    {/* <img src={require(`./images/${recipe.imageUrl}`).default} className="card-img-top" alt={recipe.title} /> */}
                                    <div className="card-body">
                                        <h3 className="card-title">{recipe.title}</h3>
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
                    <Link to="/BrowseRecipes" className="btn btn-lg btn-secondary mx-2">Browse Recipes</Link>
                    <Link to="/AddRecipe" className="btn btn-lg btn-success mx-2">Add Recipe</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
