export default function TrendingMainPage() {
  return (
    <>
      <section className="px-4">
        <div>
          <div className="pb-0.5 mb-6 flex md:justify-center">
            <h1 className="text-center text-3xl font-semibold trending-title">Trending Now</h1>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-10">
            <a className="md:flex">
              <div className="max-w-64 w-34 h-32 md:w-56 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/apple-photo.jpg"></img>
              </div>
              <div className="flex justify-center items-center">
                <span className="font-bold text-lg md:text-2xl md:px-2">
                  The 18 Recipes We Can't Wait To Make This September
                </span>
              </div>
            </a>
            <a className="md:flex">
              <div className="max-w-64 w-34 h-32 md:w-56 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/banana-bread-photo.jpg"></img>
              </div>
              <div className="flex justify-center items-center">
                <span className="font-bold text-lg md:text-2xl md:px-2">
                  The 18 Recipes We Can't Wait To Make This September
                </span>
              </div>
            </a>
            <a className="md:flex">
              <div className="max-w-64 w-34 h-32 md:w-56 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/apple-photo.jpg"></img>
              </div>
              <div className="flex justify-center items-center">
                <span className="font-bold text-lg md:text-2xl md:px-2">
                  Our 10 Best Apple Crisp Recipes of All Time
                </span>
              </div>
            </a>
            <a className="md:flex">
              <div className="max-w-64 w-34 h-32 md:w-56 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/banana-bread-photo.jpg"></img>
              </div>
              <div className="flex justify-center items-center">
                <span className="font-bold text-lg md:text-2xl md:px-2">
                  We're Hooked on Hatch Chiles
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
