import './home.css'

export default function HomePage() {

  //fix the section top padding when completed

  return (
    <>
      <div className="container mx-auto">
        <section className="home-top-of-page pt-28 gap-5">
          <img alt="martha-stewart-recipe-collection" src="./images/martha-stewart-photo.jpg" />
          <div className="bg-fadedGreen">
            <h1 className='text-center py-2'>Food News</h1>
            <div className='grid grid-cols-1 gap-7 py-2'>
              <a className='flex mx-5'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/martha-stewart-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span>Ina Garten's Beef Stew Recipe Is What We're Making</span>
                </div>
              </a>
              <a className='flex mx-5'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/martha-stewart-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
              <a className='flex mx-5'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/martha-stewart-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
              <a className='flex mx-5'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/martha-stewart-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
