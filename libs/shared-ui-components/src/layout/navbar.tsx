/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img
              src="/images/photo_2021-09-15_17-19-51.png"
              alt="easybank logo"
            />
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem, index) => (
              <a
                key={index}
                className="mx-3 py-5 hover:gradient-border-bottom"
                href="#"
              >
                {navItem}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-white text-xs bg-gradient-to-r from-green-400 to-blue-500  focus:outline-none focus:ring ring-green-400">
            S'enregistrer
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/images/photo_2021-09-15_17-19-51.png"
              alt=""
            />
            x
            {/* <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            /> */}
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
