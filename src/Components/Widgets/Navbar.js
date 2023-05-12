import React from "react";

const Navbar = ({ myProps }) => {
  const { myFilterMenu, myuniqueMenu } = myProps;
  return (
    <nav className="pt-4 lg:px-64 md:px-32 px-6">
      <div className="flex justify-center bg-white p-2 rounded-full gap-x-2 md:gap-x-6 lg:gap-x-12">
        {myuniqueMenu.map((item) => (
          <>
            <button
              onClick={() => myFilterMenu(item)}
              className="font-semibold bg-blue-100 text-gray-800 md:py-2 md:px-6 px-2 rounded-full active:bg-blue-500 active:text-white capitalize"
            >
              {item}
            </button>
          </>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
