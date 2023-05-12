import React from "react";

const MenuCard = ({ myMenuData }) => {
  console.log(myMenuData);

  return (
    <>
          <div className="flex justify-around flex-wrap">
      {myMenuData.map((item) => {
        return (
          <>

         
            <div className=" w-72 my-8  flex flex-col border-2 p-2 justify-evenly bg-slate-100" key={item?.id}>
              <div>
                <span className="rounded-full flex p-2 border-gray-400 border-2 w-6 h-6 text-center items-center justify-center">
                  {item?.id}
                </span>
                <p className="m-2 text-gray-500 uppercase">{item?.category}</p>
                <h2 className="text-3xl font-bold"> {item.name}</h2>
                <p className="">
                  {item?.description}
                </p>
                <p className="mt-2 font-semibold text-lg cursor-pointer underline">
                  Read More
                </p>
              </div>
              <div>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <img src={item?.image} alt="img" />
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
