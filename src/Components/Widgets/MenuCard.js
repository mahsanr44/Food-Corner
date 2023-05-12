import React from "react";

const MenuCard = ({ myMenuData }) => {
  return (
    <>
      <div className="flex justify-around flex-wrap">
        
        {myMenuData.map((item) => {
         const { id, category, name, description, image } = item;
         
          return (
            <>
              <div
                className=" w-72 rounded-md my-8  flex flex-col border-2 p-2 justify-evenly bg-slate-100"
                key={item?.id}
              >
                <div>
                  <span className="rounded-full flex   border-gray-400 border-2 w-6 h-6 text-center items-center justify-center">
                    {id}
                  </span>
                  <p className="mt-2 text-gray-500 uppercase">{category}</p>
                  <h2 className="text-3xl font-bold"> {name}</h2>
                  <p className="text-justify">{description}</p>
                </div>
                <div>
                  <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                  <img src={image} alt="img" />
                </div>
                <div className="justify-center flex mt-2">
                  <button className="border-2 p-2 border-gray-500 bg-blue-400  rounded-md w-28 hover:text-white ">
                    Order Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
