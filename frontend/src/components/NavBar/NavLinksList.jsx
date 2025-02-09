import React from "react";
import { useState, useEffect } from "react";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, NavLink } from "react-router-dom";
import { apiCall } from "../../services/apiConnector";
import { categoryApis } from "../../services/apis.js";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLinksList = () => {
  const [allCategory, setAllCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAllCategory = async () => {
    try {
      const response = await apiCall("get", categoryApis.GET_ALL_CATEGORY);
      // console.log("This is reponse of fetching all the category from backend = ", response);
      setAllCategory(response.data.data);
    } catch (error) {
      console.log(
        "Error occur while fetching all category from backend :: ",
        error
      );
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <ul className='flex flex-row gap-[1rem]'>
      {NavbarLinks.map((item, index) => {
        if (item.title === "Catalog") {
          return (
            <div
              key={index}
              className='relative text-richblack-300 hover:text-yellow-25'
            >
              <li
                className='flex items-center'
                onMouseEnter={() => setIsModalOpen(true)}
                onMouseLeave={() => setIsModalOpen(false)}
              >
                {item.title}
                <span className='left text-lg'>
                  <MdKeyboardArrowDown />
                </span>
              </li>
              {isModalOpen && (
                <ul
                  className='absolute z-40 flex h-fit w-fit flex-col gap-2 rounded-lg bg-white p-2 px-5 text-black'
                  onMouseEnter={() => setIsModalOpen(true)}
                  onMouseLeave={() => setIsModalOpen(false)}
                >
                  {allCategory &&
                    allCategory.map((cat, index) => (
                      <Link to={cat?.name} key={index}>
                        {cat.name}
                      </Link>
                    ))}
                </ul>
              )}
            </div>
          );
        }

        return (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-25" : "text-richblack-300"}`
              }
            >
              <button>{item.title}</button>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinksList;
