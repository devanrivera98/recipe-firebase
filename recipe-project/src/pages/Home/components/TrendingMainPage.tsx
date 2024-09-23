export default function TrendingMainPage() {
  return (
    <>
      <section className="px-4">
        <div>
          <div>
            <h1 className="text-center text-3xl font-semibold">Trending Now</h1>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <a className="md:flex">
              <div className="max-w-64 w-34 h-36 md:w-60 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/apple-photo.jpg"></img>
              </div>
              <div>
                <span className="text-2xl">
                  The 18 Recipes We Can't Wait To Make This September
                </span>
              </div>
            </a>
            <a className="md:flex">
              <div className="max-w-64 w-34 h-36 md:w-60 md:h-36 flex-shrink-0">
                <img className="w-full h-full" src="./images/banana-bread-photo.jpg"></img>
              </div>
              <div className="flex justify-center align-center">
                <span>
                  The 18 Recipes We Can't Wait To Make This September
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
