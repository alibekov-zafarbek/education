/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
// import { Rating } from 'react-simple-star-rating'

const CardGroup = () => {
  const {t} = useTranslation()
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    {
      id: 1,
      MarkazName: t('eduName'),
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
    {
      id: uuidv4(),
      MarkazName: "Root Academy",
      type: "oquv markaz",
      rating: 4.5,
      address: "Uzbekistan, Andijan",
      description:
        "Root Academy is a leading provider of high quality education in the world. We are a team of dedicated and talented teachers, who are passionate about teaching and learning. We are committed to providing the best education in the world.",
    },
  ]);

  return (
    <div>
      <div className="container mx-auto z-10">
        <div className="flex flex-wrap -mx-4">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
            >
              <Link
                to={`/item/:${item.id}`}
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {item.type}
                  </span>
                  <br />
                  <h2 className="mt-2 mb-2  font-bold">{item.MarkazName}</h2>
                  <p className="text-sm">{item.description}</p>
                  {/* <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">ab</span>&nbsp;
                  <span className="font-bold text-xl">45,00</span>&nbsp;
                  <span className="text-sm font-semibold">€</span>
                </div> */}
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                  <span className="flex items-center mb-1">
                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                    {item.address}
                  </span>
                </div>
                {/* <div className=" flex-wrap  columns-5 p-4 flex items-center text-sm text-gray-600">

              <Rating
                    onClick={handleRating1}
                    ratingValue={rating1}
                    size={30}
                    // transition
                    allowHalfIcon
                    // showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                    className='fill-current'
                  />
              </div> */}
                <div className="p-4 flex items-center text-sm text-gray-600">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current text-yellow-500"
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                  
                  <span className="ml-2">{item.rating}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
