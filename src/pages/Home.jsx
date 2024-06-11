import React from "react";
import banana from "../assets/banana.png";
import strawberry from "../assets/strawberry.png";
import blueberry from "../assets/blueberry.png";
import kiwi from "../assets/kiwi.png";

const Home = () => {
  return (
    <div>
      <div className="px-5">
        <h1 className="font-Bricolage font-extrabold text-4xl mt-20 ">
          Sip Your Way to Bliss Taste
        </h1>
        <p className="font-medium text-sm pr-10 mt-4 ">
          We're dedicated to bringing you deliciously fresh smoothies, made with
          love, care, and the finest ingredients.
        </p>
      </div>
      <div className="mt-8 h-28 items-center px-3 flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex gap-x-4">
          <div className="w-24 h-24 flex flex-col justify-center items-center ">
            <img
              src={banana}
              alt="banana smoothie"
              className="w-20 cursor-pointer"
            />
          </div>
          <div className="w-24 h-24  flex flex-col justify-center items-center ">
            <img
              src={strawberry}
              alt="banana smoothie"
              className="w-20 cursor-pointer"
            />
          </div>
          <div className="w-24 h-24  flex flex-col justify-center items-center ">
            <img
              src={kiwi}
              alt="banana smoothie"
              className="w-20 cursor-pointer"
            />
          </div>
          <div className="w-24 h-24  flex flex-col justify-center items-center ">
            <img
              src={blueberry}
              alt="banana smoothie"
              className="w-20 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
