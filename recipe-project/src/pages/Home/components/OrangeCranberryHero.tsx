export default function OrangeCranberryHero() {
  return (
    <>
    <section>
      <a className="grid orange-grid-container">
        <div className="orange-cranberry-aspect orange-image-container">
          <img className="w-full h-full object-cover" src="./images/orange-cranberry-photo.png"></img>
        </div>
        <div className="orange-hero-card ml-10">
          <div className="flex flex-col p-6 w-96 bg-lightOrange">
            <div>
            <span className="text-lg">IN THE KITCHEN</span>
            </div>
            <span className="text-4xl my-0.5 py-4">Cookin' 9 to 5 With the Parton Sisters</span>
            <div>
            <p className="text-lg mb-4">Read more about their new cookbook and learn what "home" taste like to Dolly and Rachel.</p>
            </div>
          </div>
        </div>
      </a>
    </section>
    </>
  )
}
