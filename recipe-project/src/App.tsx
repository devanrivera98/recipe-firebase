import { Auth } from './components/Auth';
import './App.css';
import { useEffect, useState } from 'react';
import { db } from './config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import AddRecipe from './components/Firebase/AddRecipe';

type Recipe = {
  name: string;
  prepTime: number;
  id: string;
  dairyFree: boolean;
};

function App() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const recipeCollectionRef = collection(db, 'recipes');

  useEffect(() => {
    const getRecipeList = async () => {
      try {
        const data = await getDocs(recipeCollectionRef);
        console.log(data);
        const filteredData: Recipe[] = data.docs.map((doc) => {
          const recipeData = doc.data() as Omit<Recipe, 'id'>;
          return {
            ...recipeData,
            id: doc.id,
          };
        });
        console.log('this is filtered data', filteredData);
        setRecipeList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getRecipeList();
  }, []);

  return (
    <>
      <Auth />
      <AddRecipe collection={recipeCollectionRef} />
      <div>
        {recipeList.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            <p>{recipe.prepTime}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
