import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="h-20 p-4 md:p-0 shadow-md">
        <div className="container mx-auto h-full flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold font-body text-lightOrange">Heirloom</h1>
          </div>
          <div className="flex w-full justify-end">
            <GiHamburgerMenu />
          </div>
          <div className={isOpen ? 'block' : 'hidden'}>
            <ul className="flex justify-between gap-8">
              <li className="text-xl font-heading">Log In</li>
              <li className="text-xl font-heading">Recipes</li>
              <li className="text-xl font-heading">Tips</li>
            </ul>
          </div>
          <div>

          </div>
        </div>
      </header>
    </>
  )
}
