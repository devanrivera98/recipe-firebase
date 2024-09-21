export default async function useRecipeId(recipeId: number) {

  const accessPoint = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`;

}
