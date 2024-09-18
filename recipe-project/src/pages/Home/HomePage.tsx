import './home.css'

export default function HomePage() {

  return (
    <>
      <div className="container mx-auto">
        <section className="home-top-of-page">
          <img alt="martha-stewart-recipe-collection" src="./images/martha-stewart-photo.jpg" />
          <div className="bg-lightGreen">
            <h1 className='text-center py-2'>Food News</h1>
            <div className='grid-cols-1'>
              <a className='flex'>
                <div className='w-28 h-20'>
                  <img className='w-full h-full' src='./images/martha-stewart-photo.jpg' />
                </div>
                <div>
                  <span>Ina Garten's Beef Stew Recipe </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
