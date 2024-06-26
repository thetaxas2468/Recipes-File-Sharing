import AddRecipe from './pages/AddRecipe/AddRecipe';
import BrowseRecipes from './pages/BrowseRecipes/BrowseRecipes';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipePage/RecipePage';
import Signin from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie"
import { useEffect } from 'react';
import { changeEmail } from './store';
import UserLogo from './components/UserLogo/UserLogo';
function App() {
  const loggedIn = Cookies.get("user");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeEmail(loggedIn))
  },[]);
  return (
    <Router>
      <div className='App'>
        {loggedIn && <div><UserLogo /></div>}
        {!loggedIn && <div><UserLogo /></div>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/AddRecipe' element={<AddRecipe />} />
          <Route exact path='/BrowseRecipes' element={<BrowseRecipes />} />
          <Route exact path='/recipes/:id' element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;