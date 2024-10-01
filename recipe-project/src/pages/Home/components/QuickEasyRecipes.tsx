import './pickedRecipes.css'
import RecMappedRecipes from './RecMappedRecipes'



export default function QuickEasyRecipes() {

  const quickRecipes = [
    {
      id: 1,
      image: "./images/apple-photo.jpg",
      foodType: 'Chicken',
      name: 'Balsamic Chicken'
    },
    {
      id: 2,
      image: "./images/banana-bread-photo.jpg",
      foodType: 'Chicken',
      name: 'Balsamic Chicken'
    },
    {
      id: 3,
      image: "./images/martha-stewart-photo.jpg",
      foodType: 'Chicken',
      name: 'Balsamic Chicken'
    },
    {
      id: 4,
      image: "./images/apple-photo.jpg",
      foodType: 'Chicken',
      name: 'Balsamic Chicken'
    },
  ]

  return (
    <>
    <section className='px-2 md:px-0'>
      <RecMappedRecipes categoryTitle='Quick and Easy' recipeList={quickRecipes} />
    </section>
    </>
  )
}
