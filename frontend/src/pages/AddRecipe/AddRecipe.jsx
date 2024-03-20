// AddRecipe.js

import React, { useState } from 'react';


const AddRecipe = () => {
    // need to do recipe form
    const [formData, setFormData] = useState(
        {
        title: '',
        imageUrl: '',
        description: '',
        ingredients: '',
        instructions: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // You can add your logic to submit the form data to the backend here
        // Redirect to the home page after adding the recipe (assuming successful submission)
        
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center mb-4">Add Recipe</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Ingredients</label>
                            <textarea className="form-control" name="ingredients" value={formData.ingredients} onChange={handleChange} rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Instructions</label>
                            <textarea className="form-control" name="instructions" value={formData.instructions} onChange={handleChange} rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;
