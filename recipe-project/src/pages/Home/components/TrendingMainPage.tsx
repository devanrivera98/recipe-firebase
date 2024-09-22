export default function TrendingMainPage() {
  return (
    <>
      <section className="px-4">
        <div>
          <div>
            <h1 className="text-center text-3xl font-semibold">Trending Now</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a className="md:flex">
              <div className="max-w-64 w-full md:w-36 md:w-auto">
                <img src="./images/apple-photo.jpg"></img>
              </div>
              <div>
                <span>
                  The 18 Recipes We Can't Wait To Make This September
                </span>
              </div>
            </a>
            <a className="md:flex">
              <div className="max-w-64 w-full md:w-36 md:w-auto">
                <img className="w-full h-auto object-fill aspect-square" src="./images/banana-bread-photo.jpg"></img>
              </div>
              <div>
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
