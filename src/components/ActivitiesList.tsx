"use client";
import { CiHeart } from "react-icons/ci";
import { FaMotorcycle, FaShareAlt } from "react-icons/fa";
import { RiBookReadFill } from "react-icons/ri";
import { useState } from "react";

const ActivitiesList = ({ items }) => {
  const [likes, setLikes] = useState([]);

  const handleLikeClick = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

  const handleShareClick = (index) => {
    console.log("Share clicked for item at index:", index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full h-28 relative border-b border-zinc-100"
        >
          <div className="left-[28px] top-[15px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-neutral-800 text-lg font-medium font-['Mona Sans']">
                {item.name}
              </div>
            </div>
          </div>
          <div className="Group6 w-64 h-3.5 left-[49px] top-[43px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-600 text-sm font-normal font-['Mona Sans']">
              {item.time}
            </div>
            <div className="left-[95px] top-0 absolute flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-center text-neutral-600 text-sm font-normal font-['Mona Sans']">
                {item.location}
              </span>
            </div>
            <div
              className="left-[177px] top-0 absolute flex items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-center text-neutral-600 text-sm font-normal font-['Mona Sans']">
                {item.type}
              </span>
            </div>

            <div className="w-3.5 h-3.5 left-[67px] top-0 absolute" />
          </div>
          <div className="w-3.5 h-3.5 left-[202px] top-[43px] absolute" />
          <div className="w-4 h-4 left-[28px] top-[42px] absolute">
            <div className="Group w-4 h-4 left-0 top-0 absolute"></div>
          </div>
          <div className="w-6 h-6 left-[641px] top-[34px] absolute" />
          <div className="w-6 h-6 left-[690px] top-[34px] absolute" />

          <div className="w-20 left-[28px] top-[69px] absolute flex items-center justify-center">
            <div className="w-full h-7 bg-rose-100 rounded-3xl flex items-center px-3 py-1">
              <RiBookReadFill size={20} className="text-red-500 ml-1 mr-2" />

              <div className="text-red-500 text-xs font-medium font-['Mona Sans'] ml-auto">
                Menu
              </div>
            </div>
          </div>

          <div className="w-28 left-[113px] top-[69px] absolute flex items-center justify-center">
            <div className="w-full h-auto bg-rose-100 rounded-3xl flex items-center px-3 py-1">
              <FaMotorcycle size={20} className="text-red-500 mr-2" />
              <div className="text-red-500 text-xs font-medium font-['Mona Sans']">
                {item.foodType}
              </div>
            </div>
          </div>
          <div className="left-[641px] top-[62px] absolute flex items-center text-red-500 text-xs font-semibold font-['Mona Sans']">
            <div className="flex flex-col items-center">
              <div>
                <CiHeart
                  size={26}
                  onClick={() => handleLikeClick(index)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>{item.likes}</div>
            </div>
          </div>
          <div className="left-[696px] top-[62px] absolute flex items-center text-red-500 text-xs font-semibold font-['Mona Sans']">
            <FaShareAlt
              size={26}
              onClick={() => handleShareClick(index)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesList;
