import useRecipeId from '../../../hooks/useRecipeId'
import useSearchApi from '../../../hooks/useSearchApi'
import './pickedRecipes.css'
import RecMappedRecipes from './RecMappedRecipes'



export default function QuickEasyRecipes() {

  const quickRecipes = [
    {
      id: 662917,
      image: "./images/meatloaf-photo.png",
      foodType: 'Beef',
      name: 'Tasty Easy Meatloaf',
      servingSize: 8
    },
    {
      id: 641836,
      image: "./images/parma-chicken-photo.png",
      foodType: 'Chicken',
      name: 'Easy Baked Parmesan Chicken',
      servingSize: 4
    },
    {
      id: 645598,
      image: "./images/turkey-risotto.png",
      foodType: 'Turkey',
      name: 'Creamy Risotto With Smoked Turkey Sausage',
      servingSize: 6
    },
    {
      id: 646561,
      image: "./images/chicken-corn-soup.png",
      foodType: 'Chicken',
      name: 'Hearty Chicken & Grilled Corn Soup',
      servingSize: 4
    },
    {
      id: 634496,
      image: "./images/bbq-mac-cheese.png",
      foodType: 'Side Dish',
      name: 'BBQ Mac and Cheese',
      servingSize: 4
    },
    {
      id: 641836,
      image: "./images/parma-chicken-photo.png",
      foodType: 'Chicken',
      name: 'Easy Baked Parmesan Chicken',
      servingSize: 4
    },
    {
      id: 645598,
      image: "./images/turkey-risotto.png",
      foodType: 'Turkey',
      name: 'Creamy Risotto With Smoked Turkey Sausage',
      servingSize: 6
    },
    {
      id: 646561,
      image: "./images/chicken-corn-soup.png",
      foodType: 'Chicken',
      name: 'Hearty Chicken & Grilled Corn Soup',
      servingSize: 4
    },
  ]

  // console.log(useSearchApi('waffle'));
  // console.log(useRecipeId(634496))

  return (
    <>
    <section className='px-2 md:px-0'>
      <RecMappedRecipes categoryTitle='Quick and Easy' recipeList={quickRecipes} />
    </section>
    </>
  )
}
