import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import './header.css'


export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header className="h-20 p-4 md:p-0 shadow-md">
        <div className="container mx-auto h-full flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold font-body text-lightOrange">Heirloom</h1>
          </div>
          <div className="flex w-full justify-end md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className={`${isOpen ? 'block': 'hidden md:block'}`}>
            <ul className={`${isOpen ? 'mobile-menu flex-col gap-10' : 'justify-between gap-8'} flex`}>
              <li className={`${isOpen ? 'pt-10 mobile-menu-li' : ''} text-xl font-heading`}>LOG IN</li>
              <li className={`${isOpen ? 'mobile-menu-li' : ''} text-xl font-heading`}>RECIPES</li>
              <li className={`${isOpen ? 'mobile-menu-li' : ''} text-xl font-heading`}>TIPS</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
