import { Auth } from './components/Auth';
import './App.css';
import { useEffect } from 'react';
import { db } from './config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

// type Recipe = {
//   name: string;
//   prepTime: number;
//   id: string;
//   dairyFree: boolean;
// }


function App() {
  // const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const recipeCollectionRef = collection(db, 'recipes');

  useEffect(() => {
    const getRecipeList = async () => {
      try {
        const data = await getDocs(recipeCollectionRef);
        console.log(data);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data() ,
          id: doc.id,
        }));
        console.log(filteredData)
        // setRecipeList(filteredData)
      } catch (err) {
        console.error(err);
      }
    };

    getRecipeList();
  }, []);

  return (
    <>
      <Auth />
      {/* <div>
        {recipeList.map((recipe) => (
          <div>
            <h1>{recipe.name}</h1>
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;
