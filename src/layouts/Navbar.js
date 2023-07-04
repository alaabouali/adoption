import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";

function Navbar() {
  return ( 
    <BrowserRouter>
    <nav className="bg-green-500">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full">
          <h1 className="md:cursor-pointer h-9">Cattoo</h1>
        </div>
        <ul className="flex uppercase items-center gap-8 ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            Home
            </Link>
          </li>
          <NavLinks/>
        </ul>
        <div className="md:block hidden">
          <Button/>
        </div>
        {/* <div > */}
        {/* {mobile nav} */}
          {/* <ul className={`
          md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
          `}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            Home
            </Link>
          </li>
          <NavLinks/>
          </ul> */}
        {/* </div> */}
      </div>
    </nav>
    </BrowserRouter>
  );
}

export default Navbar;
