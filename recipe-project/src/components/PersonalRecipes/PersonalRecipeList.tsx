import { useRecipeList } from "../../hooks/useRecipeList"


export default function PersonalRecipeList() {

  const recipeList = useRecipeList();
  console.log("here is all the recipe", recipeList);

  return (
      <>
      <div>
        {recipeList.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            <p>{recipe.prepTime}</p>
          </div>
        ))}
      </div>
      </>
  )

}
