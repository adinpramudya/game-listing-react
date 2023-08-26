import React, { useEffect } from "react";

function TrendingGame({ gameTrending }) {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="mt-5 hidden md:block">
        <div className="font-bold text-[30px] dark:text-white">
          Trending Games
        </div>
        <div className=" md:grid md:grid-cols-3 gap-4 lg:grid-cols-4">
          {gameTrending.map(
            (item, index) =>
              index < 4 && (
                <div
                  key={item.id}
                  className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="h-[270px] rounded-t-lg object-cover"
                  />
                  <h2 className="dark:text-white text-[20px] p-2 font-bold">
                    {item.name}
                  </h2>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendingGame;
