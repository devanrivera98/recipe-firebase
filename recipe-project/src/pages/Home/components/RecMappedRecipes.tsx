import './pickedRecipes.css'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


interface Recipe {
  id: number;
  image: string;
  foodType: string;
  name: string;
}

interface RecMappedRecipesProps {
  categoryTitle: string;
  recipeList: Recipe[];
}

export default function RecMappedRecipes({categoryTitle, recipeList}: RecMappedRecipesProps) {

  const mappedRecipes = recipeList.map((recipe: Recipe) => (
    <>
      <a>
        <div className='relative'>
          <button className='mapped-recipes-button'>
            <FaRegHeart style={{color: 'white'}} />
          </button>
          <div className='mapped-recipe-image-container'>
            <img className='w-full h-full object-cover' src={recipe.image} />
          </div>
          <h5 className='py-2.5 md:py-5'>{recipe.foodType}</h5>
          <h1 className='text-2xl font-bold'>{recipe.name}</h1>
        </div>
      </a>
    </>
  ))

  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold mb-8">{categoryTitle}</h1>
        </div>
        <div className="recipe-grid">
          {mappedRecipes}
        </div>
      </div>
    </>
  )
}
