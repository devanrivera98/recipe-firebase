import { Auth } from './components/Auth';
import './App.css';
import { db } from './config/firebase-config';
import { collection } from 'firebase/firestore';
import AddRecipe from './components/PersonalRecipes/AddRecipe';
import PersonalRecipeList from './components/PersonalRecipes/PersonalRecipeList';

function App() {

  const recipeCollectionRef = collection(db, 'recipes');

  return (
    <>
      <Auth />
      <AddRecipe collection={recipeCollectionRef} />
      <PersonalRecipeList />
    </>
  );
}

export default App;
