import './pickedRecipes.css'

export default function QuickEasyRecipes() {

  return (
    <>
      <section className="mt-16">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold">Quick & Easy</h1>
        </div>
        <div className="recipe-grid">
          <div>
            <div className='mapped-recipe-image-container'>
              <img className='w-full h-full object-cover' src='./images/banana-bread-photo.jpg' />
            </div>
            <h5 className='py-5'>CHICKEN BREAST</h5>
            <h1 className='text-2xl font-bold'>Sheet Pan Parmesan Chicken and Veggies</h1>
          </div>
        </div>
      </section>
    </>
  )
}
