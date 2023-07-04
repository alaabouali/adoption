import React from "react";
import { Link } from "react-router-dom";
import { links } from "../constant/MyLinks";

const NavLinks = () => {
  

  return (
    <div className="flex items-center gap-8">
      {links.map((ele, i) => {
        return (
          <div key={i}>
            <div className="px-3 text-left md:cursor-pointer group">
              <h1 className="py-7">{ele.name}</h1>
              {ele.submenu && (
                <div>
                  <div className="absolute top-20 hidden group-hover:block hover:block">
                    <div className="py-3">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-red-500 rotate-45"></div>
                    </div>
                    <div className="bg-red-500 p-5 grid grid-cols-3 gap-10">
                      {ele.sublinks.map((mysublinks) => (
                        <div>
                          <h1 className="text-lg font-bold">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li className="text-sm text-gray-600 my-2.5">
                              <Link
                                to={slink.ele}
                                className="hover:text-blue-500"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
