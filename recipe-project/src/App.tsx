import { Auth } from './components/Auth';
import './App.css';
import { db } from './config/firebase-config';
import { collection } from 'firebase/firestore';
import AddRecipe from './components/PersonalRecipes/AddRecipe';
import PersonalRecipeList from './components/PersonalRecipes/PersonalRecipeList';

function App() {
  // const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const recipeCollectionRef = collection(db, 'recipes');

  // useEffect(() => {
  //   const getRecipeList = async () => {
  //     try {
  //       const data = await getDocs(recipeCollectionRef);
  //       console.log(data);
  //       const filteredData: Recipe[] = data.docs.map((doc) => {
  //         const recipeData = doc.data() as Omit<Recipe, 'id'>;
  //         return {
  //           ...recipeData,
  //           id: doc.id,
  //         };
  //       });
  //       console.log('this is filtered data', filteredData);
  //       setRecipeList(filteredData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getRecipeList();
  // }, []);

  return (
    <>
      <Auth />
      <AddRecipe collection={recipeCollectionRef} />
      <PersonalRecipeList />
    </>
  );
}

export default App;
