import './pickedRecipes.css'

export default function RecMappedRecipes({recipeList}) {

  const mappedRecipes = recipeList.map((recipe) => (
    <>
      <div>
        <div className='mapped-recipe-image-container'>
          <img className='w-full h-full object-cover' src={recipe.categoryTitle} />
        </div>
        <h5 className='py-5'>{recipe.foodType}</h5>
        <h1 className='text-2xl font-bold'>{recipe.name}</h1>
      </div>
    </>
  ))

  return (
    <>
      <section className="mt-16">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold">Quick & Easy</h1>
        </div>
        <div className="recipe-grid">
          {mappedRecipes}
        </div>
      </section>
    </>
  )
}
