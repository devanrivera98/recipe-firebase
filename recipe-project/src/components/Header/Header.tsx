export default function Header() {

  return (
    <>
      <header className="h-20 container mx-auto">
        <div className="h-full flex justify-between items-center">
          <div>
            <h1 className="text-xl">Heirloom</h1>
          </div>
          <div>
            <ul className="flex justify-between gap-8">
              <li className="text-xl">Log In</li>
              <li className="text-xl">Recipes</li>
              <li className="text-xl">Tips</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
